import React from 'react'
import { motion } from "framer-motion"
const ExperinceCard = () => {
  return (
    <article className=' snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[900px]'
   >
         <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src='src/assets/profile.jpg'
                className=' w-32 h-32 rounded-full   xl:w-[200px] xl:h-[200px] object-cover object-center'
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of GOOGLE</h4>
                <p className='font-bold text-2xl mt-1'>SANDUN</p>
                <div className='flex space-x-2 my-2'>
                    <img className='h-10 w-10 rounded-full' src='src\assets\google.png' alt=''/>
                    <img className='h-10 w-10 rounded-full' src='src\assets\google.png' alt=''/>
                    <img className='h-10 w-10 rounded-full' src='src\assets\google.png' alt=''/>
                </div>
                <p className='uppercase py-5 text-gray-300'>
                    Started work... -Ended
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>summary summary summarysummarysummary </li>
                    <li> summary summary summarysummarysummary</li>
                    <li> summary summary summarysummarysummary</li>
                    <li> summary summary summarysummarysummary</li>
                    <li> summary summary summarysummarysummary</li>
                </ul>
            </div>
    </article>
  )
}

export default ExperinceCard