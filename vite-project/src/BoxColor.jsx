import React from 'react'

const BoxColor = ({ color }) => {
  return (
    <div className='card' style={{ backgroundColor: color }}>
      {color ?
        <h3> {(color).toUpperCase()}</h3>
        :
          <h3>No Item</h3>
      }
      </div>
  )
}

export default BoxColor