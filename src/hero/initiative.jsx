import '../assets/css/hero/initiative.css'
import cissa_all from '../assets/images/cissa_all.jpg'

function Initiative (props) {
  return (
    <div className='section semi-dark our-initiative justify-content-center'>
      <div className="grid">
        <div>
          <h3 className='white-text my-3 section-title text-center'>Our Initiative </h3>
          <p className='cissa-intro mt-5'>
            We hold social, industry and networking events regularly. Whether you are looking
            for academic courses or searching for work opportunities in different IT-related areas, CISSA is the place to go.
            If you are more of a hands-on type of person, you will enjoy Codebrew, our annual hackathon. <a href='events.html' class='dark-link'>Check out our upcoming events!</a>
            &nbsp;Be sure to also <a href='https://discord.gg/b66f8eN65G' class='dark-link'>Join our Discord!</a>
          </p>
        </div>
        <img className='img-about' src={cissa_all} alt='Photo' />
      </div>
    </div>
  )
};

export default Initiative
