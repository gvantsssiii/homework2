
import React from 'react'
import Text from './components/Text'
import ProductCard from './components/ProductCard'
import Button from './components/Button'


import './App.css'
import Header from './components/Header'


function App() {


  return (

    <div>

      <Header />

      <Text 
      textColor="red" 
      textContent="Mercedes" 
      textSize="30px" 
      />


    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>

       <ProductCard 
        price={89200} 
        quantity={18} 
        name="Mercedes Benz GLE 53" 
        description="The Mercedes-Benz GLE 53 is a sporty luxury SUV with a powerful turbo engine. It offers advanced technology and a comfortable, stylish interior." 
        color="black" 
      />

      <ProductCard 
        price={59150} 
        quantity={12} 
        name=" Mercedes-Benz CLE" 
        description="The Mercedes-Benz CLE is a luxury coupe that replaces the C and E-Class coupes, offering sleek design and advanced technology. The AMG CLE 53 version delivers sporty performance with a powerful turbocharged engine and refined comfort." 
        color="black" 
      />

      <ProductCard 
        price={62450} 
        quantity={8} 
        name="Mercedes-Benz E-Class" 
        description="The Mercedes E-Class is a luxury midsize sedan known for its elegant design, advanced technology, and smooth performance. It offers a comfortable, high-quality interior with a range of powerful and efficient engine options." 
        color="black" 
      />

      <Button 
      textContent="button"
      textColor="white"
      backgroundcolor="black"
      width="200px"
      height="50px"
      />

      </div>
    </div>
  )
}

export default App