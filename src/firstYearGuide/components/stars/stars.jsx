
import React from 'react';
import starsDesktop_img from "../../assets/images/components/nfc_stars.png";
import "../../assets/css/components/stars.css";

const Stars = () => {
    return (
        <div>
            <div className="stars-container">
                <img src={starsDesktop_img} alt="Stars" className="stars"/>
            </div>
        </div>
    );
};

export default Stars;