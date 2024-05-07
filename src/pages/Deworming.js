import React,{useEffect} from 'react'
import HeaderText from '../components/HeaderText';
import catdeworming from "../images/catdeworming.jpg";
import petdeworming from "../images/petdeworming.jpg";
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';

function Deworming() {
  useEffect(() => {
    Aos.init()
  }, [])
  const navigate = useNavigate();
  function navigateBook() {
    navigate("/booking");
  }
  return (
    <div className='lg:mt-16 mt-10'>
      <HeaderText image={petdeworming} header="Deworming Service" details="Keep your furry friend healthy and happy with Pawstopia's professional deworming services. Our experienced veterinarians use safe and effective treatments to eliminate harmful parasites from your pet's system, ensuring their well-being and vitality. Don't wait until your pet shows signs of illness – schedule a deworming appointment today and give them the protection they deserve. 
      At Pawstopia, we're committed to providing the best care for your beloved pets." />
      <div className="bg-teal-100 py-8 lg:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-4" data-aos="zoom-out">Professional Deworming Services</h2>
              <p   data-aos="slide-up"  className="text-lg text-gray-700 mb-4">At Pawstopia, we understand the importance of protecting your pet's health. Our professional deworming services are designed to eliminate harmful parasites and keep your furry friend happy and healthy.</p>
              <p   data-aos="slide-up"  className="text-lg text-gray-700 mb-4">Our experienced veterinarians use safe and effective deworming treatments to rid your pet of intestinal parasites and prevent future infestations. Whether you have a puppy, kitten, or adult pet, regular deworming is essential for maintaining their well-being.</p>
              <p   data-aos="slide-up"  className="text-lg text-gray-700 mb-4">Don't wait until your pet shows signs of illness. Schedule a deworming appointment with Pawstopia today and ensure your pet stays parasite-free.</p>
            </div>
            <div className="text-center">
              <img src={catdeworming} alt="Deworming" className="mx-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className='items-center justify-center text-center py-4'>
        <button onClick={navigateBook}
          className="mx-auto rounded-lg bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Schedule an Appointment
        </button>
      </div>
    </div>
  )
}

export default Deworming