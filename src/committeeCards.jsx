import './assets/css/committeeCard.css'
import jianImage from './assets/images/jian.jpeg'
import charlieImage from './assets/images/zhicheng-ding.jpg'
import jamesImage from './assets/images/james-xu.jpeg'
import kasieImage from './assets/images/kasie.jpg'
import selenaImage from './assets/images/selena.jpg'
import chloeImage from './assets/images/chloe-zhang.jpg'

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
        [{
          name: 'Jian Pan',
          image: jianImage,
          role: 'President'
        },
        {
          name: 'Zhicheng(Charlie) Ding',
          image: charlieImage,
          role: 'Vice President'
        },
        {
          name: 'James Xu',
          image: jamesImage,
          role: 'Secretary'
        }],
        [{
          name: 'Kasie Wang',
          image: kasieImage,
          role: 'Education Director'
        },
        {
          name: 'Selena Lee',
          image: selenaImage,
          role: 'Treasurer'
        },
        {
          name: 'Chloe Zhang',
          image: chloeImage,
          role: 'Events Director'
        }]
      ]
    }
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
