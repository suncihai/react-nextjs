import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../store'
import Cookies from 'js-cookie'

class CheckLogin extends React.Component {

   componentDidMount() {
      if(Cookies.get('testUserName')) {
         this.props.login(Cookies.get('testUserName'))
      }
   }

   render(){ 
      return (<></>)
   }
}

const mapDispatchToProps = { login }

export default connect(
   null,
   mapDispatchToProps
 )(CheckLogin)
