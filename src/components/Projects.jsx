import React, { useEffect, useState } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion';



const Projects = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardToShow, setCardsToShow] = useState(1);


    useEffect(() => {
        const updateCardShow = () => {
            if (window.innerWidth >= 634) {
                setCardsToShow(projectsData.length)
            } else {
                setCardsToShow(1);
            }
        };

        updateCardShow();

        window.addEventListener('resize', updateCardShow);

        return () => window.removeEventListener('resize', updateCardShow);
    }, []);



    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const previousProject = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }
    return (
        <motion.div initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} className='scroll-mt-24 flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 overflow-hidden' id='Projects'>

            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-gray-500 max-w-90 text-center mb-8'>Crafting spaces, Building Legacies-Explore Our Portfolio</p>


            {/* Scroll Buttons */}
            <div className='flex justify-end items-center mb-8 mt-8 w-full'>
                <button onClick={previousProject} className='p-3 bg-gray-200 rounded mr-2' aria-level={'Previous Project'}>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>

                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-level={'Previous Project'}>
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>


            {/* project slider container */}

            <div className='overflow-hidden'>
                <div className='flex gap-8 transition-transform duration-500 ease-in-out'
                    style={{ transform: `translateX(-${(currentIndex * 100) / cardToShow}%)` }}
                >
                    {projectsData.map((project, index) => (
                        <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
                            <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />

                            <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                                <div className='inline-block bg-white w-[80%] px-4 py-2 shadow-md'>
                                    <h2 className='text-xl font-semibold text-gray-800'>
                                        {project.title}
                                    </h2>

                                    <p className='text-gray-500 text-[12px]'>
                                        {project.price} <span>|</span> {project.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects