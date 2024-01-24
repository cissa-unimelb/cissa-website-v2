import '../../public/hamburger.svg'
import '../../public/cross.svg'
import { FaBars, FaTimes } from 'react-icons/fa'
import PropTypes from 'prop-types'

function Hamburger ({ isOpen, isMobile, clickHandler }) {
  const hamburgerIconSize = 35

  return (
    <>
      <div className={`${isMobile ? 'burger' : 'none'}`} onClick={clickHandler}>
        {isOpen
          ? <FaTimes size={hamburgerIconSize} color='grey' />
          : <FaBars size={hamburgerIconSize} color='white' />}
      </div>
    </>
  )
}

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Hamburger
