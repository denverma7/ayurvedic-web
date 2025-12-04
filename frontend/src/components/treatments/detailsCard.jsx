import React from "react"

export default function DetailsCard({ 
  title, 
  price,
  description, 
  duration, 
  image, 
  
}) {
  return (
    <div className="relative w-full h-auto md:h-[500px] rounded-xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-[280px] object-cover hidden md:block"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      {/* Overlay Card */}
      <div className="relative md:absolute md:bottom-0 bg-white/95 backdrop-blur-md rounded-bl-sm shadow-xl w-full">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2" data-aos="fade-up" data-aos-delay="400">{title}</h2>
          <p className="text-black font-serif text-xs mb-3" data-aos="fade-up" data-aos-delay="500">{duration}</p>
          <p className="text-gray-600 font-serif text-xs mb-3 line-clamp-4" data-aos="fade-up" data-aos-delay="600">{description}</p>
          
          <div className="w-full h-px bg-gray-200 my-3" data-aos="fade-up" data-aos-delay="700"></div>
          
          <div className="" data-aos="fade-up" data-aos-delay="700">
            <p className="font-medium text-base"><span className="font-thin text-xs">Starting from</span></p>
            <p className="font-medium text-base">{price}</p>
            
          </div>
        </div>
      </div>
    </div>
  )
}