import React from 'react'
// import Logo from '../assets/Images/wivana-logo-dark.png'
import Logo from '../assets/Images/Nature Foot Care Logo.png'
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { NavLink } from 'react-router-dom';
import MobileMenu from './mobileMenu';

const Header = () => {
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? 'text-white font-medium'
      : 'text-white/80 hover:text-white font-medium';
  };
  React.useEffect(() => {
    // Check if user is coming from the site for the first time in this session
    if (!sessionStorage.getItem('whatsapp_welcome_sent')) {
      // WhatsApp number and message
      const whatsappNumber = '94742610334';
      const message = encodeURIComponent('Hello, welcome to Nature Foot Care Ayurveda! How can we assist you today?');
      // Open WhatsApp in a new tab with the welcome message
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
      sessionStorage.setItem('whatsapp_welcome_sent', 'true');
    }
  }, []);
  return (
    <>
        <div className='flex justify-between items-center p-4 md:p-6 md:ml-28 mr-28'>
            {/* Logo */}
            <img src={Logo} alt="Nature Foot care logo" className='md:hidden w-18 h-18' />
            <MobileMenu />
            
            <div className="hidden md:flex items-center space-x-4" >
                {/* Social Media Icons */}
                <a href="https://www.facebook.com/profile.php?id=61560584634925&mibextid=ZbWKwL" className="text-white border border-white rounded-full p-2 hover:text-black hover:bg-white">
                    <FaFacebookF className=''/>
                </a>
                <a href="https://www.instagram.com/footcareayurveda?igsh=MXZ4bmtlYmZqaXF0cg==" className="text-white hover:text-black border border-white rounded-full p-2 hover:bg-white">
                    <FiInstagram className=''/>
                </a>
            </div>
            {/* Contact Info */}
            <div className="hidden md:flex items-center text-sm text-white">
                <span><FaRegEnvelope className='w-5 h-5 mr-2 mt-2 font-bold' /></span>
                <p className='mr-3 mt-2 font-normal font-sans'>ayurvedafootcarenewnature@gmail.com</p>
                <span><FaPhone className='w-5 h-5 mr-2 mt-2' /></span>
                <span className='font-normal mt-2 font-sans'>+94 74 261 0334</span>
            </div>
        </div>
        <hr className='hidden md:block border-white/60 border-[0.1px] w-[calc(100% - 64px)] ml-28 mr-28 -mt-4 -mb-4' data-aos="fade-up"/>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-6 ml-28 mr-28" data-aos="fade-up">
        <div className="flex items-center space-x-2">
          {/* Logo  */}
          <img src={Logo} alt="NAture foot care logo" className=' hidden md:block w-24 h-24' />
          {/* <p className='text-white hidden md:block md:text-3xl'>Nature Foot Care <br /> Ayurveda</p> */}
        </div>
        <div className="hidden md:flex space-x-8 font-sans">
          <NavLink to="/" className={getLinkClass} end>Home</NavLink>
          <NavLink to="/about" className={getLinkClass}>About Us</NavLink>
          <NavLink to="/treatments" className={getLinkClass}>Treatments</NavLink>
          
          <NavLink to="/contact" className={getLinkClass}>Contact Us</NavLink>
        </div>
        <div>
          <a
            href="https://wa.me/94742610334?text=Hello%2C%20I%20would%20like%20to%20make%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className='hidden md:block bg-[#5C9269] hover:bg-white hover:text-black py-3 px-6 rounded-full font-serif text-white cursor-pointer'>
              Make Appointment
            </button>
          </a>
        </div>
      </nav>
    </>
  )
}

export default Header