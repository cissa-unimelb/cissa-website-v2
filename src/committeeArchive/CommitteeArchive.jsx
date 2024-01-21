import '../assets/css/committeeArchive/committeeArchive.css';
import { committeeData, executives } from './committeeData'
import CommitteeList from './comitteeList';



const CommitteeArchive = () => {
  return (
    <div>
      <div>
          <header>
              <h1 className="section-title text-center"> COMMITTEE ARCHIVE </h1>
          </header>
      </div>


      <br />
      <div>
        {Object.entries(committeeData).map(([year, roles]) => (
          <div className="card centered text-white bg-dark-blue w-80">

            <div className="card-body round-border responsive-padding">
              <div className='container'>
                <div className='row'>
                  <h3 className='card-title'> {year} </h3>
                  <br/>
                </div>

                <div className='row'>
                  <div className='col'>
                    <h3>Executives</h3>
                    <br/>

                    <CommitteeList roles={roles} isExecutive={true}/>

                  </div>

                  <div className='col'>
                    <h3>General Committee</h3>
                    <br />

                    <CommitteeList roles={roles} isExecutive={false}/>

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
