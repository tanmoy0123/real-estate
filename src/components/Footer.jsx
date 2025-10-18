import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <img src={assets.logo_dark} alt={'Logo'} />
                    <p className='text-gray-400 mt-4'>
                        Empowering organizations to grow smarter with technology that works.
                        Together, we build what matters.
                    </p>
                </div>
                <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About</a>
                        <a href="#Projects" className='hover:text-white'>Projects</a>
                        <a href="#Contact" className='hover:text-white'>Contact</a>
                        <a href="#Testimonials" className='hover:text-white'>Testimonials</a>
                    </ul>
                </div>
                <div className='w-full md:w-1/3'>
                    <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                    <p className='text-gray-400 mt-4'>
                        The latest news, articles, and resources, sent to your inbox weekly
                    </p>

                    <div className='flex gap-2 mt-2'>
                        <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-700 border border-gray-700  w-full md:w-auto focus:outline-none' />
                        <button className='py-2 px-4 bg-blue-500 rounded text-white'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div><p className='text-gray-500 mt-10 border-t py-4 border-gray-700
             text-center'>
                © 2025 Real Estate. All rights reserved by Tanmoy Mozumder.
            </p></div>
        </div>
    )
}

export default Footer