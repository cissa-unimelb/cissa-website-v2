import '../assets/css/welcomeChecklistFYG.css'
import Moon from '../components/moon/moon';
import PopupButton from '../components/popup/popupButton';

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
            
            <div>
				<PopupButton 
					text="Please click on this bubble." 
					speechBubble={{
						anchor: [200, 300],
                        width: 174,
                        height: 60
					}}
				>
					<h3>Where is the quick brown fox?</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</PopupButton>
			</div>
        </div>
    )
}

export default welcomeChecklistFYG;