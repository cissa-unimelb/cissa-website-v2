import '../assets/css/hero/hero.css'
import logo from '../assets/images/logo_transparent.png'
import Typewriter from 'typewriter-effect'

function HeroPanel (props) {
  return (
    <div id='banner'>
      <div id='banner-overlay'>
        <div id="banner-logo-position">
          <img src={logo} id='banner-logo' />
          <div id='tagline-container'>
            <span id='tagline'>
            <a className = 'campLink' href='https://fb.me/e/1FDTIzzlL' target='_blank'>Join our First Year Camp HERE!</a>
              <Typewriter
                options={{
                  strings: [
                    "UniMelb's Premier Tech Society",
                    'Bridging University and Industry',
                    'Membership is FREE'
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: '_',
                  pauseFor: 1000,
                  delay: 75,
                  deleteSpeed: 10
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPanel
