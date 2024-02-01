import Moon from '../components/moon/moon';
import '../assets/css/welcomeChecklistFYG.css'
// imort alcss

const welcomeChecklistFYG = (props) => {
    return (
        <div className="welcome-container">
            <div>
                Hello
            </div>
            <div className='moon-container'>
                <Moon />
            </div>
        </div>
    )
}

export default welcomeChecklistFYG;