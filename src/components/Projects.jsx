import React from 'react'
import { motion } from "framer-motion"
const Projects = () => {

    const projects =[1,2,3,4,5]



  return (
    <motion.div  initial={{  opacity: 0 }}
    whileInView={{  opacity: 1 }}
    transition={{ duration: 1.5 }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly
     mx-auto items-center z-0'>
        
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        <div className='relative w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 flex scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
{
    projects.map((project,i)=>(<div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center
    justify-center md:p-44 h-screen p-20'>
        <motion.img 
         initial={{ y: -300, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 1.2 }}
         viewport={{ once: true }}
          src='src/assets/google.png' />
        <div><h4 className='text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50'>
        Case Study {i+1} 0f {projects.length} :
            </span> Facebook Clone</h4>
            <p className='text-lg text-center md:text-left '>
                project summary project summary
                </p></div>
    </div>))
}
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/></motion.div>
  )
}

export default Projects