import "./scrollButtonTestApp.css";
import { useState, useRef } from "react";

import ScrollButton from "./scrollButton";
import PageList from "./pageList";


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

    console.log(windowWidth);

    let scrl = useRef(null);

    const slide = (shift) => {
        console.log(scrl.current.scrollLeft);

        scrl.current.scrollBy({
            left: shift,
            behavior: 'smooth'
        })
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