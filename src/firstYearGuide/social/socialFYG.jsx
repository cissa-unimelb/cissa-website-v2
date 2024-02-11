import '../assets/css/socialFYG.css'
import mobile_Alan_Gilbert from "../assets/images/mobile-Alan-Gilbert.png"
import mobile_Alan_Gilbert2x from "../assets/images/mobile-Alan-Gilbert@2x.png"

import { useEffect, useRef, useState} from 'react';
import PopupButton from '../components/popup/popupButton.jsx';


const socialFYG = (props) => {
    const div = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

    const setBaseAnchor = () => {
        const rect = div.current.getBoundingClientRect();
        let { x, y, width, height } = rect;
        x = x % (window.innerWidth);
        setAnchor({ x, y, width, height });
    }

    useEffect(() => {
        setBaseAnchor();
    }, []);


    return (
        <div className='socialContainer'>
            <img 
                src={mobile_Alan_Gilbert}
                ref={div} 
                alt="Alan Gilbert"
                style={{
                    marginBottom: "10%",
                    width: '100vw',
                    objectFit: 'overflow',
                    position: "absolute",
                    bottom: 0,
                }}
                
                onLoad={setBaseAnchor}
            />

            <PopupButton 
                text="Making friends" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.5, baseAnchor.y + baseAnchor.height * 0.15],
                    maxWidth: 200,
                    //bound: false
                }}
            >
                <h3>Where is the quick brown fox?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </PopupButton>

            <PopupButton 
                text="Group mates" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.6, baseAnchor.y + baseAnchor.height * 0.5],
                    maxWidth: 200,
                    //bound: false
                }}
            >
                <h3>Where is the quick brown fox?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </PopupButton>

            <PopupButton 
                text="Event list" 
                speechBubble={{
                    anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.8],
                    maxWidth: 200,
                    //bound: false
                }}
            >
                <h3>Where is the quick brown fox?</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </PopupButton>

        </div>
    )
}

export default socialFYG;