import React from 'react'
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
    return (
        <div className='scroll-mt-24 container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden flex flex-col items-center justify-center' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2' >Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
            <p className='text-gray-500 max-w-90 text-center mb-8'>Real Stories from Those Who Found Home with Us</p>


            <div className='flex flex-wrap justify-center gap-8'>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded px-8 py-12 text-center'>
                        <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 mb-4 text-sm'>{testimonial.title}</p>
                        <div className='flex justify-center gap-1 text-red-500 mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} alt='star icon' />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials