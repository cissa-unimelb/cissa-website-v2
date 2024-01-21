import "../assets/css/careers/careersPage.css";

import allCardsInfo from "./careersData";

import CareersCards from "./careersCard";

// TODO: 
// Cursor shape?


const CareersPage = (props) => {
    return(
        <div>
            <header>
                <h1 className="section-title text-center"> CAREERS PORTAL </h1>
            </header>

            <div className="background">
                <div className="grid_layout">
                {
                    Object.keys(allCardsInfo).map((comp) => {
                        return <CareersCards 
                            comp = {comp}
                            image = {allCardsInfo[comp].image}
                            link = {allCardsInfo[comp].link}
                            opportunities = {allCardsInfo[comp].opportunities}
                        />
                    })
                }
                </div>
            </div>


        </div>
        
    )
}

export default CareersPage;