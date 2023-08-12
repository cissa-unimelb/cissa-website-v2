import { GrMedium } from 'react-icons/gr'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import Icon from './Icon'

function Footer () {
  return (
    <footer>
      <div className='footer__content'>
        <div className='icons'>
          <Icon icon={GrMedium} />
          <Icon icon={ImFacebook} />
          <Icon icon={AiOutlineInstagram} />
          <Icon icon={FaTwitter} />
          <Icon icon={FaDiscord} />
        </div>
        <p className='copyright'>Copyright © 2023 CISSA</p>
      </div>
    </footer>
  )
}

export default Footer
