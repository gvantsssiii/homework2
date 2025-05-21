import React from 'react'

export default function Button({textContent, textColor, backgroundcolor, width, height}) {
  return (
    <button style={{
        backgroundColor: backgroundcolor,
        color: textColor,
        width: width,
        height: height,
        border: 'none',
        borderRadius: '10px',
    }}>
      {textContent}
    </button>
  )
}
