import NavLink from './NavLink'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function NavList ({ isOpen, isMobile }) {
  const navLinkItems = [
    { id: 1, text: 'Events', link: "/upcoming-events", isDropDown: true },
    { id: 2, text: 'Committee', link: "/about" },
    { id: 3, text: 'Committee Archive', link: "/committee-archive"}, 
    { id: 4, text: 'Sponsors', link: "" },
    { id: 5, text: 'Careers Portal', link: "" },
    { id: 6, text: 'Blog', link: "" },
    { id: 7, text: 'Contact', link: "/contact" },
    { id: 8, text: 'Join us', link: "", isBold: true }
  ]
  let classes = 'nav__list'
  if (!isMobile) {
    classes = `${classes} flex`
  } else {
    if (isOpen) {
      classes = `${classes} nav__list--open`
    } else {
      // If it is mobile and not open
      classes = `${classes} none`
    }
  }

  return (
    <ul className={classes}>
      {navLinkItems.map((item) => {
        return (
          <li key={item.id}>
            <NavLink text={item.text} link={item.link} isBold={item.isBold} isDropDown={item.isDropDown} />
          </li>
        )
      })}
    </ul>
  )
}

NavList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired
}

export default NavList