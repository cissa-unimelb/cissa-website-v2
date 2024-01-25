import '../assets/css/hero/infoCard.css'

const InfoCards = (props) => {
  return (
    <section class='cards'>
      <span class='main-icon'>
        <i class={props.icon} />
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
    <div class='section px-4 text-center info'>
      <h3 class='section-title'>What We Do</h3>
      <div class='card-container'>
        {cardDetails.map((detail) => <InfoCards {...detail} />)}
      </div>
    </div>
  )
}

export default WhatWeDo
