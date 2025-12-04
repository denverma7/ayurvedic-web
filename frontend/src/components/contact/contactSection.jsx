import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactImage from "../../assets/images/contact-image1.png";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const[form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }));
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        ...form,
        to_email: "denverma7@gmail.com",
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    .then(() => {
      alert("Thank you for your message! We will get back to you soon.")
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      })
    })
    .catch((error) => {
      alert('There was and error sending your message. Please try again later.')
      console.log(error)
    })
  };

return (
    <section className="bg-[#fdf8e9] py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 mt-15 rounded-xl overflow-hidden px-2 sm:px-1">
        {/* Left Side - Contact details */}
        <div className="bg-green-950 text-white p-8 flex flex-col rounded-t-3xl rounded-b-none md:rounded-l-3xl md:rounded-r-none justify-start gap-8">
          <p className="uppercase text-sm tracking-widest flex items-center gap-2" data-aos="fade-up" data-aos-delay="500">
            <span className="text-lg">✚</span> Contact Us
          </p>
          <h2 className="text-4xl mb-2" data-aos="fade-up" data-aos-delay="600">
            Get in Touch With Nature Foot Care & Ayurvedic Wellness
          </h2>
          <p className="text-gray-200 text-sm" data-aos="fade-up" data-aos-delay="700">
            At Nature Foot Care and Ayurvedic Wellness, we’re here to guide you
            on your path to natural healing. Contact us for bookings, inquiries,
            or wellness advice
          </p>

          <div>
            <div className='flex items-start gap-4 font-[600]' data-aos="fade-up" data-aos-delay="700">
              <div className="flex items-center justify-center w-[48px] h-[43px] bg-white rounded-[10px] mb-2 p-2">
                <MapPin size={24} className="text-[#09283B]" />
              </div>
              <div className="flex flex-col mb-10">
                <p className='text-[14px]'>Visit Us</p>
                <p className='text-[14px]'>No. 50/9, B/G/1, Collingwood Housing Scheme,<br /> Collingwood Place, Wellawatta, Colombo-6</p>
                <p className='text-[12px] text-gray-400'>Schedule an appointment</p>
              </div>
            </div>
            <div className='flex items-start gap-4 font-[600]' data-aos="fade-up" data-aos-delay="800">
              <div className="flex items-center justify-center w-[48px] h-[43px] bg-white rounded-[10px] mb-2 p-2">
                <Phone size={20} className="text-[#09283B]" />
              </div>
              <div className="flex flex-col mb-10">
                <p className='text-[14px]'>Call Us</p>
                <p className='text-[14px]'>+94 74 261 0334</p>
                <p className='text-[12px] text-gray-400'>Monday to Friday, 9:00 AM - 6:00 PM</p>
              </div>
            </div>
            <div className='flex items-start gap-4 font-[600]' data-aos="fade-up" data-aos-delay="900">
              <div className="flex items-center justify-center w-[48px] h-[43px] bg-white rounded-[10px] mb-2 p-2">
                <Mail size={20} className="text-[#09283B]" />
              </div>
              <div className="flex flex-col">
                <p className='text-[14px]'>Email Us</p>
                <p className='text-[14px]'>ayurvedafootcarenewnature@gmail.com</p>
                <p className='text-[12px] text-gray-400'>Send us your questions anytime</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Info Card */}
        <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-800 rounded-tr-3xl rounded-br-3xl shadow p-6 space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 ml-10 mr-10">
              <p className="text-[#09283B] font-bold text-3xl mt-2 mb-4" data-aos="fade-up" data-aos-delay="500">Send us a message</p>

                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  type="text"
                  placeholder="First Name"
                  className="border-1 border-[#09283B] shadow-xl rounded-md outline-none px-2 py-1 mb-4 placeholder:text-[#09283B]"
                  data-aos="fade-up"
                  data-aos-delay="600"
                  required
                />
              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                className="border border-[#09283B] shadow-xl rounded-md outline-none px-2 py-1 mb-4 placeholder:text-[#09283B]"
                data-aos="fade-up"
                data-aos-delay="700"
                required
              />
              <input
                name='email'
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your Email"
                className="border border-[#09283B] shadow-xl rounded-md outline-none px-2 py-1 mb-4 placeholder:text-[#09283B]"
                data-aos="fade-up"
                data-aos-delay="800"
                required
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone Number"
                className="border border-[#09283B] shadow-xl rounded-md outline-none px-2 py-1 mb-4 placeholder:text-[#09283B]"
                data-aos="fade-up"
                data-aos-delay="900"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                className="border border-[#09283B] shadow-xl rounded-md outline-none px-2 py-1 mb-4 placeholder:text-[#09283B]"
                data-aos="fade-up"
                data-aos-delay="1000"
                rows="4"
                required
              ></textarea>

              <button 
                type="submit"
                className=" bg-green-900 hover:bg-[#09283B] text-white py-2 mt-6 rounded transition cursor-pointer" 
                data-aos="fade-up"
                data-aos-delay="1100"
              >
                Submit Now
              </button>
            </div>
            
            
          </form>
      </div>
    </section>
  );
}
