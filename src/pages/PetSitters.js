import React,{useEffect} from 'react'
import HeaderText from '../components/HeaderText';
import petsitting from "../images/petsitting.jpeg";
import petsitting2 from "../images/petsitting2.jpeg";
import petsitting3 from "../images/petsitting3.jpeg";
import petsitting4 from "../images/petsitting4.jpeg";
import { IoMdArrowDropright } from 'react-icons/io';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

function PetSitters() {
  useEffect(() => {
    Aos.init({
      delay: 100,
      easing: 'ease-in-sine',
    })
  }, [])
  const navigate = useNavigate();
  function navigateBook() {
    navigate("/booking");
  }
  return (
    <div className='lg:mt-16 mt-10'>
      <HeaderText image={petsitting} header="Pet Sitters Services" details="Looking for reliable and trustworthy pet sitting services? Look no further! At Pawstopia, we understand that leaving your furry friends behind can be stressful, which 
      is why we offer professional pet sitting solutions tailored to meet your pet's unique needs. Whether you need in-home pet sitting, overnight care, or holiday pet sitting, our experienced pet sitters provide personalized attention and care to ensure your pets feel loved and comfortable while you're away. Enjoy peace of mind knowing that your pets are in good hands with Pawstopia's dedicated team of pet sitters. Book your pet sitting service today and embark on your travels worry-free!"/>
      <div className="flex flex-col items-center justify-center py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Professional Pet Sitting Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5">
          <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="slide-up">
            <img src={petsitting2} alt="Pet Sitting Service 1" className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">In-Home Pet Sitting</h3>
              <p className="text-sm text-gray-600 mb-4">Enjoy peace of mind knowing your pets are cared for in the comfort of their own home by our experienced pet sitters.</p>
              <button onClick={navigateBook} className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                Book Now <IoMdArrowDropright className="ml-2" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="slide-up">
            <img src={petsitting3} alt="Pet Sitting Service 2" className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Overnight Pet Sitting</h3>
              <p className="text-sm text-gray-600 mb-4">Need overnight care for your pets? Our pet sitters offer round-the-clock attention and companionship while you're away.</p>
              <button onClick={navigateBook} className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                Book Now <IoMdArrowDropright className="ml-2" />
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-md" data-aos="slide-up">
            <img src={petsitting4} alt="Pet Sitting Service 3" className="w-full h-48 object-cover object-center" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Holiday Pet Sitting</h3>
              <p className="text-sm text-gray-600 mb-4">Traveling for the holidays? Leave your pets in good hands with our caring pet sitters who provide personalized care during your absence.</p>
              <button onClick={navigateBook} className="flex items-center justify-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200">
                Book Now <IoMdArrowDropright className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetSitters;