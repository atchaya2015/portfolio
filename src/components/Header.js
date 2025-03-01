import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

function Header() {
const[toggleMenu,setTogglemenu]= useState (false);

  return (
    <header className=' flex justify-between px-5 py-2 sticky
               top-0 z-0  bg-purple-600  text-black font-bold '>
      <a className='font-bold text-blue-50 text-xl' href="#">Atchaya T</a>
      <nav className='hidden md:block' >
      <ul className='flex  text-xl'>
      
        <li><a href="/">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Project</a></li>
        <li><a href="/#resume">Resume</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
      </nav>
     { toggleMenu && <nav className='block md:hidden' >
      <ul onClick={() =>setTogglemenu(!toggleMenu)} className='flex flex-col text-white mobile-nav'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Project</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>}
      <button onClick={()=> setTogglemenu (!toggleMenu)} className='block md:hidden'><Bars3Icon className="text-white  h-6" /></button>
    </header>
  )
}

export default Header
