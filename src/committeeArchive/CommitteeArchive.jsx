import { committeeData } from './committeeData'
import archiveGraphic from './archiveGraphic.png'

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
    <div className="flex flex-column justify-center p-32">
      <h1 className="text-4xl font-bold text-center">Committee Archive</h1>

      <div className="flex flex-wrap justify-center">
        {Object.entries(committeeData).map(([year, roles]) => (
          <div className="card w-1/2 m-4 bg-base-100 shadow-md" key={year}>
            <div className="card-body">
              <h2 className="text-xl font-bold">{year}</h2>
              <div className="flex">
                <ul className="w-1/2">
                  <h2 className="text-lg font-medium">Executives</h2>
                  {roles
                    .filter((roleData) => {
                      const [role] = Object.entries(roleData)[0]
                      return executives.includes(role)
                    })
                    .map((roleData, idx) => {
                      const [role, name] = Object.entries(roleData)[0]
                      return (
                        <li key={idx} className="py-0.5">
                          <strong>{role}:</strong> {name}
                        </li>
                      )
                    })}
                </ul>
                <ul className="w-1/2">
                  <h2 className="text-lg font-medium">General Committee</h2>
                  {roles
                    .filter((roleData) => {
                      const [role] = Object.entries(roleData)[0]
                      return !executives.includes(role)
                    })
                    .map((roleData, idx) => {
                      const [role, name] = Object.entries(roleData)[0]
                      return (
                        <li key={idx} className="py-0.5">
                          <strong>{role}:</strong> {name}
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CommitteeArchive
