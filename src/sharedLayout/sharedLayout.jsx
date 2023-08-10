import { Outlet } from 'react-router-dom'
import PlaceHolderNav from '../placeholderNav/placeHolderNav'

const SharedLayout = () => {
  return (
    <div>
      <PlaceHolderNav className="z-10 sticky top-0" />
      <section>
        <Outlet />
      </section>
    </div>
  )
}
export default SharedLayout
