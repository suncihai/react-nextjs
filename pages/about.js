import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import About from '../components/About'

import * as css from '../common/css/style.css'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    min-height: 97vh;
    background: #fff;
`

class AboutPage extends React.Component {
  state = {
    isDark : false,
    light: false,
  }

   render(){
      const { isDark, light } = this.state
 
      return (
        <Layout isDark={isDark} light={light} className={css.sovleNextBug}>
          <Body>
            <Container className="banner-container">
              <About />
            </Container>
          </Body>
        </Layout>
      )
   }
}

export default AboutPage