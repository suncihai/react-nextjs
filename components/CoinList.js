import axios from 'axios'
import _ from 'lodash';
import React from 'react'
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/layout/Loading'
import { connect } from 'react-redux'
import { cryptoApiUrl, cryptoStreamUrl } from '../common/js/const'
import { getCoinPrice } from '../store'
import cx from 'classname'
import {Sparklines,SparklinesLine,SparklinesReferenceLine} from 'react-sparklines';

const CoinListContainer = styled.div`
   width: 1000px;
   margin: 0 auto;
   padding-top: 110px;
   padding-bottom: 100px;
   .min-max-value {
     display: inline-block;
     height: 200px;
     position: relative;
     div {
       &.max {
         position: absolute;
         top: 0;
       }
       &.min {
         position: absolute;
         bottom: 0;
       }
     }
   }
`

const CoinGraphContainer = styled.div`
   margin-bottom: 30px;
   svg {
     margin-right: 10px;
   }
   #fillgauge4 {
     margin-right: 25px;
   }
   span {
     display: inline-block;
     vertical-align: top;
     line-height: 75px;
     font-size: 20px;
     font-weight: bold;
     margin-right: 15px;
   }
`

const CoinWrap = styled.div`
   display: inline-block;
   padding: 12.5px 0;
   width: 125px; 
   text-align: center;
   border: 1px solid #fcfcfd;
   font-weight: bold;
`
class CoinList extends React.Component {
   state = {
      status: true,  //To trigger rerendering page
      socket: {},
      btcData: [],
   }

   componentDidMount() {      
      this.getCoinList();
    }

   componentWillUnmount() {
      if(this.socket) {
         this.socket.close()
         this.socket.disconnect()
      }
   }
  
    getCoinList = async () => {
      const ret = await axios.get(`${cryptoApiUrl}/data/top/totalvolfull?limit=100&tsym=USD`)
      const coins = ret.data.Data

      let initialBTC = await axiosClient({
        method: 'GET',
        url: '/api/get_btc_initial_price',
      })

      let tmp = initialBTC.split(",")
      let btcPrice = []
      for(let i = 0;i<100;i++){
        btcPrice.push(parseFloat(tmp[2*i+1]))
      }
      this.setState({btcData:btcPrice})

      let coinsParsed = {}
  
      coins.forEach(coin => {
        coin = {
          name: coin.RAW.USD.FROMSYMBOL,
          price: coin.RAW.USD.PRICE.toFixed(2)
        }
        coinsParsed[coin.name] = coin
      })
  
      this.props.getCoinPrice(coinsParsed)
      this.subscribeStream(Object.keys(coinsParsed), coinsParsed)
    }
  
    subscribeStream(symbols, coins) {
      /*
        Subscribe to websocket stream using coin symbols.
      */
      this.socket = io.connect(cryptoStreamUrl)
      let subscriptions = []
  
      symbols.forEach(symbol => {
        subscriptions.push('5~CCCAGG~'+ symbol +'~USD')
      })
  
      this.socket.emit('SubAdd', {'subs': subscriptions})
  
      this.socket.on('m', message => {
        this.handleMessage(message, coins)
      })
    }
  
    handleMessage(message, coins) {
      //console.log('coins', this.props.coins)
  
      message = message.split('~')
      
      // coin value goes up(1) or down(2)
      if ((message[4] === "1") || (message[4] === "2")) {
  
        let coin = {
          name: message[2],
          price: message[5]
        }
  
        if (message[4] === "1") {
          coin.isUp = true
          coin.isDown = false
        }
        else if (message[4] === "2") {
          coin.isUp = false
          coin.isDown = true
        }
  
        this.updateCoin(coin, coins)
      }
    }
  
    updateCoin(coin, coins) {
      const { status } = this.state
      this.setState({status:!status})
      coins[coin.name] = coin
      this.props.getCoinPrice(coins)
      
      Object.values(coins).map((ele, index)=>{
         if(ele.name=="BTC"){
            let num = `${parseFloat(ele.price).toFixed(2)}`
            num = num.split('.')

            let arr = this.state.btcData
            arr.push(parseFloat(ele.price).toFixed(2))
            this.setState({btcData:arr})
         }
      })
      /*
        Reset coin status after short interval to remove binded css classes.
        This will allow tick animations be reapplied and play again.
      */
      window.setTimeout(() => {
        coins[coin.name].isUp = false
        coins[coin.name].isDown = false
        this.props.getCoinPrice(coins)
      }, 500)
    }

   render(){
      if(!this.props.coins) {
         return (
            <>
               <Loading />
            </>
         )
      }else{
         const graphCss = {
           width: '1000px',
           height: '200px'
         }
         
         return (
           <>
            <CoinListContainer>
               <Sparklines style={graphCss} data={this.state.btcData} limit={100}>
                 <SparklinesLine strokeWidth="1" color="#08aba6"/>
               </Sparklines>
               <div className="min-max-value">
                 <div className="max">${_.max(this.state.btcData)}</div>
                 <div className="min">${_.min(this.state.btcData)}</div>
               </div>
               { Object.values(this.props.coins).map(ele =>
                  <CoinWrap key={ele.name} className={cx({'tickGreen':ele.isUp,'tickRed':ele.isDown})}>
                     <div>{ele.name}</div>
                     <div>${ele.price}</div>
                  </CoinWrap>
               )}
            </CoinListContainer>
           </>
         )
      } 
   }
}

const mapDispatchToProps = { getCoinPrice }
const mapStateToProps = ({coins}) => ({coins})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CoinList)
