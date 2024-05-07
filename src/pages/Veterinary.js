import React, { useEffect } from 'react'
import HeaderText from '../components/HeaderText';
import vetinary from "../images/vetinary.jpeg";
import veterinary2 from "../images/veterinary2.jpeg";
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

function Veterinary() {
    useEffect(() => {
        Aos.init()
    }, [])
    const navigate = useNavigate();
    function navigateBook() {
        navigate("/booking");
    }
    return (
        <div className='lg:mt-16 mt-10'>
            <HeaderText image={vetinary} header="Mobile Veterinary Services" details="Experience exceptional veterinary care for your beloved pets at Pawstopia. Our dedicated team of veterinarians is committed to providing compassionate and comprehensive medical services to ensure the health and happiness of your furry family members. From routine check-ups and vaccinations to specialized treatments and surgical procedures, we offer a wide range of services tailored to meet your pet's unique needs. With state-of-the-art facilities and personalized attention, you can trust us to deliver top-quality care for your pets.
             Schedule an appointment with Pawstopia today and give your pets the veterinary care they deserve."/>
            <div className="flex flex-col items-center justify-center bg-gray-100 py-12 px-4">
                <h2 className="text-3xl font-bold text-teal-700 mb-6" data-aos="zoom-in">Expert Veterinary Care at Pawstopia</h2>
                <div className="max-w-3xl mx-auto">
                    <img src={veterinary2} alt="Veterinary Services" className="rounded-lg mb-6" />
                    <p className="text-lg text-gray-800 leading-relaxed mb-6" data-aos="slide-up">
                        At Pawstopia, we prioritize the health and well-being of your beloved pets. Our expert veterinary team is dedicated to providing compassionate care and top-quality medical services to ensure your furry friends lead happy, healthy lives.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6" data-aos="slide-up">
                        From routine check-ups and vaccinations to specialized treatments and surgical procedures, we offer a comprehensive range of veterinary services tailored to meet your pet's unique needs. Whether your pet is experiencing a health issue, injury, or simply needs preventive care, you can trust our experienced veterinarians to deliver personalized attention and exceptional medical care.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6" data-aos="slide-up">
                        Our state-of-the-art facilities are equipped with advanced diagnostic tools and treatment options to ensure accurate diagnosis and effective treatment for your pet's health concerns. We understand that each pet is unique, and we take the time to listen to your concerns, answer your questions, and develop customized treatment plans that prioritize your pet's well-being.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-6" data-aos="slide-up">
                        Whether you're visiting us for a routine wellness exam or seeking medical care for a specific issue, Pawstopia's veterinary team is committed to providing compassionate, comprehensive care for your furry family members. Schedule an appointment with us today and experience the difference of expert veterinary care at Pawstopia.
                    </p>
                    <div className='items-center justify-center text-center py-4' data-aos="zoom-in">
                        <button
                            onClick={navigateBook }
                            className="mx-auto rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Schedule an Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Veterinary