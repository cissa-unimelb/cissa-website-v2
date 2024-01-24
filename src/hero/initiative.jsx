import '../assets/css/hero/initiative.css'
import cissa_all from '../assets/images/cissa_all.jpg'

function Initiative (props) {
  return (
    <div className='row section semi-dark our-initiative py-5 d-flex justify-content-center'>
      <div className='col-lg-5'>
        <h3 className='white-text my-3 section-title text-center'>Our Initiative </h3>
        <p className='cissa-intro mt-5'>
          We hold social, industry and networking events regularly. Whether you are looking
          for academic courses or searching for work opportunities in different IT-related areas, CISSA is the place to go.
          If you are more of a hands-on type of person, you will enjoy Codebrew, our annual hackathon. <a href='events.html' className='dark-link'>Check out our upcoming events!</a>
        </p>
      </div>
      <div className='col-lg-5 py-2 mt-5 justify-content-center'>
        <img className='img-about' src={cissa_all} alt='Photo' />
      </div>
    </div>
  )
};

export default Initiative
