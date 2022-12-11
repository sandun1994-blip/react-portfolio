import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'
const Skills = () => {
    return (
        <motion.div
        initial={{  opacity: 0 }}
        whileInView={{  opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
                Hover over a skill for currency profieciency
            </h3>
            <div className='grid grid-cols-4 gap-5 '>
                <Skill img='react.svg' rate='80%'/>
                <Skill img='https://firebasestorage.googleapis.com/v0/b/sandun-tharuka-senanayaka.appspot.com/o/firebase.png?alt=media&token=e8847a2a-c813-496f-821f-ecdfaa766b30' rate='75%'/>
                <Skill img='https://firebasestorage.googleapis.com/v0/b/sandun-tharuka-senanayaka.appspot.com/o/html.png?alt=media&token=4f01946f-0277-49c0-872e-a459a568d338' rate='80%'/>
                <Skill img='https://firebasestorage.googleapis.com/v0/b/sandun-tharuka-senanayaka.appspot.com/o/node.png?alt=media&token=14bbac2a-8512-4c2a-a2ba-83b8d264777b' rate='80%'/>
                <Skill img='https://firebasestorage.googleapis.com/v0/b/sandun-tharuka-senanayaka.appspot.com/o/sql.png?alt=media&token=5db3dd7e-c8e2-44f6-bfeb-e1d268cfe944' rate='80%'/>
                <Skill img='https://firebasestorage.googleapis.com/v0/b/sandun-tharuka-senanayaka.appspot.com/o/vs.jfif?alt=media&token=0b5476e4-9099-4692-9672-ab4ae0520217' rate='80%'/>
                <Skill img='vue.png' rate='80%'/>
                <Skill img='nest.png' rate='60%'/>
                <Skill img='expo.png' rate='80%'/>
                <Skill img='tailwind.png' rate='50%'/>
                <Skill img='js.png' rate='80%'/>
                <Skill img='ts.png' rate='80%'/>
                <Skill img='mongo.png' rate='40%'/>
                <Skill img='redux.png' rate='70%'/>
                <Skill img='git.png' rate='60%'/>
                <Skill img='nuxt.png' rate='60%'/>
                </div></motion.div>
    )
}

export default Skills