import './assets/css/hero.css'
import logo from './assets/images/logo_transparent.png'
import Typewriter from 'typewriter-effect'

function HeroPanel (props) {
  return (
    <div id='banner'>
      <div id='banner-overlay'>
        <div style={{ position: 'relative', top: '35%' }}>
          <img src={logo} id='banner-logo' />
          <div id='tagline-container'>
            <span id='tagline'>
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
