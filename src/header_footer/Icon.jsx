import { useState } from 'react'

function Icon ({ icon: Icon }) {
  const [isHovered, toggleHover] = useState(false)
  const iconSize = 45

  const iconColor = 'white'
  const iconColorHover = '#0056b3'

  const onEnter = () => {
    toggleHover(true)
  }

  const onExit = () => {
    toggleHover(false)
  }

  return (
    <>
      <Icon className='icon hover-3' onMouseEnter={onEnter} onMouseLeave={onExit} size={iconSize} color={isHovered ? iconColorHover : iconColor} />
    </>
  )
}

export default Icon
