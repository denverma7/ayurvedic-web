import React from 'react'
// import Logo from '../assets/Images/wivana-logo-dark.png'
import Logo from '../assets/Images/Nature Foot Care Logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";



const Footer = () => {
  return (
    <footer className="bg-[#1D4026] ">
        <div className="container mx-auto px-4 ">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-32">
                <div className="mb-4 md:mb-0 md:ml-32" >
                    <div className='flex items-center space-x-2' data-aos="fade-up" data-aos-delay="200" >
                        {/* <img src={Logo} alt="Wivena logo" className='w-60 h-15 mt-24' data-aos="fade-up" data-aos-delay="200"/> */}
                        <img src={Logo} alt="Nature foot care logo" className=' w-28 h-28 md:w-32 md:h-32 mt-8 -ml-3' />
                        <p className='text-white text-2xl md:text-3xl'>Nature Foot Care <br /> Ayurveda</p>
                    </div>
                    
                    {/* <span className='hidden sm:block mt-8 font-sans text-white/70' data-aos="fade-up" data-aos-delay="200">Embrace the power of Ayurveda to restore, balance, <br /> revitalize your spirit.</span> */}
                    <span className='sm:hidden block mt-8 font-sans text-white/70'data-aos="fade-up" data-aos-delay="200">Embrace the power of Ayurveda to restore, balance, revitalize your spirit.</span>
                    
                    <div className=''>
                        <h2 className='text-[18px] md:text-[24px] text-white mt-6' data-aos="fade-up" data-aos-delay="400">Working Hours</h2>
                        <span className='block text-[16px] font-sans text-white/70 mt-6' data-aos="fade-up" data-aos-delay="400">Our Doors Are Open for Your Healing Journey</span>
                        <span className='flex mt-6 font-sans text-white/70 text-[16px]' data-aos="fade-up" data-aos-delay="500"><FaRegClock className='mt-1'/>&nbsp; Monday - Friday: 9:00 AM - 8:00 PM</span>
                        <span className='flex mt-2 font-sans text-white/70 text-[16px]' data-aos="fade-up" data-aos-delay="600"><FaRegClock className='mt-1'/>&nbsp; Sat - Sun : 8:00AM - 5:00PM</span>
                    </div>
                </div>
                
                <div className="text-start">
                    <div className='mt-6 md:mt-20  '>
                        <h2 className='text-[18px] md:text-[24px] text-white' data-aos="fade-up" data-aos-delay="700">Address</h2>
                        <p className="mb-2 mt-6 text-white/70 font-sans" data-aos="fade-up" data-aos-delay="800">No. 50/9, B/G/1, Collingwood Housing Scheme,  </p>
                        <p className="mb-2 text-white/70 font-sans" data-aos="fade-up" data-aos-delay="900">Collingwood Place, Wellawatta, </p>
                        <p className="mb-8 text-white/70 font-sans" data-aos="fade-up" data-aos-delay="900"> Colombo-6, Sri Lanka</p>
                    </div>
                    <div>
                        <h2 className='text-[18px] md:text-[24px] text-white' data-aos="fade-up" data-aos-delay="1000">Contact</h2>
                        <p className="flex mb-3 mt-6 text-white/70 font-sans" data-aos="fade-up" data-aos-delay="1100"><span><FaPhone className='w-4 h-4 mr-2 mt-2' /></span>&nbsp;+94 74 261 0334</p>
                        <p className="flex mb-8 text-white/70 font-sans" data-aos="fade-up" data-aos-delay="1200"><span><FaRegEnvelope className='w-5 h-5 mr-2 mt-1 font-bold' /></span>&nbsp;ayurvedafootcarenewnature@gmail.com</p>
                    </div>
                </div>
                <div className='mr-36 '>
                    <div className='text-start'>
                        <h2 className='text-[18px] md:text-[24px] text-white mt-2 mb-6' data-aos="fade-up" data-aos-delay="1300">Explore</h2>
                        <ul className=''>
                            <li className='mb-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                                <a href="/" className="text-white/70 font-sans hover:text-white" data-aos="fade-up" data-aos-delay="1400">Home</a>
                            </li>
                            <li className='mb-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                                <a href="/about" className="text-white/70 font-sans hover:text-white" data-aos="fade-up" data-aos-delay="1500">About</a>
                            </li>
                            <li className='mb-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                                <a href="/treatments" className="text-white/70 font-sans hover:text-white" data-aos="fade-up" data-aos-delay="1600">Treatments</a>
                            </li>   
                            
                            <li className='mb-2 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1'>
                                <a href="/contact" className="text-white/70 font-sans hover:text-white" data-aos="fade-up" data-aos-delay="1700">Contact</a>
                            </li>
                            <li>
                                <div className='flex mt-10 gap-4' data-aos="fade-up" data-aos-delay="1800">
                                    <a href="https://www.facebook.com/profile.php?id=61560584634925&mibextid=ZbWKwL" className="text-white border bg-[#696969] border-white rounded-full p-2 hover:text-black hover:bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://www.instagram.com/footcareayurveda?igsh=MXZ4bmtlYmZqaXF0cg==" className="text-white border bg-[#696969] border-white rounded-full p-2 hover:text-black hover:bg-white transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                                        <FiInstagram />
                                    </a>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            
            {/* <div className="mt-8 pt-6 border-t border-amber-800 text-center text-sm text-amber-400">
            <p>© {new Date().getFullYear()} Wivana Ayurveda. All rights reserved.</p>
            </div> */}
        </div>
    </footer>
  )
}

export default Footer