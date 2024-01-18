import "../assets/css/sponsors/sponsorsPage.css";

// Diamond
import ANZ_img from "../assets/images/sponsors/anz.png";
import IMC_img from "../assets/images/sponsors/imc.png";
import JaneStreet_img from "../assets/images/sponsors/janestreet.png";

// Platinum
import Airwallex_img from "../assets/images/sponsors/airwallex.png";
import Algohub_img from "../assets/images/sponsors/algohub.png";
import Atlassian_img from "../assets/images/sponsors/atlassian-2022.png";
import Optiver_img from "../assets/images/sponsors/optiver.png";
import REA_img from "../assets/images/sponsors/rea.png";

// Gold
import Amazon_img from "../assets/images/sponsors/amazon.png";
import ACS_img from "../assets/images/sponsors/acs.png";
import Churchill_img from "../assets/images/sponsors/churchill-AM.png";
import Citadel_img from "../assets/images/sponsors/citadel.png";
import Coles_img from "../assets/images/sponsors/coles.png";
import Commbank_img from "../assets/images/sponsors/commbank.png";
import JDS_img from "../assets/images/sponsors/jds.png";
import McGrathNicol_img from "../assets/images/sponsors/mcgrathnicol.png";
import ClearDynamic_img from "../assets/images/sponsors/clear-dynamics.svg";
import Mantel_img from "../assets/images/sponsors/mantel-group.png";
import SecDim_img from "../assets/images/sponsors/secdim.png";

// Silver
import Bukapalak_img from "../assets/images/sponsors/bukapalak.png";
import Tiktok_img from "../assets/images/sponsors/tiktok.png";


const allSponsors = {
    "Diamond": [
        {images: ANZ_img, alt: "ANZ"},
        {images: IMC_img, alt: "IMC"},
        {images: JaneStreet_img, alt: "Jane Street"}
    ],
    "Platinium": [
        {images: Airwallex_img, alt: "Airwallex"},
        {images: Algohub_img, alt: "Algohub"},
        {images: Atlassian_img, alt: "Atlassian"},
        {images: Optiver_img, alt: "Optiver"},
        {images: REA_img, alt: "REA Group"}
    ],
    "Gold": [
        {images: Amazon_img, alt: "Amazon"},
        {images: ACS_img, alt: "ACS"},
        {images: Churchill_img, alt: "Churchill AM"},
        {images: Citadel_img, alt: "Citadel Securities"},
        {images: Coles_img, alt: "Coles"},
        {images: Commbank_img, alt: "Commbank"},
        {images: JDS_img, alt: "JDS"},
        {images: McGrathNicol_img, alt: "McGrathNicol"},
        {images: ClearDynamic_img, alt: "Clear Dynamics"},
        {images: Mantel_img, alt: "Mantel group"},
        {images: SecDim_img, alt: "SecDim"}
    ],
    "Silver": [
        {images: Bukapalak_img, alt: "Bukalapak"},
        {images: Tiktok_img, alt: "Tiktok"}
    ]
}

const SponsorList = (props) => {
    return(
        <div id="main-sponsors" class="section pt-5">
            <div class="container py-5">
                { Object.keys(allSponsors).map((key) => {
                    return(
                        <div>
                            <div class="row py-4">
                                <div class="col-md-12 text-center">
                                    <h3 class="section-title text-center text-center" className="sponsor-tier-title"><strong>{key}</strong></h3>
                                </div>

                                {allSponsors[key].map((sponsor) => {
                                    return (
                                        <div class="col-md text-center py-5 my-auto">
                                            <img
                                                src={sponsor.images}
                                                class="sponsors"
                                                alt={sponsor.alt}
                                            />
                                        </div>
                                    )
                                })}
                            </div>

                            <hr />
                        </div>
                    )})
                }
            </div>
        </div>
    )
}

const SponsorsPage = (props) => {
    return (
        <div>
            <div>
                <header>
                    <h1 className="section-title text-center"> 2023 SPONSORS </h1>
                </header>
            </div>

            <div>
                <div className="text-center sponsor-intro">
                    <h3>Become a sponsor today!</h3>
                </div>

                <div className="text-center sponsor-email"> 
                    Email us at <a href="mailto:executives@cissa.org.au">executives@cissa.org.au</a> 
                </div>
            </div>

            <SponsorList />

        </div>
    )
}

export default SponsorsPage;