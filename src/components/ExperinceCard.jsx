import React from 'react'
import { motion } from "framer-motion"
const ExperinceCard = ({data,id}) => {
console.log(id);
    
  return (
    <article key={id} className=' snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[500px] xl:w-[900px]'
   >
         <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src='profile.jpg'
                className=' w-32 h-32 rounded-full   xl:w-[200px] xl:h-[200px] object-cover object-center'
            />
            <div className='px-0 md:px-10' key={id}>
                <h4 className='text-4xl font-light'>{data?.position}</h4>
                <p className='font-bold text-2xl mt-1'>{data?.companyName}</p>
                <div className='flex space-x-2 my-2'>
                   
                    {data.srcUrl?.map(url=>( <img key={url} className='h-10 w-10 rounded-full' src={url} alt=''/>))}
                    
                </div>
                <p className='uppercase py-5 text-gray-300'>
                     {/* {data?.startDate.to} - {data?.endDate}  */}
                </p>
                <ul className='list-disc space-y-4 ml-5 text-lg'>

                    {data.summary?.map(d=>(<li key={data.summary}>{data.summary}</li>))}
                   
                </ul>
            </div>
    </article>
  )
}

export default ExperinceCard