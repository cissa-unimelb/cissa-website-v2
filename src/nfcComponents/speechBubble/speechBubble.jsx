import { useEffect, useRef, useState } from 'react'
import './speech-bubble.css'

const PIXEL_SIZE = 10
const WINDOW_GAP = 20

export default function SpeechBubble ({ 
  anchor = [0, 0], 
  align = 'left', 
  bound = true,
  width,
  maxWidth,
  height,
  maxHeight,
  children 
}) {
  const SBRef = useRef(null)
  const SBTailRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [tailOffset, setTailOffset] = useState(0.2)
  const [invertTail, setInvertTail] = useState(false)
  const [visible, setVisible] = useState(false)

  // Set how much the speech bubble should offset from the anchor point based on left/right alignment option
  const offsetPercentage = align === 'left' ? 0.3 : 0.7

  useEffect(() => {
    let [x, y] = anchor
    const SBRect = SBRef.current.getBoundingClientRect()
    const SBTailRect = SBTailRef.current.getBoundingClientRect()
    const bubbleOffset = offsetPercentage * SBRect.width

    // Offset from anchor origin
    x -= bubbleOffset
    y -= SBRect.height

    // Bound position to within the viewport
    if (bound) {
      const minPosX = WINDOW_GAP + window.scrollX
      const maxPosX = window.innerWidth + window.scrollX - WINDOW_GAP - SBRect.width
      const minPosY = WINDOW_GAP + window.scrollY
      const maxPosY = window.innerHeight + window.scrollY - WINDOW_GAP - SBRect.height
      
      if (x < minPosX) {
        x = minPosX
      } else if (x > maxPosX) {
        x = maxPosX
      }

      if (y < minPosY){
        y = minPosY
      } else if (y > maxPosY) {
        y = maxPosY
      }
    }

    // Align the tail to the anchor point
    const halfTailWidth = SBTailRect.width / 2
    const tailOffset = Math.max(
        /** Minimum offset
         * The tail needs to be 3 pixels from the start.
         * Since the tail is 2 pixels from the start by default, we only need to add 1 pixel width 
         */
        PIXEL_SIZE,
        Math.min(
          // Align tail to the anchor point
          anchor[0] - x - bubbleOffset, 

          /** Maximum offset
           * The tail needs to be 3 pixels from the end.
           * Since the tail is 2 pixels from the end by default, we only need to subtract 1 pixel width
           */
          (SBRect.width - bubbleOffset - PIXEL_SIZE * 2 - halfTailWidth) - PIXEL_SIZE
        ) 
        + (bubbleOffset - PIXEL_SIZE * 2) // Align the tail's left side with the anchor point
        - halfTailWidth // Offset the tail by half of its width to align its center to the anchor point
      )

    // Update positions
    setPos({ x, y })
    setTailOffset(tailOffset)
    setVisible(true)

    // Invert tail horizontally if it is over half way
    setInvertTail(tailOffset > SBRect.width / 2 - PIXEL_SIZE * 3)
  }, [anchor])
  console.log(maxWidth)
  return (
    <div 
      ref={SBRef}
      className="speech-bubble" 
      style={{
        left: pos.x + 'px',
        top: pos.y + 'px',
        visibility: visible ? 'visible' : 'hidden',
        '--pixel-size': PIXEL_SIZE + 'px',
        width,
        maxWidth,
        height,
        maxHeight,
      }}
    >
      <div className="speech-bubble__inner">
        <div className="speech-bubble__content">
          <div className="speech-bubble__content__wrapper">
            {children}
          </div>
        </div>
        <div 
          ref={SBTailRef} 
          className="speech-bubble__tail"
          style={{
            left: tailOffset + 'px',
            transform: invertTail
              ? 'scaleX(-1)' 
              : '',
          }}
        ></div>
      </div>
    </div>
  )
}