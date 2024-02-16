import '../assets/css/careersFYG.css'
import mobile_Student_Pavillion from "../assets/images/mobile-Student-Pavillion.png"
import mobile_Student_Pavillion2x from "../assets/images/mobile-Student-Pavillion@2x.png"

import bench from '../../components/assets/images/components/mobile-bench@2x.png'

import { useEffect, useRef, useState} from 'react';
import PopupButton from '../../components/popup/popupButton.jsx';



const careersFYG = (props) => {
    const [roadOffset, setRoadOffset] = useState('')
    const buildingImg = useRef(null);
    const [baseAnchor, setAnchor] = useState({x: 0, y: 0, width: 0, height: 0});

    useEffect(() => {
        const road = document.querySelector('.navRoadContainer')
		const roadRect = road.getBoundingClientRect()
		setRoadOffset(roadRect.height - 20)

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

        // For landscape object with overflow section (image not fit in frame)
        if (width > window.innerWidth){
            x = 0;
            width = window.innerWidth;
        }

        setAnchor({ x, y, width, height })
        // console.log(x, y, width, height)
        // console.log(window.globalScroll)
        // console.log(x)
        // console.log(rect)
    }


    return (
        <div className='careersContainer'>
            <div className='careersHeading'>CAREERS</div>

            {/* Building */}
            {/* Because of flex, the image size is determined by height + width */}
            {/* Might need to find some other way around. A bit scuff. */}
            <div className='imgWrapper'>
                    <img
                        src={mobile_Student_Pavillion}
                        ref={buildingImg} 
                        alt="Alan Gilbert"
                        style={{
                            position: "absolute",
                            height: '50svh',
                            maxHeight: '500px',
                            maxWidth: '700px',
                            zIndex: 3,
                            bottom: roadOffset + 'px'
                        }}
                        
                        onLoad={callback}
                    />

                    {/* Trees and bench */}
                    <img 
                        src={bench} 
                        alt="Bench"
                        style={{
                            position: "absolute",
                            left: baseAnchor.x,
                            width: '8svh',
                            bottom: '7svh',
                            zIndex: 4
                        }}
                    />
            </div>
            
            {/* Speech bubble */}
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
                    <h3>INTERNSHIP GUIDES</h3>
                    <ul>
                        <li>Start early</li>
                        <ul>
                            <li>Most internship application open early of your penultimate(2nd year)</li>
                            <li>Apply to as many as you can, some students worry about getting multiple offers then having to reject one… Better than not getting any offers.</li>
                            <li>Write your resume early, and get it proofread by at least 2 people.</li>
                        </ul>
                        <li>Write your resume early, and get it proofread by at least 2 people.</li>
                        <li>Do hackathons: show employers that you are technically capable</li>
                        <li>Aiming for big tech: start doing leetcode at the end of your first year</li>
                        <li>Student organisations</li>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="Extra curricular" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.7, baseAnchor.y + baseAnchor.height * 0.4],
                        maxWidth: 200,
                        //bound: false
                    }}
                >
                    <h3>EXTRA CURRICULAR</h3>
                    <ul>
                        <li>Join CISSA + UMSU club forms</li>
                        <li>Hackathon / product-a-thon</li>
                        <ul>
                            <li>Good for jobs</li>
                            <li>Forcing yourself to learn how a complete product gets built, 
                                think about the 4 stages of any project: analysis, design, 
                                development and evaluation, and goes on in each stage. </li>
                            <li>IT project</li>
                            <li>Many of CISSA members got their first job by winning/participating in CISSA hackathon</li>
                        </ul>
                        <li>Volunteering opportunities with uni -&gt; Open day </li>
                        <ul>
                            <li>SSLC</li>
                            <li>Melbourne Plus (Tutoring opportunities available: e.g. GPN tutoring, SuperHack mentoring, and many more)</li>
                            <li>Peer mentoring</li>
                        </ul>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="Resume tips" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.1, baseAnchor.y + baseAnchor.height * 0.6],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>RESUME TIPS</h3>
                    <ul>
                        <li> Limit to 1 page; Max 2</li>
                        <li>Use dot points, sections and clear headings.</li>
                        <li>Don’t list your skills and don’t explain how you got them.</li>
                        <li>Don’t use abbreviations like UoM. </li>
                        <li>IMPORTANT: Do not use complicated designs. 
                            Most if not all job applications have a system that
                             automatically rejects applications 
                             that have an unreadable resume. 
                             Complicated designs could mean the 
                             system can’t read your resume, causing it to be
                              rejected before a person even looks at it.</li>
                    </ul>
                </PopupButton>

                <PopupButton 
                    text="How to start" 
                    speechBubble={{
                        anchor: [baseAnchor.x + baseAnchor.width * 0.6, baseAnchor.y + baseAnchor.height * 0.9],
                        maxWidth: 300,
                        //bound: false
                    }}
                >
                    <h3>HOW TO START</h3>
                    <ul>
                        <li>Join Startmate</li>
                        <li>Follow club listings for career messages</li>
                        <li>Make your own application tracker. 
                            Here is a <a target= '_blank' href="https://docs.google.com/spreadsheets/d/1g7ITVWLaG09YQWudSCBN9cvK7pVzo89BumZHMttrKtg/edit#gid=0">template</a>.</li>
                        <li>Learn about things beyond the subject</li>
                        <li>Participate in education workshops and hackathons</li>
                        <li>Talk to Academic Advisors/Mentors/Stop 1</li>
                        <li>Attend Tech talks/Panels/Industry Connect</li>
                    </ul>
                </PopupButton>
            </div>
            }

        </div>
    )
}

export default careersFYG;