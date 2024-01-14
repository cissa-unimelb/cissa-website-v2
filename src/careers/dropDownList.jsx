import { useState } from "react";
const CHAR_PER_LINE = 30;

const DropDownList = (props) => {
    // Remove dropdown if 0 opportunities
    if (props.opportunities.length == 0){
        return (
            <div className="text-center">
                <p> 0 opportunities available </p>
            </div>
        )
    }

    const [open, setOpen] = useState(false);

    // Button click handle
    const handleOpen = () => {
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
                                                if (opp.link == "") {return;}
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

export default DropDownList