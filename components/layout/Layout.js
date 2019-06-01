import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
     <Header isDark={props.isDark} light={props.light}/>
     {props.children}
     <Footer />
  </>
)

export default Layout;

