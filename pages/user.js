import React from 'react'
import Layout from '../components/layout/Layout'
import styled from 'styled-components'
import Users from '../components/user/Users'

import * as css from '../common/css/style.css'

const Body = styled.div`
   background: #ebeef0;
`

const Container = styled.div`
    min-height: 97vh;
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
        <Layout isDark={isDark} light={light} className={css.sovleNextBug}>
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