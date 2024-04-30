import React, { useEffect } from 'react';
import logo from "../images/logo.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import AOS from "aos";
import 'aos/dist/aos.css';

function Footer() {
    const date = new Date().getFullYear();
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className='items-center justify-center mx-auto text-center bg-teal-100 pt-3 bottom-0' data-aos="slide-up">
            <div className='lg:flex items-center gap-8 mx-auto justify-center text-center'>
                {/* company details */}
                <div className='items-center lg:grid justify-center text-center mx-auto'>
                    <img src={logo} alt='pawstopia logo' className='w-48 rounded-md mx-auto'></img>
                    <h1 className='py-2 text-2xl text-gray-900'><strong>Pawstopia Pet Grooming and Wellness Company</strong></h1>
                </div>
                {/* get in touch */}
                <div className='items-center lg:grid justify-center text-center mx-auto'>
                    <h1 className='text-2xl text-gray-900'><strong>Get in Touch</strong></h1>
                    <p className='flex text-center items-center gap-2 py-2 justify-center mx-auto'><FaEnvelope /> castrolmkude@gmail.com</p>
                    <p className='flex text-center items-center gap-2 py-2 justify-center mx-auto'><FaPhone /> +254790792533</p>
                </div>
                {/* pages */}
                <div className='grid justify-center mx-auto'>
                    <h1 className='text-2xl text-gray-900'><strong>Pages</strong></h1>
                    <a className='hover:text-teal-600' href='/'>Home</a>
                    <a className='hover:text-teal-600' href='/contact'>Contact</a>
                    <a className='hover:text-teal-600' href='/booking'>Online Booking</a>
                </div>
                {/* message us */}
                <div className='mx-auto justify-center items-center text-center'>
                    <h1 className='text-2xl text-gray-900'><strong>Message Us</strong></h1>
                    <div className="mt-2 mx-auto">
                        <input placeholder="Email*" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
                    </div>
                    <div className="mt-2">
                        <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">Message</label>
                        <textarea id='message' rows="3" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                    </div>
                    <button className="mt-3 rounded-md bg-indigo-600 px-9 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Send Message
                    </button>
                </div>
            </div>
            <hr className='mt-4 border-teal-800'></hr>
            <footer className='justify-between lg:flex mx-6'>
                <small className='flex text-center items text-gray-900'>©{date} Pawstopia Pet Grooming and Wellness Company</small>
                <small>Site Built by <a href='/castrol-banda'>Castrol Banda</a></small>
            </footer>
        </div>
    )
}

export default Footer;