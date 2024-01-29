import "./assets/css/TestApp.css";
import { useState, useRef } from "react";

import ScrollButton from "./components/scrollButton/scrollButton";
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

    // Keep the position in range
    resultPost = Math.min(resultPost, maxPost);
    resultPost = Math.max(resultPost, minPost);

    return resultPost;
}

// Main part

//-------------------------------
// ToDo: Reduce speed of sliding

const AppFrame = (props) => {
    return (
        <div 
            className="appFrame" 
            style={{
                width: `${props.frameWidth}px`
            }}
        >

            <div>
                {props.content}
            </div>

            <div>
                <ScrollButton direction="Left" onClickFunc={() => {props.slidingFunc(-props.frameWidth)}}/>
                <ScrollButton direction="Right" onClickFunc={() => {props.slidingFunc(props.frameWidth)}}/>
            </div>

        
        </div>
    )
}

const AppsTest = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let scrl = useRef(null);

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
            <div>
				<header>
					<h1 className="section-title text-center"> First Year Guide </h1>
				</header>
			</div>

            <div className="appTestContainer">
                <div ref={scrl} className="appTest">
                    {PageList.map(elem => <AppFrame content={elem} frameWidth={windowWidth} slidingFunc={slide} />)}
                </div>
            </div>
        </div>
    )
}


export default AppsTest;