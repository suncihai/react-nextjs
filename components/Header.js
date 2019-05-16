import styled from 'styled-components'
import Link from 'next/link'
import LogoImg from '../assets/img/logo.png'

const Bar = styled.div`
   background: transparent;
   position: fixed;
   top: 0;
   color: #fff;
   height: 50px;
   padding-top: 8px;
   padding-left: 10px;
`

const Navi = styled.li`
   margin: 0 15px;
   display: inline-block;
   cursor: pointer;
`

const Logo = styled.img`
   display: inline-block;
   height: 35px;
   vertical-align: middle;
`

const naviList = ['Exchange','News','App','About','Labs']

const Header = () => (
  <div>
    <Bar>
       <Logo src={LogoImg} />
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

export default Header;
