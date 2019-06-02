
import React, { Component } from 'react';
import { debounce } from 'lodash'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Form, Input, message, Spin } from 'antd'
import ReactPlayer from 'react-player'
import cx from 'classname'
import { videoWords, sidebarMenu } from '../../common/js/const.js'
import '../../common/css/animation.css'

//image and video
import devices from '../../assets/img/devices.png'
import appdownload from '../../assets/img/app_download.png'
import iphoneX from '../../assets/img/iphoneX.png'
import iosdownload from '../../assets/img/download1.svg'
import androiddownload from '../../assets/img/download2.svg'
import phonec1 from '../../assets/img/phone_c1.png'
import phonec2 from '../../assets/img/phone_c2.png'
import phonec3 from '../../assets/img/phone_c3.png'
import video1 from '../../assets/video/1.mp4'
import video2 from '../../assets/video/2.mp4'
import video3 from '../../assets/video/3.mp4'
import video4 from '../../assets/video/4.mp4'

const AboutBody = styled.div`
   min-height: 200vh;
`

const ContentWrap = styled.div`
   height: 100vh;
   width: 100vw;
   .main-box {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
      .left-box {
         padding-top: 200px;
         display: inline-block;
         width: 600px;
         vertical-align: top;
         h2 {
            font-size: 50px;
            margin-bottom: 25px;
            font-family: 'DIN-Bold';
            letter-spacing:1px;
            line-height: 1.2;
         }
         p {
            font-size: 16px;
            letter-spacing: 1.2px;
            margin-bottom: 30px;
         }
         .ant-input-group {
            width: 400px;
            margin-bottom: 40px;
         }
         img.ios {
            margin-right: 10px;
         }
      }
      .right-box {
         display: inline-block;
         vertical-align: top;
         padding-top: 150px;
         .phone-bg {
            width: 300px;
            height: 600px;
            background-image: url(${iphoneX});
            background-size: cover;
            padding: 22px;
            overflow: hidden;
            .container {
               height: 580px;
               overflow: hidden;
               img {
                 position: absolute;
                 width: 257px;
                 visibility:hidden;
                 opacity: 0;
                 &.appFade1 {
                    transition: opacity 1.5s ease-in;
                    z-index: 2;
                    opacity: 1;
                    visibility: visible;
                 }
                 &.appFade2 {
                    opacity: 1;
                    visibility: visible;
               }
               }
            }
         }
      }
   }
   &.top {
      
   }
   &.intro {
      background: linear-gradient(145deg,#fff 10%,#ebf4ff 60%,#69b2ff 150%);
      position: relative;
      .right-box {
         img {
            width: 550px;
            position: relative;
         }
      }
   }
`

const VideoWrapper = styled.div`
   width: 100vw;
   overflow: hidden;
   position: relative;
   video {
      object-fit: cover;
      height: 100vh;
      transition: all 1s ease-in-out;
   }
`

const StoryWrapper = styled.div`
   position: absolute;
   transform: translate(-50%,-50%);
   left:50%;
   top:50%;
   font-size:40px;
   color: #fff;
   white-space: nowrap;
   z-index: 51;
`

const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  z-index:50;
  background: #000;
`

const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 12.5vh;
  width: 175px;
  height: 75vh;
  z-index: 70;
  ul {
     display: flex;
     height: 100%;
     flex-direction: column;
     justify-content: space-between;
     li {
        align-items: center;
        display: flex;
        height: 8vh;
        color: #ddd;
        padding: 30px;
        cursor: pointer;
        &.active {
           color: #000;
           border-left: 5px solid #000;
           &.light {
              color: #fff;
              border-left: 5px solid #fff;
           }
        }
        &.light {
           color: #aaa;
        }
     }
  }
`


const About = () => {
   const [ story, setStory ] = useState(0);
   const [ video, setVideo ] = useState(video1);
   const [ mask, setMask] = useState(false);
   const [ bars, setBars] = useState(sidebarMenu);
   const [ light, setLight ] = useState(false);
   const [ app1, setApp1] = useState(0);

   const timer = () => {
      setTimeout(()=>{
         addStory(story)
         addApp1(app1)
         timer()
      },5000)
   }

   const doMask = (video) => {
      setMask(mask => true)
      setTimeout(()=>{
         setMask(mask => false)
         setVideo(video)
      },1000)
   }

   const addStory = (story) => {
      setStory(story => {
         if(story == 1) {
            doMask(video2)
         }
         if(story == 3) {
            doMask(video3)
         }
         if(story == 5) {
            doMask(video4)
         }
         if(story == 7) {
            doMask(video1)
            return 0
         }

         return story + 1
      })
   }

   const addApp1 = (app1) => {
      setApp1(app1 => {
         if(app1 == 2) {
            return 0
         }
         return app1 + 1
      })
   }

   const selectBar = (bars, num, light) => {
     const windowHeight = window.innerHeight

     bars.map((ele, index)=>{
        if(num==index) {
           ele.active = true
        }else{
           ele.active = false
        }
     })
     setBars(bars => bars)
     setLight(light)
     window.scrollTo({
       top: num * windowHeight,
       behavior: 'smooth'
     })
   }

   const onScroll = debounce(() => {
      const height = window.scrollY
      const windowHeight = window.innerHeight
     
     if(height<windowHeight/2) {
        selectBar(bars, 0, false)
     }else if(height>=windowHeight/2&&height<1.5*windowHeight){
        selectBar(bars, 1, false)
     }else if(height>=1.5*windowHeight&&height<2.5*windowHeight){
        selectBar(bars, 2, true)
     }
   },350)
    
   useEffect(() => {
      timer()
      window.addEventListener('scroll', onScroll)

      return () => {
         clearTimeout(timer)
         window.removeEventListener('scroll', onScroll)
      }
   },[])
   
   const Search = Input.Search
   
   return ( 
      <AboutBody>
         <SideBar>
            <ul>
            {
               bars.map((ele, index)=>{
                  return (
                     <li onClick={()=>selectBar(bars, index)} className={cx({'active':ele.active,'light':light})} key={index}>{ele.bar}</li>
                  )
               })
            }
            </ul>
         </SideBar>
         <ContentWrap className="top">
           <div className="main-box">
               <div className="left-box">
                  <h2>BitMart to the Moon!</h2>
                  <p>The BitMart mobile app is the safe, trusted way to build your crypto portfolio. Buying, storing, and selling crypto has never been easier.</p>
                  <Search enterButton="text me the app" placeholder="phone number" size="large"/>
                  <img className="ios" src={iosdownload} />
                  <img src={androiddownload} />
               </div>
               <div className="right-box">
                  <div className="phone-bg">
                    <div className="container">
                       <img className={cx({'appFade1':app1 == 0,'appFade2':app1 == 1})} src={phonec1} />
                       <img className={cx({'appFade1':app1 == 1,'appFade2':app1 ==2})} src={phonec2} />
                       <img className={cx({'appFade1':app1 == 2,'appFade2':app1 == 0})} src={phonec3} />
                    </div>
                  </div>
               </div>
           </div>
         </ContentWrap>
         <ContentWrap className="intro">
         <div className="main-box">
               <div className="left-box">
                  <h2>Powering the future of crypto payments</h2>
                  <p>We’ve partnered with the Flexa network to make the promise of crypto payments a reality.</p>
                  
               </div>
               <div className="right-box">
                   <img className="riseDown" src={appdownload} />
               </div>
           </div>
         </ContentWrap>
         <VideoWrapper>
            <ReactPlayer url={video} playing loop width="100%" height="100vh"/>
            <Mask className={mask?'maskFadeIn':'maskFadeOut'}/>
            <StoryWrapper>
               {/* use switch cannot trigger word fade animation here */}
               {/* {(()=>{
                 switch(story) {
                    case 0:
                       return <div className={story == 0 ? 'word1fadeIn' : 'word1fadeOut'}>We are eager to discover unknown area</div>
                    case 1:
                       return <div className={story == 1 ? 'word2fadeIn' : 'word2fadeOut'}>No one is fear</div>
                    default:
                       return <></>
                 }
               })()} */}
               <>
               {
                  videoWords.map((ele, index)=>{
                     return (
                        <div
                          className={story == index ? 'wordfadeIn' : 'wordfadeOut'}
                          key={index}
                        >
                          {ele}
                        </div>
                     )
                  })
               }
               </>
            </StoryWrapper>
         </VideoWrapper>
      </AboutBody>
   );
}

export default About