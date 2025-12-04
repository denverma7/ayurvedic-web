import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

import { FiPlusCircle } from "react-icons/fi";
import Service1 from "../../assets/images/footMassage.jpg";
import Service2 from "../../assets/images/foot-massage1.png";
import Service3 from "../../assets/images/face-massage.png";
import Service4 from "../../assets/images/nasya.png";
import Service5 from "../../assets/images/shirod.png";
import Service6 from "../../assets/images/vasti.png";
import Service7 from "../../assets/images/Fish6.png";
import Service8 from "../../assets/images/steamn.png";
import Service9 from "../../assets/images/pedicure.png";
import Service10 from "../../assets/images/manicure.png";
import PackImage from "../../assets/images/packagesImage.png"


const NatureFootCare = () => {
  // track window width so we can compute slidesToShow and force Slider remount
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const sliderRef = useRef(null);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // determine slidesToShow from current width (mobile => 1, web => 3)
  const slidesToShow = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  // create a small "bucket" key so slider remounts when crossing breakpoints
  const sliderKey =
    windowWidth < 768 ? "mobile" : windowWidth < 1024 ? "tablet" : "desktop";

  // Packages data
  const treatments = [
    {
      id: 1,
      name: "Signature Foot Massage (Oil Massage)",
      image: Service1,
      duration: "1 hour",
      description: "A deeply relaxing oil massage focused on the feet to improve circulation, release tension, and restore natural energy flow. Perfect for stress relief and grounding.",
      price: "3000 Rs",
    },
    {
      id: 2,
      name: "Luxury Foot Massage",
      image: Service2,
      description: "An indulgent foot massage experience combining gentle pressure techniques with aromatic oils. Ideal for total relaxation and a touch of luxury.",
      duration: "1 hour",
      price: "3000 Rs",
    },
    {
      id: 3,
      name: "Ayurvedic Face Massage",
      image: Service3,
      description: "A rejuvenating Ayurvedic facial massage using herbal oils that nourish the skin, improve circulation, and bring out a natural glow. Helps relieve facial tension and promotes youthful radiance.",
      duration: "1 hour",
      price: "2000 Rs",
    },
    {
      id: 4,
      name: "Nasya karma (Oil & Steam Therapy)",
      image: Service4,
      description: "An Ayurvedic detox treatment where herbal oil and steam are applied through the nasal passages. Known to cleanse the sinuses, relieve headaches, improve breathing, and promote mental clarity.",
      duration: "Oil Massage by Steam, 30 min",
      price: "1500 Rs",
    },
    {
      id: 5,
      name: "Shirodhara",
      image: Service5,
      description: "A signature Ayurvedic therapy where a continuous stream of warm herbal oil is poured gently over the forehead. Effective for stress, anxiety, insomnia, and chronic headaches. Provides deep mental relaxation and tranquility.",
      duration: "30 min / 45 min / 1 hour",
      details: "Head pain massage",
      price: "4000 Rs",
    },
    {
      id: 6,
      name: "Vasti",
      image: Service6,
      description: "Relieves stiffness and pain with warm herbal oils, deeply nourishing joints and muscles.",
      duration: "Oil heat → (with special oil)",
      price: "Contact for pricing",
    },
    {
      id: 7,
      name: "Fish Therapy",
      image: Service7,
      description: "Gentle Garra rufa fish exfoliate dead skin, leaving feet soft, smooth, and refreshed.",
      duration: "",
      price: "1500 Rs",
    },
    {
      id: 8,
      name: "Steam Bath",
      image: Service8,
      description: "Herbal steam detoxifies, opens pores, and relaxes muscles for a light, rejuvenated feeling.",
      duration: "",
      price: "1500 Rs",
    },
    {
      id: 9,
      name: "Pedicure",
      image: Service9,
      description: "Cleanses, exfoliates, and nourishes feet, leaving them soft, fresh, and beautiful.",
      duration: "",
      price: "3000 Rs",
    },
    {
      id: 10,
      name: "Manicure",
      image: Service10,
      description: "Shapes, polishes, and revitalizes hands, giving nails a healthy, elegant look.",
      duration: "",
      price: "3000 Rs",
    },
  ];

  // carousel settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoScroll: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-amber-50 pb-10">
      <div
        className="pl-4  text-[#6B9A75]  md:pt-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="flex items-center justify-center">
          <FiPlusCircle className=" w-5 h-5" />
          &nbsp; PACKAGES
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div
          className="flex justify-center text-center items-center mb-6 md:mb-12"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1 className="text-[32px] md:text-[56px] text-[#112025]">
            New Nature Foot Care Ayurveda
          </h1>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-6 mr-6 md:ml-20 md:mr-32"> */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-15 rounded-xl overflow-hidden px-4  sm:px-6">  
        {/* About Section */}
        <div className="max-w-4xl mr-0 mx-auto mb-16 ">
          <div
            className="border-b border-[#696969] pl-4 py-4 rounded-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none md:rounded-br-none shadow-md p-8 bg-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* <h2 className="text-2xl font-bold text-amber-900 mb-6 pb-2 border-b border-amber-200">About</h2> */}
            <div
              className="space-y-6 text-[#696969]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h2 className="mb-6 text-[20px] md:text-[24px] text-[#696969]">
                <strong>Nature Foot Care Ayurveda</strong>
              </h2>
              <p
                className="font-sans text-[17px] md:text-[18px]"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Nature Foot Care Ayurveda is a wellness center specializing in
                Ayurvedic foot care therapies, offering natural healing through
                traditional Ayurvedic practices. With a deep focus on foot
                health and overall body balance, we use herbal oils, seeds,
                stems, and natural ingredients to restore harmony between mind
                and body.
              </p>
              <p
                className="font-sans text-[17px] md:text-[18px]"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                While our specialty is Ayurvedic foot care, we also provide a
                wide range of holistic wellness services, including full body
                massages, facial treatments, steam baths, Shirodhara, and beauty
                care such as pedicures and manicures. Every treatment is rooted
                in the principles of Ayurveda, ensuring natural, safe, and
                effective results.
              </p>
              <p
                className="font-sans text-[17px] md:text-[18px]"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                Our mission is to promote relaxation, pain relief, and
                rejuvenation by combining ancient Ayurvedic techniques with
                modern wellness needs—helping our clients achieve total health
                and well-being.
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div data-aos="fade-up" data-aos-delay="400">
          <img src={PackImage} alt=""  className="hidden md:block h-[90%] rounded-br-2xl rounded-tr-2xl object-cover"/>
        </div>
        
      </div>
      {/* Packages Section */}
      <div
          className="max-w-7xl mt-8 mx-auto h-fit bg-white rounded-xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* <div className="border-l-4 border-[#696969] pl-4 py-2 rounded-xl shadow-md p-8"> */}
          <div className="pl-4 py-2 rounded-xl shadow-md p-8">
            <h2
              className="text-2xl font-bold text-[#696969] mb-2 pb-2"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Packages
            </h2>
            {/* <p
              className="text-[#6B9A75] mb-6 italic"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              All starting prices mentioned here
            </p> */}

            {/* <div className="space-y-6">
              {packages.map((treatment) => (
                <div
                  key={treatment.id}
                  className="border-l-4 border-[#6B9A75] border-dotted pl-4"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6"
                    data-aos="fade-up"
                    data-aos-delay="500"
                  >
                    <div>
                      <h3 className="font-bold text-[#112015] text-lg">
                        {treatment.name}
                      </h3>
                      {treatment.duration && (
                        <p className="text-[#696969]">{treatment.duration}</p>
                      )}
                      {treatment.details && (
                        <p className="text-[#696969]">{treatment.details}</p>
                      )}
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="bg-amber-100 text-[#6B9A75] font-bold py-1 px-3 rounded-full">
                        {"starting from " + treatment.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Carousel */}
            {/* <Slider {...sliderSettings}>
              {treatments.map((treatment) => (
                <div key={treatment.id} className="flex flex-col pl-8 pr-8 items-center justify-center py-4">
                  <img
                    src={treatment.image}
                    alt={treatment.name}
                    className="w-68 h-68 md:w-76 md:h-76 object-cover flex mx-auto rounded-xl shadow-md mb-4"
                  />
                  <h3 className="font-bold text-[#112015] text-lg mb-2 flex items-center justify-center text-left line-clamp-1">
                    {treatment.name}
                  </h3>
                  <p className="text-[#696969] text-sm mb-2 line-clamp-2">
                      {treatment.description}
                  </p>
                </div>
              ))}
            </Slider> */}
            <Slider key={sliderKey} ref={sliderRef} {...sliderSettings}>
        {treatments.map((treatment) => (
          <div
            key={treatment.id}
            className="flex flex-col pl-8 pr-8 items-center justify-center py-4"
          >
            <img
              src={treatment.image}
              alt={treatment.name}
              className="w-full h-56 md:h-64 object-cover flex mx-auto rounded-xl shadow-md mb-4"
            />
            <h3 className="font-bold text-[#112015] text-lg mb-2 flex items-center justify-center text-left line-clamp-1">
              {treatment.name}
            </h3>
            <p className="text-[#696969] text-sm mb-2 line-clamp-2">
              {treatment.description}
            </p>
          </div>
        ))}
      </Slider>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto mt-6 text-center">
              <Link
                to="/treatments#treatment-cards"
                className="bg-[#175326] hover:bg-[#053f14] text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg cursor-pointer inline-block"
              >
                  View Details
              </Link>
            </div>
          </div>
          
        </div>

      
      {/* </div>     */}
    </div>
  );
};

export default NatureFootCare;
