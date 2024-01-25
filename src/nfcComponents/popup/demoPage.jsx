import "./demo-page.css";
import PopupButton from "./popupButton";
import SpeechBubble from '../speechBubble/speechBubble'

export default function PopupDemoPage (props) {
	return(
		<div className="demo">
			<div>
				<PopupButton 
					text="This is the coolest speech bubble to ever to exist on this planet." 
					speechBubble={{
						anchor: [200, 300],
					}}
				>
					<h3>Where is the quick brown fox?</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</PopupButton>
			</div>
		</div>
	)
}