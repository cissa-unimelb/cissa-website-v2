import "./scrollButtonTestApp.css";
import { useState } from "react";

const AppFrame = (props) => {
    console.log(props.frameWidth);

    return (
        <div 
            className="appFrame" 
            style={{
                backgroundColor: props.color,
                width: `${props.frameWidth}px`
            }}
        >
        </div>
    )
}

const AppsTest = (props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [shifting, setShifting] = useState(0);

    const PageList = [
        <AppFrame color="green" frameWidth={windowWidth}/>,
        <AppFrame color="blue" frameWidth={windowWidth}/>
    ]



    return (
        <div className="appTestContainer" style={{width: `${windowWidth}px`}}>
            <div 
                className="appTest"
                style={{
                    transform: `translate3d(${shifting}vw, 0, 0)`,
                    width: `${PageList.length * windowWidth}px`
                }}>
                {PageList.map(elem => elem)}
            </div>
        </div>
    )
}


export default AppsTest;