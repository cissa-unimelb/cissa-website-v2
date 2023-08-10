import Logo from '../assets/images/cissa-logo.svg'

const PlaceHolderNav = () => {
  const Links = [
    { name: 'About', link: '/about' },
    { name: 'Committee', link: '/about' },
    { name: 'Committee Archive', link: '/committee-archive' },
    { name: 'Contact Us', link: '/contact' },
  ]

  return (
    <div className="navbar bg-gray-900 text-white">
      <div className="flex-1">
        <a href="/">
          <img src={Logo} alt="CISSA Logo" className="btn btn-ghost" />
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Events</summary>
              <ul className="p-2 bg-gray-900">
                <li>
                  <a>Upcoming Events</a>
                </li>
                <li>
                  <a>Gallery</a>
                </li>
              </ul>
            </details>
          </li>
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PlaceHolderNav
