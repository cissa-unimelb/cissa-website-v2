import buildingCluster from "./assets/images/building_Cluster.png";
import "./assets/css/desktopView.css";
import Road from "../components/road/road";
import Stars from "../components/stars/stars"
import Moon from "../components/moon/moon";
import Tree from "../components/assets/images/components/mobile-tree-night@2x.png";
import LampPost from "../components/assets/images/components/mobile-lamp-post@2x.png";
import Bench from "../components/assets/images/components/mobile-bench@2x.png";

import SocialPopUpTitle from "./socialPopUpTitle";
import SubjectsPopUpTitle from "./subjectsPopUpTitle";
import WelcomeChecklistPopUpTitle from "./welcomeChecklistPopUpTitle";
import InterviewTipsPopUpTitle from "./interviewTipsPopUpTitle";
import CareersPopupTitle from "./careersPopUpTitle";
import ActivitiesPopUpTitle from "./activitiesPopUpTitle";

// Add activities

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
            
            {/* Trees */}
            <div className="desktopView__treeContainer" 
                style={{
                    left: `${baseAnchor.x + 0.02 * baseAnchor.width}px`,
                    bottom: "1vh"
                }}>
                <img src={Tree}/>
            </div>

            <div className="desktopView__treeContainer" 
                style={{
                    right: `${baseAnchor.x - 0.08 * baseAnchor.width}px`,
                    bottom: `10vh`
                }}>
                <img src={Tree}/>
            </div>

            {/* Lamp Post */}
            <div className="desktopView__lampPostContainer" 
                style={{
                    left: `${baseAnchor.x + 0.1 * baseAnchor.width}px`,
                    bottom: "1vh"
                }}>
                <img src={LampPost}/>
            </div>

            {/* Bench */}
            <div className="desktopView__benchContainer" 
                style={{
                    left: `${baseAnchor.x + 0.15 * baseAnchor.width}px`,
                    bottom: "1vh"
                }}>
                <img src={Bench}/>
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

            <div className="desktopView_headingText">CISSA FIRST YEAR GUIDE</div>

            {baseAnchor.width == 0? 
            <></>
            :
            <div>
                {/* Lamp Post */}

                {/* Social */}
                <SocialPopUpTitle baseAnchor={baseAnchor} />

                {/* Careers */}
                <CareersPopupTitle baseAnchor={baseAnchor}/>

                {/* Subjects */}
                <SubjectsPopUpTitle baseAnchor={baseAnchor}/>
                {/* Welcome Checklist */}
                <WelcomeChecklistPopUpTitle baseAnchor={baseAnchor}/>

                {/* Interview Tips */}
                <InterviewTipsPopUpTitle baseAnchor={baseAnchor}/>

                {/* Activities */}
                <ActivitiesPopUpTitle baseAnchor={baseAnchor}/>
            </div>
            }

        </div>
    )
}



export default DesktopView;