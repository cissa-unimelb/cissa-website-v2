import "./scrollButtonTestApp.css";
import { useState, useRef } from "react";

import ScrollButton from "./scrollButton";

const SampleComponent = (props) => {
    return (
        <div style={{
            width: "100%",
            height: "50vh",
            backgroundColor: props.color            
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Curabitur in purus id odio efficitur congue. Nulla suscipit, 
            diam vel sodales fermentum, quam lacus faucibus ipsum, eget 
            scelerisque velit sapien sit amet risus. Fusce sit amet ornare 
            lacus, vitae imperdiet risus. Aliquam pharetra, dolor ac consequat 
            feugiat, felis erat imperdiet libero, id tincidunt quam elit a 
            dui. Nullam pretium luctus suscipit. Integer maximus est felis, 
            pharetra aliquam arcu posuere vitae. Phasellus sed porta felis, 
            sed efficitur nulla. Cras nec eleifend eros.
        </div>
    )
}

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
        scrl.current.scrollBy({
            left: shift,
            behavior: 'smooth'
        })
    }

    const PageList = [
        <SampleComponent color="red"/>,
        <SampleComponent color="green"/>,
        <SampleComponent color="black"/>
    ]

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