import '../assets/css/committeeArchive/committeeArchive.css';
import { committeeData } from './committeeData'


const executives = [
  'President',
  'Vice-President',
  'Secretary',
  'Treasurer',
  'Events Director',
  'Events Officer',
  'Education Director',
  'Education Officer',
]

const CommitteeArchive = () => {
  return (
    <div>
      <div>
          <header>
              <h1 className="section-title text-center"> COMMITTEE ARCHIVE </h1>
          </header>
      </div>

      <div className="">
        {Object.entries(committeeData).map(([year, roles]) => (
          <div className="card w-75">

            <div className="card-body">
              <div className='container'>
                <div className='row'>
                  <h3 className='card-title'> {year} </h3>
                  <br/>
                </div>

                <div className='row'>
                  <div className='col'>
                    <h3>Executives</h3> 
                  </div>

                  <div className='col'>
                    <h3>General Committee</h3>
                  </div>
                </div>

                <div className='row'>
                  <div className='col'>
                    
                    <ul>
                      {roles
                        .filter((roleData) => {
                          const [role] = Object.entries(roleData)[0]
                          return executives.includes(role)
                        })
                        .map((roleData, idx) => {
                          const [role, name] = Object.entries(roleData)[0]
                          return (
                            <li key={idx}>
                              <strong>{role}:</strong> {name}
                            </li>
                          )
                        })}
                    </ul>
                  </div>

                  <div className='col'>
                    
                    <ul>
                      {roles
                        .filter((roleData) => {
                          const [role] = Object.entries(roleData)[0]
                          return !executives.includes(role)
                        })
                        .map((roleData, idx) => {
                          const [role, name] = Object.entries(roleData)[0]
                          return (
                            <li key={idx}>
                              <strong>{role}:</strong> {name}
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommitteeArchive
