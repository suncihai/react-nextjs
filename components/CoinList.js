import axios from 'axios'
import React from 'react'
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { cryptoApiUrl, cryptoStreamUrl } from '../common/js/const'
import { getCoinPrice } from '../store'
import cx from 'classname'

const CoinListContainer = styled.div`
   width: 1000px;
   margin: 0 auto;
   padding-top: 110px;
   padding-bottom: 100px;
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
      status: true  //To trigger rerendering page
   }

   componentDidMount() {
      this.getCoinList();
    }
  
    getCoinList = async () => {
  
      const ret = await axios.get(`${cryptoApiUrl}/data/top/totalvolfull?limit=100&tsym=USD`)
      const coins = ret.data.Data
  
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
      let cryptoio = io.connect(cryptoStreamUrl)
      let subscriptions = []
  
      symbols.forEach(symbol => {
        subscriptions.push('5~CCCAGG~'+ symbol +'~USD')
      })
  
      cryptoio.emit('SubAdd', {'subs': subscriptions})
  
      cryptoio.on('m', message => {
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
         return (
           <>
            <CoinListContainer>
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
