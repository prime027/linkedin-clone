import React from 'react'
import './inputOption.css'

function inputOption({ Icon, title, color }) {
  return (
    <div className='inputOption'>
         <Icon styles={{ color: color }}/>
         <h4>{title}</h4>
    </div>
  )
}

export default inputOption