import { ImFacebook } from 'react-icons/im'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaMediumM, FaDiscord } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import Icon from './Icon'

export default function Footer () {
  //if on FYG page do not render
  if (window.location.href.includes('first-year-guide')) {
    return null
  }

  return (
    <footer>
      <div className='footer__content'>
        <div className='icons'>
          <a href="https://medium.com/cissa-unimelb" target="_blank"><Icon icon={FaMediumM} /></a>
          <a href="https://www.facebook.com/cissa.unimelb/" target="_blank"><Icon icon={ImFacebook} /></a>
          <a href="https://www.instagram.com/cissa_unimelb/" target="_blank"><Icon icon={AiOutlineInstagram} /></a>
          <a href="https://twitter.com/CISSA_UniMelb" target="_blank"><Icon icon={FaXTwitter} /></a>
          <a href="https://discord.com/invite/Dq9A5GFFBD" target="_blank"><Icon icon={FaDiscord} /></a>
        </div>
        <p className='copyright'>Copyright © 2023 CISSA</p>
      </div>
    </footer>
  )
}