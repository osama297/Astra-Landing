import React from 'react'

const Label = ( {label} ) => {
  return (
    <div className='rounded-lg text-center bg-nav-bg font-thin text-lg text-gray-100 border-[0.5px] border-stroke px-4 py-2'>
        {label}
    </div>
  )
}

export default Label