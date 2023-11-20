import PropTypes from 'prop-types'

function NavLink ({ text, link, isBold, isDropDown }) {
  if (isDropDown){
    return(
      // <div class="collapse navbar-collapse mb-2" id="navbarNavDropdown">
      //   <ul class="navbar-nav ml-auto">
      //     <li class="nav-item dropdown">
      //       <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //         Events
      //       </a>
      //       <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      //         <a class="dropdown-item" href="events.html">Upcoming Events</a>
      //         <a class="dropdown-item" href="gallery.html">Gallery</a>
      //       </div>
      //     </li>
      //   </ul>
      // </div>
      <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </button>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
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
