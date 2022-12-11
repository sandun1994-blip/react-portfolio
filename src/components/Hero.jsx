import React from 'react'
import { Link } from 'react-router-dom'
import {Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
const Hero = () => {

    const [text,count]=useTypewriter({words:["Hi I'm Sandun Tharuka","Developer","<LovesToCode/>"],loop:true,delaySpeed:2000})
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
         <BackgroundCircles/>
         
         <img src='profile.jpg' alt='' className='relative rounded-full h-32 w-32 mx-auto object-cover'/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Fullstack Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
            <Link> <button className='heroButton'>About</button></Link>
            <Link> <button className='heroButton'>Experience</button></Link>
            <Link> <button className='heroButton'>Skills</button></Link>
            <Link href='#contact'> <button className='heroButton'>Projects</button></Link>
           
           
           
           
        </div>
        </div>
      
        
    </div>
  )
}

export default Hero