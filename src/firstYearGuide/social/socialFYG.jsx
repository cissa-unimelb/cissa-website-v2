import { useEffect } from 'react';
import {} from '../components/popup/popupButton.jsx';
import '../assets/css/socialFYG.css';

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
            
        </div>
    )
}

export default socialFYG;