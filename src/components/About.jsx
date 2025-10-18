import React from 'react'
import { assets } from '../assets/assets'
import AboutCard from './AboutCard'

const About = () => {

    const data = [
        {
            id: 1,
            title: 'Years of Excellence',
            number: '10',
        },
        {
            id: 2,
            title: 'Years of Excellence',
            number: '12',
        }, {
            id: 3,
            title: 'Years of Excellence',
            number: '20',
        }, {
            id: 4,
            title: 'Years of Excellence',
            number: '25',
        },
    ]



    return (
        <div className='scroll-mt-24 container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden flex flex-col items-center justify-center' id='About'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2' >About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brnad</span></h1>
            <p className='text-gray-500 max-w-90 text-center mb-8'>Passoinate About Properties, Dedicated to Your Vision</p>


            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
                <img src={assets.brand_img} alt="brand_img" className='w-full sm:w-1/2 max-w-lg' />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>

                    <div className='grid grid-cols-2 items-center text-center md:text-left gap-6 md:gap-10 w-full 2xl:pr-28'>
                        {data.map((d) => (
                            <AboutCard title={d.title} number={d.number} />
                        ))}
                    </div>

                    <p className='my-10 max-w-lg text-center md:text-left'>Over the past decade, our brand has built a reputation for trust, innovation, and architectural excellence. We are committed to crafting spaces that inspire modern living — blending creativity comfort, and sustainability in every project we deliver.</p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
                </div>

            </div>
        </div>
    )
}

export default About