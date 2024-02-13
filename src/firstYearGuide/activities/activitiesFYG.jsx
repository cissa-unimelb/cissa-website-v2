import '../assets/css/activitiesFYG.css';
import mobile_ANZ from "../assets/images/mobile-ANZ.png";
import mobile_ANZ2x from "../assets/images/mobile-ANZ@2x.png";
import LampPost from '../assets/images/components/mobile-lamp-post@2x.png'
import Tree from '../assets/images/components/mobile-tree@2x.png'

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
                        marginBottom: "9vh",    // offset to appear above road
                        width: '100vw',
                        maxWidth: '150px',      // scaled to fit ANZ
                        objectFit: 'overflow',
                    }}
                    
                    onLoad={callback}
                />

                {/* Lamp Post */}
                <img className="activities-fyg__lamp-post" src={LampPost} style={{
					// bottom: roadOffset + 'px'
                    marginBottom: "9vh"
				}}/>

				{/* Tree */}
				<img className="activities-fyg__tree" src={Tree} style={{
					// bottom: roadOffset + 'px'
                    marginBottom: "9vh"
				}}/>
                
            </div>

            {/* Speech bubbles and pop ups */}

			<PopupButton text="FOOD OPTIONS" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.5,
					baseAnchor.y + baseAnchor.height * 0.2
				],
            }}>
			
			</PopupButton>

            <PopupButton text="ENTERTAINMENT" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.15,
					baseAnchor.y + baseAnchor.height * 0.45
				],
            }}>
			
			</PopupButton>

            <PopupButton text="PLACES TO VISIT" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.65,
					baseAnchor.y + baseAnchor.height * 0.65
				],
            }}>
			
			</PopupButton>
        </div>
    )
}

export default activitiesFYG;