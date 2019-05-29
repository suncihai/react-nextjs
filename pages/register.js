import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Register from '../components/Register'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
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
        <Layout isDark={isDark} light={light}>
          <Body>
            <Container className="banner-container">
              <Register />
            </Container>
          </Body>
        </Layout>
      )
   }
}

export default RegisterPage