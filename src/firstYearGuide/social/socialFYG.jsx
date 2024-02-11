import '../assets/css/socialFYG.css'
import mobile_Alan_Gilbert from "../assets/images/mobile-Alan-Gilbert.png"
import mobile_Alan_Gilbert2x from "../assets/images/mobile-Alan-Gilbert@2x.png"

import { useEffect } from 'react';
import {} from '../components/popup/popupButton.jsx';

const socialFYG = (props) => {
    const div = useRef(null);
    const [baseAnchor, setAnchor] = useState({});

    useEffect(() => {
        const rect = div.current.getBoundingClientRect();
        const { x, y, width, height } = rect;
        setAnchor({ x, y, width, height });
    }, []);


    return (
        <div className='socialContainer'>
            <img 
                src={mobile_Alan_Gilbert} 
                alt="Alan Gilbert"
                style={{
                    marginBottom: "10%",
                    width: '100vw',
                    objectFit: 'overflow',
                    position: "absolute",
                    bottom: 0,
                }} 
            />
        </div>
    )
}

export default socialFYG;