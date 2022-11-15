import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import BackgroundCircles from '../components/BackgroundCircles'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 '>
      <Header />
      <section id='hero' className='snap-start'>

        <Hero />

      </section>
      <section id='about' className='snap-center'>
        <About/>
      </section>
      <section id='experince' className='snap-center'>
        <WorkExperience/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      
    </div>
  )
}

export default Home