import '../assets/css/hero/infoCard.css'

const InfoCards = (props) => {
  return (
    <section className='col-md-3 my-3 cards mx-3'>
      <span className='main-icon'>
        <i className={props.icon} />
      </span>
      <h4 className='mx-2'>{props.title}</h4>
      <p className='px-4'>{props.description}</p>
      <br />
    </section>
  )
}

const WhatWeDo = (props) => {
  const cardDetails = [
    { title: 'Industry Connections', icon: 'fas fa-users', description: 'Get to know industry professionals, gain exposure to technical talks and the chance to build career connections!' },
    { title: 'Workshops', icon: 'fas fa-book-reader', description: 'Expand your skillset and get some hands-on experience! Workshops are taught by industry and student experts!' },
    { title: 'Hackathons', icon: 'fas fa-code-branch', description: 'Come and compete for the chance to win prize money, gain some technical experience, and to put your ideas to the test!' }
  ]
  
  return (
    <div className='section px-2 py-4 text-center'>
      <h3 className='mt-5 section-title'>What We Do</h3>
      <div className='row d-flex justify-content-center py-5 mx-2'>
        {cardDetails.map((detail) => <InfoCards {...detail} />)}
      </div>
    </div>
  )
}

export default WhatWeDo
