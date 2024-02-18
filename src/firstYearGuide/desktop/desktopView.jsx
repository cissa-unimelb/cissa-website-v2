import buildingCluster from "./assets/images/building_Cluster.png";
import "./assets/css/desktopView.css";
import Road from "../components/road/road";
import Stars from "../components/stars/stars"
import Moon from "../components/moon/moon";

import SocialPopUpTitle from "./socialPopUpTitle";
import CareersPopupTitle from "./careersPopUpTitle";
import ActivitiesPopUpTitle from "./activitiesPopUpTitle";

import {useRef, useState} from 'react'

const DesktopView = (props) => {
    const buildingImg = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

    const callback = () => {
        const EPSILON = 2;

        const rect = buildingImg.current.getBoundingClientRect()
        let { x, y, width, height } = rect
        x = (Math.ceil(x)) % window.innerWidth
        y = y % window.innerHeight

        setAnchor({ x, y, width, height })
        console.log(x, y, width, height)
        // console.log(rect)
        // console.log(window.globalScroll)
        // console.log(x)
    }

    return(
        <div className="desktopView appFrame">
            <div className="desktopView__buildingWrapper">
                <img
                    ref={buildingImg} 
                    src={buildingCluster}
                    style={{
                        width: "100vw",
                        maxWidth: '1000px',
                        zIndex: 3,
                    }}

                    onLoad={callback}
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

            {baseAnchor.width == 0? 
            <></>
            :
            <div>
                {/* Social */}
                <SocialPopUpTitle baseAnchor={baseAnchor} />

                {/* Careers */}
                <CareersPopupTitle baseAnchor={baseAnchor}/>

                {/* Activities */}
                <ActivitiesPopUpTitle baseAnchor={baseAnchor}/>
                
            </div>
            }

        </div>
    )
}



export default DesktopView;