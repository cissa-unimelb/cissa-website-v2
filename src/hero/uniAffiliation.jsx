import '../assets/css/hero/uni_affiliation.css'
import logo from "../assets/images/UMSU-Affiliated.png"

function UniAfflict (props) {
  return (
    <div className="section px-4 text-center affiliation">
        <h3 className="section-title">University Affiliations</h3>
        <img src={logo} class="logo"></img>
    </div>
    )
};

export default UniAfflict
