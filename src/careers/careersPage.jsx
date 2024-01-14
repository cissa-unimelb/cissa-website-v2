import { useState } from "react";
import "../assets/css/careers/careersPage.css";
import allCardsInfo from "./careersData";

const CHAR_PER_LINE = 30;

// TODO: 
// Cursor shape?
// Deal with Responsive for Mobile View

const DropDownList = (props) => {
    const [open, setOpen] = useState(false);

    // Button click handle
    const handleOpen = () => {
        if (props.opportunities.length == 0){
            return;
        }
        setOpen(!open);
    }

    let total_height = 0;
    // Find the total height of the display 
    props.opportunities.forEach((item) => {
        total_height += 85 + Math.floor(item.name.length / CHAR_PER_LINE) * 20
    });

    console.log(total_height);
    

    const sliderStyle = {
        height: open ?(total_height + "px"): "0px",
        transition: "all 0.75s ease-in-out",
        overflow: "hidden"
    } 

    // Rotate arrow
    const rotateStyle = {
        transform: open ? 'rotate(45deg)' : '', 
        // transition: 'transform 150ms ease', // smooth transition
    }

    return(
        <div>
            <div onClick={handleOpen} className="text-center">
                <div>
                    <p> {props.opportunities.length} opportunities available </p>
                </div>
                <div className="arrow_container">
                    <div className="toggle_arrow" style={rotateStyle}></div>
                </div>
                
            </div>

            {open?<hr />:null}

            <div style={sliderStyle}>
                {
                    open?(
                        <div>
                        {
                            props.opportunities.map((opp) => {
                                return (
                                    <div>
                                        <h5 className="career_link"
                                            onClick={() => {
                                                if (opp.link == ""){return;}
                                                window.open(opp.link, '__blank').focus();
                                            }}>
                                            {opp.name}
                                        </h5>
                                        <p>{opp.type} - {opp.location}</p>
                                        <br />
                                    </div>
                                )
                            })
                        }
                        </div>
                    ): null
                }
            </div>
        </div>
    )
}

const CareersCards = (props) => {
    return(
        <div className="career_card">
            <h4 style={props.comp.length > 15?{fontSize: "1.1rem"}:{fontSize: "1.563rem"}}> 
                <strong> {props.comp} </strong> 
            </h4>
            <img src={props.image} className="career_logo"/>

            <button className="careers_button" 
            onClick={() => window.open(props.link, '__blank').focus()}> 
                View Careers 
            </button>

            <DropDownList opportunities={props.opportunities}/>
            
        </div>
    )
    
}


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