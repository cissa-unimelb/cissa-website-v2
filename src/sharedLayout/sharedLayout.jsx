import { Outlet } from 'react-router-dom'
import Header from '../header_footer/Header'
import Footer from '../header_footer/Footer'

const SharedLayout = () => {
  return (
    <div>
      <Header mobileBreakpoint={1075}/>

      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  )
}
export default SharedLayout
