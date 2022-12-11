import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from "react-hook-form";
const ContactMe = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        window.location.href =`mailto:sandub612@gmail?subject=dkdk&body=hi,my name is sandunddd(vipert68@gmail.com)`
    }



    return (
        <div className='h-screen flex flex-col relative text-center  md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
            <div className='flex flex-col space-y-10 mt-10'>
                <h4 className='text-2xl font-semibold'>
                    I have got just what
                    <span className='decoration-[#F7AB0A]/50 underline'>
                        Lets Talk
                    </span>
                </h4>

                <div className='space-y-10 '>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+94 74 191 7084</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>sanduntharuka612@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Sri Lanka</p>
                    </div>

                </div>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2  mx-auto pl-50 pr-50'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} className='contactInput' type="text" placeholder='Name' />
                        <input  {...register('email')} className='contactInput' type="email" placeholder='Email' />
                    </div>
                    <input {...register('subject')} className='contactInput' type="text" placeholder='Subject' />
                    <textarea {...register('message')} className='contactInput' name="" id="" cols="30" rows="2" placeholder='Message' />
                    <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe