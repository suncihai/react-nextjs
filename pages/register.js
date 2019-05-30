import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Register from '../components/Register'

import * as css from '../common/css/style.css'

const ReBody = styled.div`
   background: #ebeef0;
`

const ReContainer = styled.div`
    min-height: 97vh;
    background: #fff;
`

class RegisterPage extends React.Component {
  state = {
    isDark : false,
    light: true,
  }

   render(){
      const { isDark, light } = this.state
 
      return (
        <Layout isDark={isDark} light={light} className={css.sovleNextBug}>
          <ReBody>
            <ReContainer className="banner-container">
              <Register />
            </ReContainer>
          </ReBody>
        </Layout>
      )
   }
}

export default RegisterPage