import styled from 'styled-components'
import Link from 'next/link'
import LogoImg from '../../assets/img/logo.png'
import LogoImg2 from '../../assets/img/logo2.png'
import CheckLogin from './CheckLogin'
import { Divider } from 'antd'
import { connect } from 'react-redux'
import { logout } from '../../store'
import cx from 'classname'
import Cookies from 'js-cookie'
import Router from 'next/router'

const Bar = styled.div`
   background: transparent;
   position: fixed;
   top: 0;
   color: #fff;
   height: 50px;
   padding-top: 8px;
   padding-left: 10px;
   width: 100%;
   transition: ease 0.5s;
   z-index:100;
   &.isDark {
      background: #0e1118;
   }
   &.light {
      background: transparent;
      color: #000;
   }
`

const Navi = styled.li`
   margin: 0 15px;
   display: inline-block;
   cursor: pointer;
   &:hover {
     opacity: 0.7;
   }
`

const Logo = styled.img`
   display: inline-block;
   height: 35px;
   vertical-align: middle;
   cursor: pointer;
`

const LoginBoxUl = styled.ul`
  position: absolute;
  top: 12px;
  right: 20px;
  li {
     &:hover {
        opacity: 0.7;
     }
  }
`

const naviList = ['Partners','User', 'About']

class Header extends React.Component {

  logout() {
     Cookies.remove('testUserName')
     this.props.logout()
     Router.replace('/')
  }

  render() {
      const bgClass = cx({
         'isDark': this.props.isDark,
         'light': this.props.light,
      })
   
      const ls = {
         display: 'inline-block',
         cursor: 'pointer'
      }

      let loginBox;
      if(this.props.user) {
         loginBox = <LoginBoxUl>
                        <li style={ls}>
                            <span>{this.props.user}</span>
                        </li>
                        <Divider type="vertical" />
                        <li style={ls}>
                           <span onClick={()=>this.logout()}>Log Out</span>
                        </li>
                     </LoginBoxUl>
      } else {
         loginBox = <LoginBoxUl>
                        <li style={ls}>
                           <Link href='/register'>
                              <span>Register</span>
                           </Link>
                        </li>
                        <Divider type="vertical" />
                        <li style={ls}>
                           <Link href='/login'>
                              <span>Login</span>
                           </Link>
                        </li>
                     </LoginBoxUl>
      }

      return (
         <div>
            <CheckLogin />
            <Bar className={bgClass}>
               <Link href={`/`}>
                  <Logo src={!this.props.light ? LogoImg : LogoImg2} />
               </Link>
               <ul style={{display:'inline-block',marginLeft: '30px'}}>
               {
                  naviList.map((ele, index)=>{
                     return (
                        <Navi key={index}>
                           <Link href={`/${ele.toLowerCase()}`}>
                              <span>{ele}</span>
                           </Link>
                        </Navi>
                     )
                  })
               }
               </ul>
               {loginBox}
            </Bar>
         </div>
        )
  }

}

const mapDispatchToProps = { logout }
const mapStateToProps = ({user}) => ({user})

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Header)
