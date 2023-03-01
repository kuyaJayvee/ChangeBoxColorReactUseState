import React, { useState } from 'react'
import ColorForm from './ColorForm'
import BoxColor from './BoxColor'
import './App.css'

const App = () => {

  const [color, setColor] = useState('');

  const handleColor = (color) => {
      setColor(color)
  }

  return (
    <main className='App'>
      <BoxColor
        color={color}
      />
      <ColorForm
        color={color}
        handleColor={handleColor}
      />
   </main>
  )
}

export default App
