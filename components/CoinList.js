import axios from 'axios'
import _ from 'lodash';
import React from 'react'
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
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
      let gauge = []

      var config1 = liquidFillGaugeDefaultSettings();
      config1.waveAnimateTime = 5000;
      config1.waveHeight = 0.08;
      config1.waveOffset = 0.25;
      config1.valueCountUp = false;
      config1.displayPercent = false;
      config1.textSize = 2;
      config1.minValue = 0;
      config1.maxValue = 10;
      gauge[0] = loadLiquidFillGauge("fillgauge1", 0, config1);
      var config2 = liquidFillGaugeDefaultSettings();
      config2.waveAnimateTime = 5000;
      config2.waveHeight = 0.08;
      config2.waveOffset = 0.25;
      config2.valueCountUp = false;
      config2.displayPercent = false;
      config2.textSize = 2;
      config2.minValue = 0;
      config2.maxValue = 10;
      gauge[1] = loadLiquidFillGauge("fillgauge2", 0, config2);
      var config3 = liquidFillGaugeDefaultSettings();
      config3.waveAnimateTime = 5000;
      config3.waveHeight = 0.08;
      config3.waveOffset = 0.25;
      config3.valueCountUp = false;
      config3.displayPercent = false;
      config3.textSize = 2;
      config3.minValue = 0;
      config3.maxValue = 10;
      gauge[2] = loadLiquidFillGauge("fillgauge3", 0, config3);
      var config4 = liquidFillGaugeDefaultSettings();
      config4.waveAnimateTime = 5000;
      config4.waveHeight = 0.08;
      config4.waveOffset = 0.25;
      config4.valueCountUp = false;
      config4.displayPercent = false;
      config4.textSize = 2;
      config4.minValue = 0;
      config4.maxValue = 10;
      gauge[3] = loadLiquidFillGauge("fillgauge4", 0, config4);
      var config5 = liquidFillGaugeDefaultSettings();
      config5.waveAnimateTime = 5000;
      config5.waveHeight = 0.08;
      config5.waveOffset = 0.25;
      config5.valueCountUp = false;
      config5.displayPercent = false;
      config5.textSize = 2;
      config5.minValue = 0;
      config5.maxValue = 10;
      gauge[4] = loadLiquidFillGauge("fillgauge5", 0, config5);
      var config6 = liquidFillGaugeDefaultSettings();
      config6.waveAnimateTime = 5000;
      config6.waveHeight = 0.08;
      config6.waveOffset = 0.25;
      config6.valueCountUp = false;
      config6.displayPercent = false;
      config6.textSize = 2;
      config6.minValue = 0;
      config6.maxValue = 10;
      gauge[5] = loadLiquidFillGauge("fillgauge6", 0, config6);

      this.getCoinList(gauge);
    }

   componentWillUnmount() {
      if(this.socket) {
         this.socket.close()
         this.socket.disconnect()
      }
   }
  
    getCoinList = async (gauge) => {
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
      this.subscribeStream(Object.keys(coinsParsed), coinsParsed, gauge)
    }
  
    subscribeStream(symbols, coins, gauge) {
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
        this.handleMessage(message, coins, gauge)
      })
    }
  
    handleMessage(message, coins, gauge) {
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
  
        this.updateCoin(coin, coins, gauge)
      }
    }
  
    updateCoin(coin, coins, gauge) {
      const { status } = this.state
      this.setState({status:!status})
      coins[coin.name] = coin
      this.props.getCoinPrice(coins)
      
      Object.values(coins).map((ele, index)=>{
         if(ele.name=="BTC"){
            let num = `${parseFloat(ele.price).toFixed(2)}`
            num = num.split('.')

            gauge[0].update(parseInt(num[0][0]))
            gauge[1].update(parseInt(num[0][1]))
            gauge[2].update(parseInt(num[0][2]))
            gauge[3].update(parseInt(num[0][3]))
            gauge[4].update(parseInt(num[1][0]))
            gauge[5].update(parseInt(num[1][1]))

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
               <CoinGraphContainer>
                  <span>BTC</span>
                  <svg id="fillgauge1" width="70" height="70"></svg>
                  <svg id="fillgauge2" width="70" height="70"></svg>
                  <svg id="fillgauge3" width="70" height="70"></svg>
                  <svg id="fillgauge4" width="70" height="70"></svg>
                  <svg id="fillgauge5" width="70" height="70"></svg>
                  <svg id="fillgauge6" width="70" height="70"></svg>
               </CoinGraphContainer>
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
