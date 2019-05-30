
import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, Form, Input, message, Spin } from 'antd'
import video1 from '../assets/video/1.mp4'
import video2 from '../assets/video/2.mp4'
import video3 from '../assets/video/3.mp4'
import ReactPlayer from 'react-player'
import cx from 'classname'
import '../common/css/animation.css'

const LoginBody = styled.div`
   min-height: 170vh;
   padding-top: 200px;
   width: 400px;
   margin: 0 auto;
`

const VideoWrapper = styled.div`
   left: 0;
   position: absolute;
   width: 100vw;
   top: 0;
   overflow: hidden;
   video {
      object-fit: cover;
      height: 600px !important;
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
   cursor: pointer;
`


const About = () => {
   const [ story, setStory ] = useState(0);
   const [ video, setVideo ] = useState(video1);

   const addStory = (story) => {
      setStory(story => story + 1)
      if(story == 1) {
         setVideo(video2)
      }
      if(story == 3) {
         setVideo(video3)
      }
   }
    
   useEffect(() => {

      return () => {

      }
   },[])

   
   return ( 
      <LoginBody>
         <VideoWrapper>
            <ReactPlayer url={video} playing loop width="100%" height="600px"/>
            <StoryWrapper onClick={()=>addStory(story)}>
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
               <div className={story == 0 ? 'wordfadeIn' : 'wordfadeOut'}>We are eager to discover unknown area</div>
               <div className={story == 1 ? 'wordfadeIn' : 'wordfadeOut'}>No one is fear</div>
               <div className={story == 2 ? 'wordfadeIn' : 'wordfadeOut'}>Nothing is impossible</div>
               <div className={story == 3 ? 'wordfadeIn' : 'wordfadeOut'}>Just do it.</div>
               <div className={story == 4 ? 'wordfadeIn' : 'wordfadeOut'}>Keep walking</div>
               <div className={story == 5 ? 'wordfadeIn' : 'wordfadeOut'}>And you are there</div>
            </StoryWrapper>
         </VideoWrapper>
      </LoginBody>
   );
}

export default About