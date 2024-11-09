import React from 'react'
import Chevron from '../assets/Chevron.svg'

const Button = ( {label} ) => {
  return (
    <button className='flex flex-row gap-3 justify-center items-center bg-main hover:bg-main-hover text-white px-4 py-2 rounded-full text-lg font-normal'>
        {label} <img src={Chevron} alt="Chevron" />
    </button>
  )
}

export default Button