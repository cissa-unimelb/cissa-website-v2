import "../assets/css/sponsors/sponsorsPage.css";
import { allSponsors } from "./sponsorsList";

const SponsorList = (props) => {
    return(
        <div id="main-sponsors" class="section pt-5">
            <div class="container py-5">
                { Object.keys(allSponsors).map((key) => {
                    return(
                        <div>
                            <div class="row py-4">
                                <div class="col-md-12 text-center">
                                    <h3 class="section-title text-center text-center"><strong>{key}</strong></h3>
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