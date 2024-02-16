import '../assets/css/socialFYG.css'
import mobile_Alan_Gilbert from "../assets/images/mobile-Alan-Gilbert.png"
import mobile_Alan_Gilbert2x from "../assets/images/mobile-Alan-Gilbert@2x.png"

import treeNight from "../../components/assets/images/components/mobile-tree-night@2x.png"


import { useEffect, useRef, useState} from 'react';
import PopupButton from '../../components/popup/popupButton.jsx';



const socialFYG = (props) => {
    const [roadOffset, setRoadOffset] = useState('')
    const buildingImg = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

	useEffect(() => {
		// Calculate road offset
		const road = document.querySelector('.navRoadContainer')
		const roadRect = road.getBoundingClientRect()
		setRoadOffset(roadRect.height - 15)

        const id = setInterval(() => {
			if (buildingImg.current.y) {
				callback()
				clearInterval(id)
			}
		}, 50)
    }, [])

    const callback = () => {
        const rect = buildingImg.current.getBoundingClientRect()
        let { x, y, width, height } = rect
        x = (Math.ceil(x + window.globalScroll)) % window.innerWidth
        y = y % window.innerHeight
        setAnchor({ x, y, width, height })

        // console.log(x, y, width, height)
        // console.log(window.globalScroll)
        // console.log(window.innerHeight)
        // console.log(window.innerWidth)
        // console.log(x)
        // console.log(rect)
    }


    return (
        <div className='socialContainer'>
            <div className='socialHeading'>SOCIAL</div>

            <div className='imgWrapper'>
                <img 
                    src={mobile_Alan_Gilbert}
                    ref={buildingImg} 
                    alt="Alan Gilbert"
                    style={{
                        width: '100vw',
                        zIndex: 3,
                        bottom: roadOffset + 'px',
                        position: "absolute",
                        height: '50svh',
                        maxHeight: '500px',
                        maxWidth: '700px',
                    }}
                    
                    onLoad={callback}
                />
                <img 
                    src={treeNight} 
                    alt="TreeNight"
                    style={{
                        position: "absolute",
                        left: baseAnchor.x + 0.8 * baseAnchor.width,
                        width: '9svh',
                        bottom: '7svh',
                        zIndex: 4
                    }}
                />
            </div>
            

            {baseAnchor.width == 0? 
            <></>
            :
            <div> 
                <PopupButton 
                    text="Making friends" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.65, baseAnchor.y + baseAnchor.height * 0.17],
                        maxWidth: 200,
                        align: 'right',
                        appFrameRef: props.appFrameRef
                        // bound: false
                    }}
                >
                    <h3>MAKING FRIENDS</h3>
                    <ul>
                        <li>In-person classes</li>
                        <li>Clubs + joining committees/ subcoms</li>
                        <li>Going to tutorials/lectures and saying hi -&gt; trying to get to know people</li>
                        <li> Join a discord + first year discord links if they’re online </li>
                        <ul>
                            <li>Discord meetups etc</li>
                            <li>UMSU O-week meetups </li>
                            <li>Mixers</li>
                            <li>Pub nights</li>
                            <li>CISSA Big O-Camp</li>
                        </ul>
                    </ul>

                </PopupButton>

                <PopupButton 
                    text="Group mates" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.6, baseAnchor.y + baseAnchor.height * 0.5],
                        maxWidth: 200,
                        appFrameRef: props.appFrameRef
                        //bound: false
                    }}
                >
                    <h3>GROUP MATES</h3>
                    <ul>
                        <li>Make friends prior to the project</li>
                        <li>JOIN CISSA!</li>
                        <li>Join clubs and societies relating to that subject</li>
                        <li>Join hackathons to meet like-minded people</li>
                        <li>Make sure your goals/grades you want to achieve are aligned</li>
                        <li>Reach out to people before the semester</li>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="Event list" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.8],
                        maxWidth: 200,
                        appFrameRef: props.appFrameRef
                        //bound: false
                    }}
                >
                    <h3>EVENTS</h3>
                    <ul>
                        <li>Big O-camp</li>
                        <li>Hirefest</li>
                        <li>Diversi-tea</li>
                        <li>Industry Connect</li>
                        <li>Codebrew</li>
                        <li>Catalyst</li>
                        <li>Producthon</li>
                        <li>Study Sessions</li>
                        <li>Revision Workshops</li>
                    </ul>
                </PopupButton>
            </div>
            }

        </div>
    )
}

export default socialFYG;