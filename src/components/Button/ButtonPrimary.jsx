import React from 'react'
import './ButtonPrimary.css'

const ButtonPrimary = ({btnName}) => {
  return (
    <button className='btnPrimary'>
        {btnName}
    </button>
  )
}

export default ButtonPrimary