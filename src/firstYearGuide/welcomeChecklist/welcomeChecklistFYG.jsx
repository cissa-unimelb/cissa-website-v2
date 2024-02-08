import '../assets/css/welcomeChecklistFYG.css'
import Moon from '../components/moon/moon';

// This is the welcome checklist section which sits inside an app frame
const welcomeChecklistFYG = (props) => {
    return (
        // store everything to return in appropriate container
        <div className="welcome-container">
            {/* add necessary components/ images/ content */}
            <div>
                Hello
            </div>
            {/* when adding common component wrap in container then specify position */}
            <div className='moon-container'>
                <Moon />
            </div>
        </div>
    )
}

export default welcomeChecklistFYG;