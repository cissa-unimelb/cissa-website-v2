import DropDownList from "./dropDownList";

const CareersCards = (props) => {
    return(
        <div className="career_card career_card_size">
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

export default CareersCards