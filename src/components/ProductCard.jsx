import React from 'react'

export default function ProductCard({price, quantity, name, description, color}) {
  return (
    <div
     style={{
      border: `10px solid ${color}`,
      borderRadius: '20px',
      padding: '30px',
      maxWidth: '400px',
      color: color,
      margin: '10px',
      justifyContent: 'center',
      alignItems: 'center',

    }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>price: {price} $</p>
      <p>quantity: {quantity}</p>
      
    </div>
  )
}
