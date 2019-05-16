import axios from 'axios';
import { axiosClient } from '../common/js/axios'
import styled from 'styled-components'
import Loading from '../components/Loading'

import { connect } from 'react-redux'
import { startClock, serverRenderClock } from '../store'
import Examples from '../components/example'

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
   state = {
      partners: {}
   }

   static getInitialProps ({ reduxStore, req }) {
      const isServer = !!req
      // DISPATCH ACTIONS HERE ONLY WITH `reduxStore.dispatch`
      reduxStore.dispatch(serverRenderClock(isServer))
  
      return {}
   }

   componentDidMount() {
      this.getPartners()
      this.timer = setInterval(() => this.props.startClock(), 1000)
   }

   componentWillUnmount () {
      clearInterval(this.timer)
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
         this.setState({
            partners: ret.data
         },()=>{
            console.log('partners', this.state.partners)
         })
      } 

   }

   render(){ 
      const { partners } = this.state
      if(!partners.agencies) {
         return <Loading /> 
      }else{
         return (
           <PartnerContainer>
            { partners.agencies.map( ele =>
               <PartnerWrap key={ele.img}>
                  <a href={ele.url} target="_blank">
                     <img src={ele.img}/>
                  </a>
               </PartnerWrap>
            )}
            <Examples />
           </PartnerContainer>
         )
      }
   }
}

const mapDispatchToProps = { startClock }

export default connect(
   null,
   mapDispatchToProps
 )(Partners)
