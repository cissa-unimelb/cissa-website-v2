import '../assets/css/about/committeeCard.css'
import jianImage from '../assets/images/jian.jpeg'
import charlieImage from '../assets/images/zhicheng-ding.jpg'
import jamesImage from '../assets/images/james-xu.jpeg'
import kasieImage from '../assets/images/kasie.jpg'
import selenaImage from '../assets/images/selena.jpg'
import chloeImage from '../assets/images/chloe-zhang.jpg'
import jamesDImage from '../assets/images/james-dinh.png' // Png?
import ivanImage from '../assets/images/ivan-zhuang.jpg'
import jenniferImage from '../assets/images/jennifer-soo.jpg'
import bowenImage from '../assets/images/bowen-feng.jpg'
import florenceImage from '../assets/images/florence-tang.jpg'
import harrisonImage from '../assets/images/harrison-langdon.jpg' // Some have incompatible .JPG (uppercase)
import aimeeImage from '../assets/images/aimee-liang.jpg'
import amandaImage from '../assets/images/amanda-chao.jpg'

const CommitteeCards = (props) => {
  return (
    <div className='pe col-sm'>
      <img src={props.image} alt={props.name} />
      <div className='p-name'>{props.name}</div>
      <div className='p-role'>{props.role}</div>
    </div>
  )
}

const CommitteeList = (props) => {
  const committeeTeamsDetails = [
    {
      teamTitle: 'Executive Team',
      membersDetails: [
        [{name: 'Jian Pan', image: jianImage, role: 'President'},
        {name: 'Zhicheng(Charlie) Ding', image: charlieImage, role: 'Vice President'},
        {name: 'James Xu', image: jamesImage, role: 'Secretary'}],

        [{name: 'Kasie Wang', image: kasieImage, role: 'Education Director'},
        {name: 'Selena Lee', image: selenaImage, role: 'Treasurer'},
        {name: 'Chloe Zhang', image: chloeImage, role: 'Events Director'}]
      ]
    },

    {
      teamTitle: 'General Committee',
      membersDetails: [
        [{name: 'James Dinh', image: jamesDImage, role: 'Industry Liaison'},
        {name: 'Ivan Zhuang', image: ivanImage, role: 'Publicity Director'},
        {name: 'Jennifer Soo', image: jenniferImage, role: 'Experience Director'}],

        [{name: 'Bowen Feng', image: bowenImage, role: 'IT Director'},
        {name: 'Florence Tang', image: florenceImage, role: 'Product Director'},
        {name: 'Harrison Langdon', image: harrisonImage, role: 'Hackathon Director'}],

        [{name: 'Aimee Lang', image: aimeeImage, role: 'Diversity Director'},
        {name: 'Amanda Chao', image: amandaImage, role: 'People & Culture Director'}]
      ]
    },


  ]

  return (
    <div className='team-section py-5'>
      {committeeTeamsDetails.map((team) => {
        return (
          <div>
            <h1>{team.teamTitle}</h1>
            {team.membersDetails.map((row) => {
              return (
                <div className='pers row pt-5'>
                  {row.map((member) => <CommitteeCards {...member} />)}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default CommitteeList