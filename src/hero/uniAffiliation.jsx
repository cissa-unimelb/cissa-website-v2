import '../assets/css/hero/uni_affiliation.css'
import logo from "../assets/images/UMSU-Affiliated.png"

function UniAfflict (props) {
  return (
    <div className="section px-2 py-4 text-center">
        <h3 className="mt-5 section-title">University Affiliations</h3>
        <br/>
        <img src={logo} className="logo"></img>
    </div>
    )
};

export default UniAfflict
