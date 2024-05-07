import React,{useEffect} from 'react';
import HeaderText from '../components/HeaderText';
import vaccinate from "../images/vaccinate.jpeg";
import vaccination from "../images/vaccination.jpeg";
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

function Vaccination() {
    useEffect(() => {
        Aos.init()
    }, [])
    const navigate = useNavigate();
    function navigateBook() {
        navigate("/booking");
    }
    return (
        <div className='lg:mt-16 mt-10'>
            <HeaderText image={vaccination} header="Vaccination Services" details="Protect your pet with Pawstopia's comprehensive
             vaccination services! Safeguard their health and well-being with our expert veterinary care. From routine vaccinations 
             to preventative treatments, we prioritize your pet's safety and happiness. Ensure a lifetime of
             health and vitality for your furry friend – schedule their vaccination appointment today!"/>

            <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-10">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0" data-aos="fade-up">
                    <img src={vaccinate} alt="Pet Vaccination" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4">Ensure Your Pet's Health with Vaccination</h2>
                    <p className="text-lg text-gray-800 mb-6" data-aos="slide-up">
                        Protect your furry friend from dangerous diseases and viruses by keeping their vaccinations up to date. At Pawstopia,
                        we offer comprehensive vaccination services tailored to your pet's specific needs. Our experienced veterinarians
                        will guide you through the vaccination process and ensure that your pet receives the necessary shots to stay healthy
                        and happy.
                    </p>
                    <button data-aos="zoom-in"
                        onClick={navigateBook}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
                        Book Vaccination Appointment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Vaccination