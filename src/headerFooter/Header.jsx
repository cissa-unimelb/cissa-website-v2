import Hamburger from './Hamburger'
import NavList from './NavList'
import { useState, useEffect } from 'react'
import '../../public/only_circle_white.svg'
import PropTypes from 'prop-types'

function Header ({ mobileBreakpoint }) {
  const q = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`)
  const [isOpen, toggleOpen] = useState(false)
  const [isMobile, setMobile] = useState(q.matches)

  const handleToggle = () => {
    toggleOpen(!isOpen)
  }

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${mobileBreakpoint}px)`)
    query.onchange = (e) => {
      setMobile(e.matches)
    }
  }, [])

  return (
    <nav>
      <div className={`container ${!isMobile && 'flex'} container-fluid`}>
        <div className='nav__content'>
          <a href="/cissa-website-v2/">
            <img className='nav__logo' width='50' height='50' src='only_circle_white.svg' alt='Logo' />
          </a>
          <Hamburger clickHandler={handleToggle} isOpen={isOpen} isMobile={isMobile} />
        </div>
        <NavList isOpen={isOpen} isMobile={isMobile} />
      </div>
    </nav>
  )
}

Header.propTypes = {
  mobileBreakpoint: PropTypes.number
}

Header.defaultProps = {
  mobileBreakpoint: 1075
}

export default Header
