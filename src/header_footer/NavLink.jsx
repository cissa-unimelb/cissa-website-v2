import PropTypes from 'prop-types'

function NavLink ({ text, link, isBold, isDropDown, dropDownElements}) {
  if (isDropDown){
    return(
      <div className='navbar navbar-expand-lg navbar-dark bg-transparent'>
        <div id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <div data-bs-toggle="dropdown" aria-expanded="false">
                <a className={`${isBold && 'nav__link--bold'} nav__link`}> Event ⏷</a>
              </div>
              <ul class="dropdown-menu">
                {
                  dropDownElements.map((item) => {
                    return (<li><a className="dropdown-item" href={item.link}>{item.text}</a></li>)
                  })
                }
              </ul>
            </li>
          </ul>
        </div>
      </div>
    )
  }

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
