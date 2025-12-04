import React, { useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import HeroImage from "../assets/images/contact_hero.jpg"
import FaqSection from '../components/FaqSection'
import FaqImage from "../assets/images/faqsectionj.jpg"
import Footer from '../components/Footer'
import ContactSection from '../components/contact/contactSection'
import GoogleMapComponent from '../components/contact/googleMap'
import AOS from 'aos'
import 'aos/dist/aos.css'

const contact = () => {
  const locationCoordinates = { lat: 40.7128, lng: -74.0060 };
  
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-down">
        <HeroSection 
          title="Contact Us"
          breadcrumb={["Home", "Contact us"]}
          backgroundImage={HeroImage}
        />
      </div>
      
      <div data-aos="fade-up" data-aos-delay="100">
        <ContactSection />
      </div>
      
<section className="bg-[#fdf8e9] py-10">
  {/* <div 
    className="rounded-xl md:rounded-lg max-w-6xl mx-auto overflow-hidden shadow-lg px-4 sm:px-6 md:px-8"
    data-aos="zoom-in"
    data-aos-delay="200"
  >
    <GoogleMapComponent 
      apiKey="AIzaSyD2FrWoVGwxQROJEJZANPah2lvqqUlc_Ts"
      center={locationCoordinates}
      markerPosition={locationCoordinates}
      zoom={15}
      height="500px"
    />
  </div> */}
</section>
      
      <div data-aos="fade-up" data-aos-delay="300">
        <FaqSection
          faqImage={FaqImage}
           imageHeight="700px"
         faqs={[
            {
              question: "What is Nature Foot Care Ayurveda’s approach to wellness?",
              answer:
                "We embrace the timeless principles of Ayurveda, offering personalized treatments that restore balance to the mind, body, and spirit. Using natural remedies and holistic practices, our therapies promote relaxation, healing, and long-term well-being.",
            },
            {
              question: "Are the treatments safe and natural?",
              answer:
                "Yes, all our therapies are rooted in Ayurveda and use only herbal oils, natural remedies, and safe practices, making them gentle yet highly effective.",
            },
            {
              question: "What should I wear during the treatment?",
              answer:
                "We provide comfortable attire and towels as needed. For most therapies, loose clothing is recommended to help you relax.",
            },
            {
              question: "Can the treatments help with stress and body pain?",
              answer:
                "Absolutely. Our Ayurvedic massages and therapies are designed to relieve muscle tension, improve circulation, calm the mind, and ease stress-related discomfort.",
            },
            {
              question: "How are treatments personalized?",
              answer:
                "Before each session, our practitioners understand your unique needs and health goals. Based on Ayurvedic principles, the treatment is customized with suitable oils, techniques, and duration.",
            },
            {
              question: "Is Ayurveda only for people with health issues?",
              answer:
                "Not at all! Ayurveda is for everyone. While it helps manage specific concerns, it is also a wonderful way to maintain balance, improve energy, and enjoy overall wellness.",
            },
          ]}
        />
      </div>
      
      <div data-aos="fade" data-aos-delay="400">
        <Footer/>
      </div>
    </div>
  )
}

export default contact