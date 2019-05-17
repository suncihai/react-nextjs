import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <>
     <Header isDark={props.isDark}/>
     {props.children}
     <Footer />
  </>
)

export default Layout;

