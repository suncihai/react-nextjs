import axios from 'axios';
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'
import { connect } from 'react-redux'
import { startClock, serverRenderClock, getPartners } from '../store'
import Examples from '../components/example'
import { websocketSub } from '../common/js/rx-websocket'
import { CoinList } from '../common/js/const'

const PartnerContainer = styled.div`
   width: 1000px;
   margin: 0 auto;
   padding-top: 110px;
   padding-bottom: 100px;
`

const PartnerWrap = styled.div`
   display: inline-block;
   padding: 12.5px 0;
   margin-right: 20px;
   &:nth-child(4n) {
      margin-right: 0;
   }
   img {
      width: 235px;
   }
`
class Partners extends React.Component {

   componentDidMount() {
      this.getPartners()
      this.timer = setInterval(() => this.props.startClock(), 1000)
      this.getWebSocket()
   }

   componentWillUnmount () {
      const subItems = websocketSub.getSubItems()
      subItems.forEach((subObj, index) => {
         if(subObj.subscribe === 'according') {
           websocketSub.createSubject({
             subscribe: 'according_cancel',
             local: subObj.subscribeObj.local,
           })
           subItems.splice(index, 1)
         }
       })
      clearInterval(this.timer)
    }

    getWebSocket() {
      const accSubject = websocketSub.createSubject({
         subscribe: 'according',
         local: 'en_US',
       })
    }

   getPartners = async () => {
      const timestamp = new Date().getTime();

      const params = {
         lang: 'zh_CN',
         timestamp,
         chnl: 'web'
      }

      const ret = await axiosClient({
        method: 'GET',
        url: '/api/partners',
        params,
      })

      if (ret.success) {
         this.props.getPartners(ret.data)
      } 

   }

   render(){ 
      if(!this.props.partners.agencies) {
         return <Loading /> 
      }else{
         return (
           <PartnerContainer>
            { this.props.partners.agencies.map( ele =>
               <PartnerWrap key={ele.img}>
                  <a href={ele.url} target="_blank">
                     <img src={ele.img}/>
                  </a>
               </PartnerWrap>
            )}
            {/* <Examples /> */}
           </PartnerContainer>
         )
      }
   }
}

const mapDispatchToProps = { startClock, getPartners }
const mapStateToProps = ({partners}) => ({partners})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Partners)
