import './assets/css/hero.css'
import logo from './assets/images/logo_transparent.png'

function HeroPanel(props) {
  return (
    <div id='banner'>
      <div id='banner-overlay'>
        <div id='centre-fix'>
            <img src={logo} id='banner-logo' />
            <div id='tagline-container'>
            <span id='tagline'>UniMelb's Premier Tech Society</span>
            <span class='blinking-cursor'>_</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPanel