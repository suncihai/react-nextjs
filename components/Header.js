import styled from 'styled-components'
import Link from 'next/link'
import LogoImg from '../assets/img/logo.png'
import LogoImg2 from '../assets/img/logo2.png'
import cx from 'classname'

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
   &.isDark {
      background: #0e1118;
   }
   &.light {
      background: #fff;
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

const naviList = ['Partners','User']

const Header = (props) => {

  const bgClass = cx({
     'isDark': props.isDark,
     'light': props.light,
  })

  return (
   <div>
      <Bar className={bgClass}>
         <Link href={`/`}>
            <Logo src={!props.light ? LogoImg : LogoImg2} />
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
      </Bar>
   </div>
  )
}

export default Header;
