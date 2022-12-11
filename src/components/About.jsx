import React from 'react'
import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div
            initial={{  opacity: 0 }}
            whileInView={{  opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row ma-w-7xl px-10 justify-evenly mx-auto items-center'>


            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src='about.jpg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a
                    <span className='underline decoration-[#7AB0A]/50'>   little </span>{" "}
                    background
                </h4>
                <p className='text-base '>
                    I  am a talented, ambitious and hardworking individual, with broad skills and experience in digital and printed marketing, social media and leading projects.Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.
                    A key strength is communication; building strong relationships with people in order to deliver the best results.<br />

                    Recently, I completed  degree, including CS and Statisitic at the Colombo University and I am now fully employed by Clearly Presented as a Fullstack Developer.
                </p>
            </div>
        </motion.div>
    )
}

export default About