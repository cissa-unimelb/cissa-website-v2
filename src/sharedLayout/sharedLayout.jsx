import { Outlet } from 'react-router-dom'
import Header from '../headerFooter/Header'
import Footer from '../headerFooter/Footer'

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
