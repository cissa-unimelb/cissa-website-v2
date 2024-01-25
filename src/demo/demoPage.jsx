import { useEffect, useState } from "react";
import SpeechBubble from "./SpeechBubble";
import "./style.css";

export default function DemoPage (props) {
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
				</div>

				<SpeechBubble anchor={[anchorPos.x, anchorPos.y]}>
					<span>This is the coolest thing ever<br></br> to exist on this planet</span>
				</SpeechBubble>
			</div>
		</div>
	)
}