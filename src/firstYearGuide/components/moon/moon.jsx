import '../../assets/css/components/moon.css';
import moonImageL from "../../assets/images/components/moon_larger.png"

const Moon = () => {
  return (
    <div className="moon-container">
      <img src={moonImageL} alt="Moon" className="bloom-effect" />
    </div>
  );
};

export default Moon;
