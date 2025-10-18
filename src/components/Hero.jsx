import React from 'react'

const Hero = ({ heroText, buttonText1, buttonText2 }) => {
    return (
        <>
            <div className='container mx-auto py-4 px-6 md:px-20 lg:px-32 text-center  text-white'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>
                    {heroText}
                </h2>

                <div className='space-x-6 mt-16'>
                    <a href="#Projects" className='border border-white px-8 py-3 rounded'>{buttonText1}</a>
                    <a href="#Contact" className='bg-blue-500 px-8 py-3 rounded'>{buttonText2}</a>
                </div>
            </div>

        </>
    )
}

export default Hero