import '../assets/css/activitiesFYG.css';
import mobile_ANZ from "../assets/images/mobile-ANZ.png";
import mobile_ANZ2x from "../assets/images/mobile-ANZ@2x.png";

import { useEffect, useRef, useState} from 'react';
import PopupButton from '../components/popup/popupButton.jsx';

const activitiesFYG = (props) => {
    const div = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

    const callback = () => {
        const rect = div.current.getBoundingClientRect()
        let { x, y, width, height } = rect
        x = (x + window.globalScroll) % window.innerWidth
        y = y % window.innerHeight
        setAnchor({ x, y, width, height })
    }

    useEffect(() => {
		callback()
		window.addEventListener('load', callback)
		return () => window.removeEventListener('load', callback)
	}, [])

    return (
        <div className='activitiesContainer'>
            <div className='activitiesHeading'>ACTIVITIES</div>

            <div className='imgWrapper'>
                <img 
                    src={mobile_ANZ}
                    ref={div} 
                    alt="ANZ"
                    style={{
                        marginBottom: "9vh",
                        width: '100vw',
                        maxWidth: '150px',      // scaled to fit ANZ
                        objectFit: 'overflow',
                    }}
                    
                    onLoad={callback}
                />
            </div>
        </div>
    )
}

export default activitiesFYG;