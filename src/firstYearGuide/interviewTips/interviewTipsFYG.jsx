import '../assets/css/interviewTipsFYG.css'
import '../assets/css/subtitle.css'
import mobile_arts_west_night from "../assets/images/mobile-arts-west-night.png"
import mobile_arts_west_night2x from "../assets/images/mobile-arts-west-night@2x.png"
import { useRef, useEffect, useState } from 'react';
import PopupButton from '../components/popup/popupButton';

const interviewTipsFYGt = (props) => {
    const div = useRef(null)
    const [baseAnchor, setAnchor] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const rect = div.current.getBoundingClientRect()
            const { x, y, width, height } = rect
            setAnchor({ x, y, width, height })
            console.log(rect)
        }, 100)
        // const rect = div.current.getBoundingClientRect()
        // const { x, y, width, height } = rect
        // setAnchor({ x, y, width, height })
        // console.log(rect)
    }, [])


    return (
        <div>
            {/* Text container */}
            <div className='subtitle'>Interview Tips</div>

            <img 
                ref = {div}
                src={mobile_arts_west_night2x} 
                alt="Arts West"
                style={{
                    marginBottom: "16%",
                    width: '100vw   ',
                    objectFit: 'overflow',
                    position: "absolute",
                    bottom: 0,
                }} 
            />

            <PopupButton
            text="Test"
            speechBubble={{
                anchor: [baseAnchor.x, baseAnchor.y]
            }}

            >
                <h3>test1</h3>
                <p>test2</p>

            </PopupButton>


        </div>
    )
}

export default interviewTipsFYGt;