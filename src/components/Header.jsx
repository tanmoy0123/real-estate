import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

const Header = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' id='Header' style={{ backgroundImage: "url('/public/header_img.png')" }}>

                <Hero
                    heroText='Explore homes that fit your dreams'
                    buttonText1='Projects'
                    buttonText2='Contact Us'
                />
            </div>
        </>
    )
}

export default Header