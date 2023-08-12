import PropTypes from 'prop-types'

function NavLink ({ text, link, isBold, isDropDown }) {
  return (
    <a className={`${isBold && 'nav__link--bold'} nav__link`} href={link}>{text} {isDropDown && '⏷'}</a>
  )
}

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  isBold: PropTypes.bool,
  isDropDown: PropTypes.bool
}

NavLink.defaultProps = {
  text: 'Placeholder',
  link: '#',
  isBold: false,
  isDropDown: false
}

export default NavLink
