import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import bannerBg from '../assets/img/home_bg.jpg'
import banner1 from '../assets/img/banner1.jpg'
import banner2 from '../assets/img/banner2.jpg'
import banner3 from '../assets/img/banner3.png'
import banner4 from '../assets/img/banner4.png'
import banner5 from '../assets/img/banner5.jpg'
import CoinList from '../components/CoinList'
import Head from 'next/head'

import * as css from '../common/css/style.css'


import { Carousel } from 'antd';

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    height: 500px;
    background:url(${bannerBg}) no-repeat 100% 100%;
    background-size: 1920px;
    .title {
        padding-top: 180px;
        width: 1000px;
        margin: 0 auto;

    }
    img {
      width: 290px;
      margin: 5px;
    }
    .ant-carousel {
       padding-top: 180px;
       .slick-slider {
          height: 300px;
          width: 1200px;
          margin: 0 auto;
       }
       .slick-slide {
         img {
            display: inline-block;
         }
       }
       h2 {
         font-size: 30px;
         color: #fff;
       }
    }
`

class Index extends React.Component {
  state = {
    isDark : false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.onScroll)
  }

  onScroll = () => {
    if (window.scrollY > 250) {
       this.setState({isDark: true})
    } else {
       this.setState({isDark: false})
    }
  }

   render(){
      const { isDark } = this.state

      const CarouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 3000,
      }
 
      return (
        <Layout isDark={isDark} className={css.sovleNextBug}>
          <Head>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.slim.js"></script>
          </Head>
          <Body>
            <Container>
               <Carousel autoplay {...CarouselSettings}>
                 <div>
                    <h2>A Premier Global Digital Asset Trading Platform</h2>
                 </div>
                 <div>
                    <img src={banner1} />
                    <img src={banner2} />
                    <img src={banner3} />
                    <img src={banner4} />
                 </div>
                 <div>
                    <img src={banner5} />
                 </div>
               </Carousel>
            </Container>
            <CoinList />
          </Body>
        </Layout>
      )
   }
}

export default Index



