import "./assets/css/mobileView.css";
import { useState, useRef, useEffect} from "react";

import discordLogo from "./assets/images/discord_logo.png";
import instagramLogo from "./assets/images/instagram_logo.png";

import ScrollButton from "../components/scrollButton/scrollButton";
import Road from "../components/road/road";
import Stars from "../components/stars/stars";
import PageList from "./pageList";

// Helper functions

// Scrolling calculation
// Calculate the scrolling position to the next/ previous page
// Used this instead of shifting by windowWidth 
// to avoid dangling in between pages

const EPSILON = 1;

const scrollCalculation = (windowWidth, curScrlPosition, shift, minPost, maxPost) => {
    let nextScrlPosition = curScrlPosition + shift;

    let nextPage = Math.floor(nextScrlPosition/ windowWidth);

    let resultPost;
    // Check if scroll left or right
    if (shift > 0){
        // If right, then round down
        resultPost = nextPage * windowWidth;
    } else {
        // If left, then round up, if there is sufficient offset
        let offset = nextScrlPosition - nextPage * windowWidth;
        if (offset > EPSILON){
            resultPost = (nextPage + 1) * windowWidth;
        } else {
            resultPost = nextPage * windowWidth;
        }
        
    }

    // Create loop effect
    if (resultPost > maxPost){
        resultPost = 0;
    } else if (resultPost < minPost){
        resultPost = maxPost;
    }

    // Keep the position in range
    resultPost = Math.min(resultPost, maxPost);
    resultPost = Math.max(resultPost, minPost);

    return resultPost;
}

// Main part

//-------------------------------
// ToDo: Reduce speed of sliding

/*
    This is the frame that each section will sit in.
    It holds the road and scroller buttons.
    It returns the road and scroller buttons.
*/
const AppFrame = (props) => {
    return (
        <div className="appFrame" style={{ width: `${props.frameWidth}px` }}>
            <div><props.content /></div>
            <div className="navRoadContainer">
                <Road />
                <div className="frameNavigation">
                    <ScrollButton direction="Left" onClickFunc={() => {props.slidingFunc(-props.frameWidth)}} />
                    <a 
                        href="https://discord.gg/g9fD7DBQrU"
                        style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                        }}>
                        <img
                            src={discordLogo}
                            style={{
                                width: "10vw",
                                maxWidth: "40px"
                            }}
                        />
                    </a>
                    
                    <div style={{ width: "50px" }}></div>
                    <a 
                        href="https://www.instagram.com/cissa_unimelb/"
                        style={{
                            marginLeft: "5px",
                            marginRight: "5px",
                        }}>
                        <img 
                            src={instagramLogo}
                            style={{
                                width: "10vw",
                                maxWidth: "40px"
                            }}
                        />
                    </a>
                    
                    <ScrollButton direction="Right" onClickFunc={() => {props.slidingFunc(props.frameWidth)}} />
                </div>
            </div>
        </div>
    )
}

/* 
    This is the FYG page.
    It holds the appFrames.
    It returns the frames, header and stars.
*/

const MobileView = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // useEffect(() => {
    //     window.globalScroll = scrl.current.scrollLeft;
    // })
    let scrl = useRef(null);

    useEffect(() => {
        window.globalScroll = scrl.current.scrollLeft;
    })

    const slide = (shift) => {
        // Note: scrollTo is asynchronous due to the animation
        // so might need a lock/ promise to ensure scrollLeft is up-to-date

        // It runs fine, so let see if issues occur

        let nextPost = scrollCalculation(windowWidth, scrl.current.scrollLeft, 
            shift, 0, windowWidth * (PageList.length - 1));

        scrl.current.scrollTo({
            left: nextPost,
            behavior: 'smooth'
        });

        console.log(scrl.current.scrollLeft);
    }

    return (
        <div>
            <div className="appTestContainer">
            <div className="headingText">CISSA FIRST YEAR GUIDE</div>
                <div ref={scrl} className="appTest">
                
                    <div className="starsContainer"/>
                    <Stars width="600vw" height="20svh"/>
                    {PageList.map(elem => <AppFrame content={elem} frameWidth={windowWidth} slidingFunc={slide}/>)}
                </div>
            </div>
        </div>
    )
}


export default MobileView;