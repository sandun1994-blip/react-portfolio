import { collection, getDocs } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import About from '../components/About'
import BackgroundCircles from '../components/BackgroundCircles'
import ContactMe from '../components/ContactMe'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { db } from '../firebase'

const Home = () => {




 const [projects,setProjects] =useState([]) 
 const [skill,setSkill] =useState([]) 
 const [experince,setExperince] =useState([]) 

 const getProjects=()=>{
  const projectRef =collection(db,'projects')
  getDocs(projectRef).then(res=>{
    const projects =res.docs.map(doc=>({data: doc.data(),id:doc.id}))
    setProjects(projects)
  }).catch(err=>console.log(err.message))

  
 }

 const getSkill=()=>{
  const skillRef =collection(db,'skill')
  getDocs(skillRef).then(res=>{
    const skills =res.docs.map(doc=>({data: doc.data(),id:doc.id}))
    setSkill(skills)
  }).catch(err=>console.log(err.message))

  
 }

 const getExperince=()=>{
  const experinceRef =collection(db,'experince')
  getDocs(experinceRef).then(res=>{
    const exp =res.docs.map(doc=>({data: doc.data(),id:doc.id}))
    setExperince(exp)
  }).catch(err=>console.log(err.message))

  
 }

useEffect(()=>{
  getProjects()
  getSkill()
  getExperince()
},[])














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
        <WorkExperience experince={experince}/>
      </section>
      <section id='skills' className='snap-start'>
        <Skills skill={skill}/>
      </section>
      <section id='projects' className='snap-start'>
        <Projects projects={projects}/>
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe/>
      </section>
      
    </div>
  )
}

export default Home