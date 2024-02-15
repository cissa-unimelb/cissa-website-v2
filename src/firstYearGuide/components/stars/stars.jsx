
import React from 'react';
import StarsImage from "../assets/images/components/mobile-stars@2x.png";
import "../assets/css/components/stars.css";

const Stars = (props) => {
    return (
        <div 
            className='starsContainer'
            style={{
                height: props.height,
                width: props.width
            }}
        ></div>
    );
};

export default Stars;