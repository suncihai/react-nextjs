import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import bannerImg from '../assets/img/home_bg.jpg'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    height: 500px;
    background:url(${bannerImg}) no-repeat 100% 100%;
    background-size: 1920px;
    .title {
        padding-top: 180px;
        width: 1000px;
        margin: 0 auto;

    }
`

class Home extends React.Component {
  state = {
    isDark : false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

   render(){
      const { isDark } = this.state
 
      return (
        <Layout isDark={isDark}>
          <Body>
            <Container />
          </Body>
        </Layout>
      )
   }
}

export default Home
