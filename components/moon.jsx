import React from 'react';
import './Moon.css'; // Make sure to import the CSS file
import moonImage from './moon.png'; // Update the path to your image
import moonImageL from "./moon_larger.png"

const Moon = () => {
  return (
    <div className="moon-container">
      <img src={moonImageL} alt="Moon" className="bloom-effect" />
    </div>
  );
};

export default Moon;
