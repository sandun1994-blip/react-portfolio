import React from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import BackgroundCircles from '../components/BackgroundCircles'
import ContactMe from '../components/ContactMe'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll  overflow-x-hidden 
     z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
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
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
      
    </div>
  )
}

export default Home