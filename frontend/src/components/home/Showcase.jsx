import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import Image1 from '../../assets/Images/showcase/show_3.png'
import Image2 from '../../assets/Images/showcase/show-case-2.png'
import Image4 from '../../assets/Images/showcase/show_2.png'
import Image3 from '../../assets/Images/showcase/show_4.png'
import Image5 from '../../assets/Images/showcase/show_6.png'

const Showcase = () => {
  return (
    <div className='min-h-screen bg-amber-50'>
        <div className='text-[#6B9A75] pt-12 md:pt-24 text-center' data-aos="fade-up" data-aos-delay="200">
            <p className='flex items-center justify-center'><FiPlusCircle className='w-5 h-5'/>&nbsp; WELLNESS SHOWCASE</p>
        </div>

        <div className="container mx-auto pb-16">
          <div className="text-center mb-6 md:mb-16" data-aos="fade-up" data-aos-delay="400">
            <h1 className="text-[32px] md:text-[56px] text-[#112025]">
              Our Ayurvedic Experience
            </h1>
            <span className='hidden md:block text-[16px] font-sans text-[#696969]'>At Nature Foot Care & Ayurvedic Wellness, every treatment is a journey of relaxation and healing. Rooted in Ayurveda and nature, our spa offers a serene escape to restore balance, energy, and inner peace</span>
            <span className='block md:hidden text-[16px] font-medium ml-2 mr-2 font-sans text-[#696969]'>At Nature Foot Care & Ayurvedic Wellness, every treatment is a journey of relaxation and healing. Rooted in Ayurveda and nature, our spa offers a serene escape to restore balance, energy, and inner peace</span>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-36 md:mr-36'>
            <div className='mx-auto'>
                <img src={Image1} alt="" className='w-[320px] h-[250px] md:w-[320px] md:h-[250px] lg:w-[403.33px] lg:h-[250.33px] rounded-2xl mb-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
                <img src={Image2} alt="" className='w-[320px] h-[202.66px] md:w-[320px] md:h-[202.66px] lg:w-[403px] lg-h-[285.55px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
            </div>
            <div className='mx-auto'>
                <img src={Image3} alt="" className='w-[320px] h-[202.66px] md:w-[320px] md:h-[250.66px] lg:w-[403px] lg-h-[320.55px] rounded-2xl mb-8 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1' data-aos="fade-up" data-aos-delay="400"/>
                <img src={Image4} alt="" className='w-[320px] h-[304px] md:w-[320px] md:h-[304px] lg:w-[403px] lg:h-[343.33px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 object-cover' data-aos="fade-up" data-aos-delay="400"/>
            </div>
             <div className='mx-auto'>
                <img src={Image5} alt="" className='w-[320px] h-[300px] md:w-[250px] md:h-[380.61px] lg:w-[403px] lg:h-[480.42px] rounded-2xl transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 object-cover' data-aos="fade-up" data-aos-delay="500"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Showcase