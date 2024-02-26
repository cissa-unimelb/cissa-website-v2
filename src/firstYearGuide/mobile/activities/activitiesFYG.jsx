import '../assets/css/activitiesFYG.css';
import mobile_ANZ from "../assets/images/mobile-ANZ.png";
import mobile_ANZ2x from "../assets/images/mobile-ANZ@2x.png";
import LampPost from '../../components/assets/images/components/mobile-lamp-post@2x.png'
import Tree from '../../components/assets/images/components/mobile-tree-night@2x.png'

import { useEffect, useRef, useState} from 'react';
import PopupButton from '../../components/popup/popupButton.jsx';

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
        const id = setInterval(() => {
			if (div.current.y) {
				callback()
				clearInterval(id)
			}
		}, 50)

		div.current.addEventListener('load', callback)
		return () => div.current.removeEventListener('load', callback)
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
                        marginBottom: "9svh",    // offset to appear above road
                        height: '75svh',         // determines building size based on screen size
                    }}
                    
                    onLoad={callback}
                />

                {/* Lamp Post */}
                <img className="activities-fyg__lamp-post" src={LampPost} style={{
					// bottom: roadOffset + 'px'
                    marginBottom: "9svh"
				}}/>

				{/* Tree */}
				<img className="activities-fyg__tree" src={Tree} style={{
					// bottom: roadOffset + 'px'
                    marginBottom: "9svh"
				}}/>
                
            </div>

            {/* Speech bubbles and pop ups */}

			<PopupButton text="FOOD OPTIONS" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.5,
					baseAnchor.y + baseAnchor.height * 0.2
				],
                }}>
                <h3>FOOD OPTIONS</h3>
                <p>Click on the links below to open in Google Maps</p>
                <ul>
                    <li>
                        <a href="https://maps.app.goo.gl/apHYDtag7kAJ3Fn29" target="_blank">Universal 🍝</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/BLBS11cM9o5aA6pUA" target="_blank">Good Measure ☕</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/7TPRbQKSAHCr3B3F7" target="_blank">Dragon Hotpot 🍲</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/rMgs4uP1zU3xc5uLA" target="_blank">Ootoya Bento 🍱</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/bukvWmRYBzHik9tc7" target="_blank">Don Tojo 🍛</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/dXZwQQhAGAzRgFNK7" target="_blank">Oporto 🍔</a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/7s44N2MPo7pffAPc9" target="_blank">Udon Yasan 🍜</a>
                    </li>
                </ul>
			</PopupButton>

            <PopupButton text="ENTERTAINMENT" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.15,
					baseAnchor.y + baseAnchor.height * 0.45
				],
                }}>
                <h3>ENTERTAINMENT</h3>
                <p>Click on the links below to open in Google Maps</p>
                <ul>
                    <li>
                        <a href="https://maps.app.goo.gl/eFasRcnKsPdw4tfx9" target="_blank">
                            Student Pavilion (Unimelb)
                        </a>
                        : Comics/Gaming/Puzzles
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/ugNaf6XcsoozZePv7" target="_blank">
                            Nona Lee Sports Center
                        </a>
                        : Gym/Pool/Court Hire/Fitness Classes
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/sEB78DHtTXggG7of9" target="_blank">
                            The Great Escape
                        </a>
                        : Escape Room
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/DZK2nTBm984o5DGQ9" target="_blank">
                            Marche Cafe
                        </a>
                        : Board Games
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/SoFJ4gqLQHJvm3qk7" target="_blank">
                            K-Box
                        </a>
                        : Karaoke
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/vrv3mkYKrTYnRwuN7" target="_blank">
                            Booths
                        </a>
                        : Karaoke
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/7QQGLpe5wE9kwxpy7" target="_blank">
                            STRIKE
                        </a>
                        : Bowling
                    </li>
                </ul>
			</PopupButton>

            <PopupButton text="PLACES TO VISIT" speechBubble={{
                anchor: [
					baseAnchor.x + baseAnchor.width * 0.65,
					baseAnchor.y + baseAnchor.height * 0.65
				],
                }}>
                
                <h3>PLACES TO VISIT</h3>
                <p>Click on the links below to open in Google Maps</p>
                <ul>
                    <li>
                        <a href="https://maps.app.goo.gl/R6xYev3wqRargS3a9" target="_blank">
                            National Gallery of Victoria (NGV)
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/3YfYbYPuMSCtU9fY9" target="_blank">
                            Melbourne Museum
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/PbgacqK3ExgFgM9S6" target="_blank">
                            Brighton Beach
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/PHcqBktiU2ZKFkSB7" target="_blank">
                            Great Ocean Road
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/wb7B9UHuNVQXaQ348" target="_blank">
                            Fitzroy Market
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/oS12P2t4c23x3YxC8" target="_blank">
                            State Library Victoria
                        </a>
                    </li>
                    <li>
                        <a href="https://maps.app.goo.gl/vZG7ZN9WjfX2TFBPA" target="_blank">
                            Docklands
                        </a>
                    </li>
                </ul>
			</PopupButton>
        </div>
    )
}

export default activitiesFYG;