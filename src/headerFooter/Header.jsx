import Hamburger from './Hamburger'
import NavList from './NavList'
import { useState, useEffect } from 'react'
import '../../public/only_circle_white.svg'
import discordLogo from '../../src/firstYearGuide/mobile/assets/images/discord_logo.png'
import PropTypes from 'prop-types'

function Header ({ mobileBreakpoint }) {

  //if on FYG page do not render
  if (window.location.href.includes('first-year-guide') || window.location.href.includes('nfc')) {
    return null
  }

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
          <a href="/">
            <img className='nav__logo' width='50' height='50' src='only_circle_white.svg' alt='Logo' />
          </a>
          <a href="https://discord.gg/b66f8eN65G" target='_blank'>
            <img className='nav__logo' height='30' src={discordLogo} alt='Logo' style={{ paddingLeft: '20px' }}/>
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
