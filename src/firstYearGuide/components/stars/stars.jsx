
import React from 'react';
import StarsImage from "../../assets/images/components/mobile-stars@2x.png";
import "../../assets/css/components/stars.css";

const Stars = () => {
    return (
        <div>
            <div className="starsContainer">
                <img src={StarsImage} alt="Stars" className="stars"/>
            </div>
        </div>
    );
};

export default Stars;