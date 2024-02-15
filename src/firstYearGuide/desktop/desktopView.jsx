import buildingCluster from "./assets/images/building_Cluster.png";
import "./assets/css/desktopView.css";

const DesktopView = (props) => {
    return(
        <div className="desktopView">
            <div className="desktopView__buildingWrapper">
                <img 
                    src={buildingCluster}
                    style={{
                        width: "100vw",
                        maxWidth: '900px',
                    }}
                />
            </div>
            


        </div>
    )
}



export default DesktopView;