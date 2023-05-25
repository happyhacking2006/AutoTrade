import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { LayoutProps } from './layout.props'


const Layout = ( { children } : LayoutProps) : JSX.Element => {
  return (
    <>
        <Navbar />
        { children }
        <Footer />
    </>
  )
}

export default Layout