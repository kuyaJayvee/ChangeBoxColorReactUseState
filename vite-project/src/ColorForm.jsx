import React from 'react'

const ColorForm = ({ handleColor }) => {
  return (
    <div className='form-container'>
      <form className='form' onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name=""
          id=""
          placeholder='Color Name'
          onChange={(e) => handleColor(e.target.value)}
          autoFocus
        />  
      </form>
    </div>
  )
}

export default ColorForm