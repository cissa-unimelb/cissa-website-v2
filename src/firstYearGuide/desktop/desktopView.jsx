import buildingCluster from "./assets/images/building_Cluster.png";
import "./assets/css/desktopView.css";
import Road from "../components/road/road";

const DesktopView = (props) => {
    return(
        <div className="desktopView">
            <div className="desktopView__buildingWrapper">
                <img 
                    src={buildingCluster}
                    style={{
                        width: "100vw",
                        maxWidth: '950px',
                        zIndex: 3
                    }}
                />
            </div>
            
            <div className="desktopView__roadContainer">
                <Road />
            </div>

        </div>
    )
}



export default DesktopView;