import '../assets/css/careersFYG.css'
import mobile_Student_Pavillion from "../assets/images/mobile-Student-Pavillion.png"
import mobile_Student_Pavillion2x from "../assets/images/mobile-Student-Pavillion@2x.png"


import { useEffect, useRef, useState} from 'react';
import PopupButton from '../components/popup/popupButton.jsx';



const careersFYG = (props) => {
    const buildingImg = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

    const callback = () => {
        const rect = buildingImg.current.getBoundingClientRect()
        let { x, y, width, height } = rect
        x = (x + window.globalScroll) % window.innerWidth
        y = y % window.innerHeight
        setAnchor({ x, y, width, height })
        // console.log(x, y, width, height)
        // console.log(window.globalScroll)
        // console.log(x)
        // console.log(rect)
    }


    return (
        <div className='careersContainer'>
            <div className='careersHeading'>CAREERS</div>

            <div className='imgWrapper'>
                <img 
                    src={mobile_Student_Pavillion}
                    ref={buildingImg} 
                    alt="Alan Gilbert"
                    style={{
                        marginBottom: "9vh",
                        width: '100vw',
                        maxWidth: '700px',
                        objectFit: 'overflow',
                    }}
                    
                    onLoad={callback}
                />
            </div>
            

            {baseAnchor.width == 0? 
            <></>
            :
            <div> 
                <PopupButton 
                    text="Internship guide" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.4, baseAnchor.y + baseAnchor.height * 0.1],
                        maxWidth: 200,
                        //bound: false
                    }}
                >
                    <h3>Where is the quick brown fox?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </PopupButton>

                <PopupButton 
                    text="Extra curricular" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.7, baseAnchor.y + baseAnchor.height * 0.3],
                        maxWidth: 200,
                        //bound: false
                    }}
                >
                    <h3>Where is the quick brown fox?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </PopupButton>

                <PopupButton 
                    text="Resume tips" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.5],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>Where is the quick brown fox?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </PopupButton>

                <PopupButton 
                    text="How to start" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.6, baseAnchor.y + baseAnchor.height * 0.8],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>Where is the quick brown fox?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </PopupButton>
            </div>
            }

        </div>
    )
}

export default careersFYG;