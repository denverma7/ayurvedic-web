import React from 'react';

export default function WhyChooseUs({ 
  subtitle = "Why Choose Us", 
  title, 
  backgroundImage, 
  features = [] 
}) {
  return (
    <div 
  className="relative w-3/4 justify-center mx-auto py-20 rounded-3xl  overflow-hidden text-white"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  data-aos="fade-up"
  data-aos-delay="300"
>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center" data-aos="fade-up" data-aos-delay="400">
        {/* Subtitle */}
        <p className="text-sm uppercase tracking-widest mb-2" data-aos="fade-up" data-aos-delay="500">
          {subtitle}
        </p>
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12" data-aos="fade-up" data-aos-delay="600">
          {title}
        </h2>

        {/* Features Grid with appropriate dividers */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vertical dividers (medium screens and up only) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-white/60"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/3 w-px bg-white/60"></div>
          
          {/* Horizontal dividers */}
          {features.length > 3 && (
            <>
              {/* Mid divider (shown on all screens) */}
              <div className="block absolute top-1/2 left-0 right-0 h-px bg-white/60"></div>
              
              {/* Small screen dividers between each item (except last) */}
              {Array.from({ length: features.length - 1 }).map((_, i) => (
                <div 
                  key={i}
                  className="md:hidden absolute h-px bg-white/60 left-0 right-0"
                  style={{ top: `calc((100% / ${features.length}) * ${i + 1})` }}
                ></div>
              ))}
            </>
          )}
          
          {/* Feature items */}
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center px-4 py-6"
            >
              {/* Icon */}
              <div className="text-4xl mb-4" data-aos="fade-up" data-aos-delay="700">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2" data-aos="fade-up" data-aos-delay="800">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-200 text-sm leading-relaxed" data-aos="fade-up" data-aos-delay="900">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}