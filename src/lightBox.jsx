import { useState } from "react";
import "./assets/css/lightBox.css";
import all_image from "./imgArr";

const move_image = (setter, cur_index, inc) => {
    const max_ind = all_image.length;
    const next_ind = cur_index + inc;
    if (next_ind >= max_ind || next_ind < 0){
        return null;
    }

    setter(next_ind);
    
}


const LightBox = (props) => {
    // const [display, setDisplay] = useState(props.display);
    // const [img_src, setImgSrc] = useState(null);


    if (props.display == false){
        return null;
    }

    return (
        <div className="lightboxContainer">
            <div className = "lightbox-center">
                <div className="lightboxOverlay" 
                    onClick={() => props.setDisplay(false)}></div>
            
                <div className="lightbox">
                    <img src={all_image[props.img_ind]} />
                    <div className="lb-nav">
                        <button className="lb-prev" 
                            onClick={() => move_image(props.setCurrIndex, props.img_ind, -1)}/>
                        <button className="lb-next" 
                            onClick={() => move_image(props.setCurrIndex, props.img_ind, 1)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightBox