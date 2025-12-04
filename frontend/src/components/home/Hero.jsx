import React from 'react';
import { useEffect } from 'react';
import BGImage from '../../assets/Images/Home_hero.jpg'
import Header from '../Header';
import { FiPlusCircle } from "react-icons/fi";
import AOS from 'aos'

import {Link} from "react-router-dom"



const Hero = () => {
    useEffect(() => {
      
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });
    }, []);
  return (
      <div className="relative min-h-screen bg-amber-50" data-aos="fade-right"> 
      {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat" 
          style={{ backgroundImage: `url(${BGImage})` }}
        >
          {/* Dark overlay applied only to the background */}
          <div className="absolute inset-0 bg-[#1D4026]/50 z-10"></div>
        </div>

      {/* Content positioned above the background and overlay */}
      <div className="relative z-10">
        <Header />

      {/* Main Content */}
      <main className="container mx-auto py-2 md:py-20" data-aos="fade-up">
        <div className="flex flex-col items-start">
          <div className='pl-4 md:pl-40 text-white md:mt-20' data-aos="fade-up" data-aos-delay="200">
              <p className='flex text-[14px] md:text-[16px]'><FiPlusCircle className=' w-5 h-5'/>&nbsp; FOOT CARE, SOUL CARE</p>
          </div>

          <div className="pl-4 md:pl-40" data-aos="flip-up" data-aos-delay="600">
            <h1 className="hidden md:block text-3xl md:text-[80px] text-white mb-6 mx-auto">
              Rebalance Your Mind, Body & Spirit with Ayurveda
            </h1>
            <h1 className="md:hidden text-[40px] text-white mb-6 mx-auto" data-aos="fade-up" data-aos-delay="400">Rebalance Your Mind, Body & Spirit with Ayurveda</h1>
          </div>
          <div className='ml-4 md:ml-40'>
            <p className='text-white/60 font-sans' data-aos="fade-up" data-aos-delay="400">Step into a sanctuary of natural healing. At Nature Foot Care and Ayurvedic Wellness, <br /> We bring you authentic Ayurvedic therapies designed for relaxation, rejuvenation, and inner harmony.</p>
          </div>
          <div className='ml-4 md:ml-40 font-sans mt-4 md:mt-2 py-2 px-6 bg-[#5C9269] hover:bg-white hover:text-black rounded-full text-white cursor-pointer' data-aos="fade-up" data-aos-delay="500">
            
              <Link 
          to="/contact" 
          className='inline-block font-sans py-2 px-6 bg-[#5C9269] hover:bg-white hover:text-black rounded-full text-white cursor-pointer'
        >
          Contact Us
        </Link>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default Hero;