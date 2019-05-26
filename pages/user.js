import React from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'
import Users from '../components/Users'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    height: 100vh;
    background: #fff;
`

class UserPage extends React.Component {
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
              <Users />
            </Container>
          </Body>
        </Layout>
      )
   }
}

export default UserPage