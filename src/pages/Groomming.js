import React,{useEffect} from 'react'
import HeaderText from '../components/HeaderText';
import shaving from "../images/shaving.jpeg";
import grooming from "../images/grooming.jpg";
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

function Groomming() {
    useEffect(() => {
        Aos.init()
    }, [])
    const navigate = useNavigate();
    function navigateBook() {
        navigate("/booking");
    }
    return (
        <div className='lg:mt-16 mt-10'>
            <HeaderText image={grooming} header="Grooming Services" details="Indulge your beloved pet with our premier grooming services at Pawstopia! Our expert groomers provide a luxurious spa experience tailored to meet the unique needs of your furry companion. From soothing baths to stylish haircuts, we ensure your pet looks and feels their best. Treat them to a day of pampering and relaxation – they deserve it! " />
            <div className="flex flex-col lg:flex-row items-center justify-center py-8 px-4 lg:px-10">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <img src={shaving} alt="Pet Grooming" className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-teal-700 mb-4" data-aos="slide-up">Give Your Pet a Spa Day with Our Grooming Services</h2>
                    <p className="text-lg text-gray-800 mb-6" data-aos="zoom-in">
                        Treat your furry friend to a day of pampering at Pawstopia! Our professional groomers specialize in providing top-quality
                        grooming services tailored to your pet's specific needs. From baths and haircuts to nail trimming and ear cleaning,
                        we'll make sure your pet looks and feels their best.
                    </p>
                    <button data-aos="slide-up"
                    onClick={navigateBook}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md shadow-md transition duration-300 ease-in-out">
                        Book Grooming Appointment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Groomming;