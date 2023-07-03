import './assets/css/uni_affiliation.css'
import logo from "./assets/images/UMSU-Affiliated.png"

function UniAfflict (props) {
  return (
    <div class="section px-2 py-4 text-center">
        <h3 class="mt-5 section-title">University Affiliations</h3>
        <br/>
        <img src={logo} class="logo"></img>
    </div>
    )
};

export default UniAfflict
