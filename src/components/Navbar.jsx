import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.svg';
import Button from './Button';

const Nav = () => {
  return (
    <header className='flex flex-row justify-center items-center'>
      <nav className='fixed rounded-full z-50 top-4 sm:w-[650px] md:w-[750px] lg:w-[1200px] xl:w-[1400px] w-[450px] bg-nav-bg bg-opacity-75 backdrop-blur-2xl flex flex-row justify-between items-center md:py-4 md:px-8 py-4 px-8 border-[1px] border-stroke'>
            <div className='flex justify-center items-center '>
              <Link to="/"><img src={Logo} alt="Astra Logo" /></Link>
              
            </div>

            

            <div className='flex flex-row gap-8 items-center'>

            <div className='max-lg:hidden ap-20g text-lg font-extralight text-gray-300'>
                <Link className='p-4 rounded-xl hover:bg-stroke focus:bg-stroke' to="/Features" >Features</Link>
                <Link className='p-4 rounded-xl hover:bg-stroke focus:bg-stroke' to="/Features" >Pricing</Link>
                <Link className='p-4 rounded-xl hover:bg-stroke focus:bg-stroke' to="/Features" >About</Link>
                <Link className='p-4 rounded-xl hover:bg-stroke focus:bg-stroke' to="/Features" >Contact</Link>
                <Link className='p-4 rounded-xl hover:bg-stroke focus:bg-stroke' to="/Features" >Blog</Link>
              </div>
                <Button label='Get Started' />
            </div>

        </nav>
    </header>
        
   
  )
}

export default Nav