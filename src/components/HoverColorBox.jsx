import React, { useState } from 'react'

const HoverColorBox = () => {
  const [hovered, setHovered] = useState(false)
  const style = {
    width: '150px',
    height: '150px',
    backgroundColor: hovered ? 'lightcoral' : 'lightblue',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    margin: '10px'
  }
  return (
    <div
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  )
}

export default HoverColorBox