import React from 'react'

export default function Text({textColor, textContent, textSize}) {
  return (
    <h1 style={{
		color: textColor,
		fontSize: textSize,
    textAlign: 'center'
	}}>
    {textContent}
  </h1>
  )
}
