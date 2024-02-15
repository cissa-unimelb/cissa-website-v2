import { useEffect, useState } from "react";
import SpeechBubble from "./speechBubble";
import "../../assets/css/components/demo-page.css";

export default function SpeechBubbleDemoPage (props) {
	const [anchorPos, setAnchorPos] = useState({
		x: 0,
		y: 0
	})

	function mouseCallback (event) {
		setAnchorPos({
			x: event.clientX,
			y: event.clientY,
		})
	}

	useEffect(() => {
		window.addEventListener('mousemove', mouseCallback)
		return () => window.removeEventListener('mousemove', mouseCallback)
	}, [])

	return(
		<div className="demo">
			<div>
				<div className="target" style={{
					left: anchorPos.x + 'px',
					top: anchorPos.y + 'px',
				}}>
					Some content here.
					<br/>
					This could be a building.
				</div>

				<SpeechBubble anchor={[anchorPos.x, anchorPos.y]} maxWidth={300}>
					<span>This is the coolest speech bubble to ever to exist on this planet.</span>
				</SpeechBubble>
			</div>
		</div>
	)
}