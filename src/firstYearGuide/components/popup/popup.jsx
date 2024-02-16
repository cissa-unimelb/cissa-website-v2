import { useEffect, useRef } from 'react'
import '../assets/css/components/popup.css'

export default function Popup ({ children, width=500, maxHeight=400, show, toggle }) {
  const popupRef = useRef(null)
  const innerRef = useRef(null)

  function clickCallback (event) {
    // Hide when clicked outside of popup
    if (show && !innerRef.current.contains(event.target)) {
      toggle(false)
    }
  }

  useEffect(() => {
    // Bring the current app frame to the front
    const frame = popupRef.current.closest(".appFrame")
    frame.style.zIndex = show ? 1000 : 10

    // Use setTimeout to wait for the next React update cycle
    setTimeout(() => {
      window.addEventListener('click', clickCallback)
    })
    return () => window.removeEventListener('click', clickCallback)
  }, [show])

  return (
    <div
      ref={popupRef}
      className="popup" 
      style={{
        width,
        visibility: show ? 'visible' : 'hidden',
        '--max-height':  maxHeight + 'px'
      }}
    >
      <div ref={innerRef} className="popup__inner">
        <div className="popup__content">
          {children}
        </div>
      </div>
    </div>
  )
}