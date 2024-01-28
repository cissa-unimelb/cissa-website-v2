import { useState } from "react"
import SpeechBubble from '../speechBubble/speechBubble'
import Popup from './popup'

export default function PopupButton ({
  speechBubble,
  text,
  popup,
  children
}) {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div>
      <SpeechBubble {...speechBubble} onClick={() => setShowPopup(true)}>
        <p>{text}</p>
      </SpeechBubble>
      <Popup {...popup} show={showPopup} toggle={setShowPopup}>
        {children}
      </Popup>
    </div>
  )
}