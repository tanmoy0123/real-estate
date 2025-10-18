import React, { useEffect, useState } from "react";
import { assets } from './../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  // Lock scroll when mobile menu is open
  useEffect(() => {

    if (showMobileMenu) {
      document.body.overflow = 'hidden';
    } else {
      document.body.overflow = 'auto';
    }

    return () => {
      document.body.overflow = 'auto';
    };
  }, [showMobileMenu]);


  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsScrolled]);



  const handleMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      <div className={`fixed  top-0 left-0 w-full transition-colors duration-500 z-10 ${isScrolled ? "bg-gray-500 shadow-md" : "bg-transparent "
        }`}>
        <div className="container mx-auto flex  justify-between items-center py-5 px-6 md:px-20 lg:px-32 bg-transparent">
          {/* logo */}
          <img src={assets.logo} alt="company logo" />

          {/* Menu section */}
          <ul className="hidden md:flex gap-7 text-white">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
            <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
            <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>

          </ul>


          {/* sign up button */}
          <button className="hidden  md:block  bg-white px-8 py-2 rounded-full">Sign up</button>

          <img src={assets.menu_icon} alt="toggle nav icon" className="md:hidden w-7 cursor-pointer" onClick={() => setShowMobileMenu(true)} />
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0  bottom-0 overflow-hidden bg-white transition-all`}>

          <div className="flex justify-end p-6 cursor-pointer">
            <img src={assets.cross_icon} alt="Close the menu" className="w-7" onClick={handleMobileMenu} />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <a onClick={handleMobileMenu} href="#Header" className="px-4 py-2 rounded-full inline-block hover:text-blue-500">Home</a>
            <a onClick={handleMobileMenu} href="#About" className="px-4 py-2 rounded-full inline-block hover:text-blue-500">About</a>
            <a onClick={handleMobileMenu} href="#Projects" className="px-4 py-2 rounded-full inline-block hover:text-blue-500">Projects</a>
            <a onClick={handleMobileMenu} href="#Testimonials" className="px-4 py-2 rounded-full inline-block hover:text-blue-500">Testimonials</a>
          </ul>
        </div>
      </div>



    </div>
  );
};

export default Navbar;
