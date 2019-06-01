import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Login from '../components/login/Login'

import * as css from '../common/css/style.css'

const LoBody = styled.div`
   background: #ebeef0;
`

const LoContainer = styled.div`
    min-height: 97vh;
    background: #fff;
`

class LoginPage extends React.Component {
  state = {
    isDark : false,
    light: true,
  }

   render(){
      const { isDark, light } = this.state
 
      return (
        <Layout isDark={isDark} light={light} className={css.sovleNextBug}>
          <LoBody>
            <LoContainer className="banner-container">
              <Login />
            </LoContainer>
          </LoBody>
        </Layout>
      )
   }
}

export default LoginPage