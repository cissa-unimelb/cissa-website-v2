import buildingCluster from "./assets/images/building_Cluster.png";
import "./assets/css/desktopView.css";
import Road from "../components/road/road";
import Stars from "../components/stars/stars"
import Moon from "../components/moon/moon";

const DesktopView = (props) => {
    return(
        <div className="desktopView">
            <div className="desktopView__buildingWrapper">
                <img 
                    src={buildingCluster}
                    style={{
                        width: "100vw",
                        maxWidth: '1100px',
                        zIndex: 3
                    }}
                />
            </div>
            
            <div className="desktopView__roadContainer">
                <Road />
            </div>

            <div className="desktopView__starsContainer">
                <Stars height="20svh" width="100vw"/>
            </div>

            <div className="desktopView__moonContainer">
                <Moon />
            </div>

        </div>
    )
}



export default DesktopView;