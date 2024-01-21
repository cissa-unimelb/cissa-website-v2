import clsx from 'clsx'
import { teams } from './committeeData'
import '../assets/css/about/committeeCard.css'

function CommitteeCards ({ name, avatar, role }) {
  return (
    <div className="member-card">
      <img className="avatar" src={avatar} alt={`${name}'s profile picture`} />
      <div className="name">{name}</div>
      <div className="role">{role}</div>
    </div>
  )
}

export default function CommitteeList ({ className, ...rest }) {
  return (
    <div {...rest} className={clsx("team-container", className)}>
      {teams.map(team => {
        return (
          <div className="team" key={team.name}>
            <h3 className="name">{team.name}</h3>
            <div className="member-container">
              {team.members.map((member, index, members) => <CommitteeCards {...member} key={member.name} />)}
            </div>
          </div>
        )
      })}
    </div>
  )
}