import React,{useEffect} from 'react';
import HeaderText from '../components/HeaderText';
import ddaycare from "../images/ddaycare.jpeg";
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';


function Daycare() {
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
      <HeaderText image={ddaycare} header="Dog Daycare Services" details="Welcome to Pawstopia's premier doggy daycare – where tails wag with joy and furry friends find their second home. 
      Our daycare isn't just a place for dogs to stay; it's a vibrant community where pets thrive under the watchful eye of our caring staff. With spacious play areas, engaging activities, and personalized attention, we provide the perfect blend of fun and comfort for your beloved canine companions. Join us at Pawstopia and let your pup experience a day filled with laughter, love, and endless tail wags."/>
      <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 mx-auto text-center" data-aos="slide-up">Unleash the Joy: Pawstopia's Daycare Services</h2>
        <p className="text-lg text-gray-700 mb-4" data-aos="slide-up">At Pawstopia, we understand that your furry friend deserves the best care and attention, even when you can't be by their side. That's why we're thrilled to introduce our premier doggy daycare services, tailored to meet the needs of both you and your beloved pet.</p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2" data-aos="slide-up">What We Offer:</h3>
        <ul className="list-disc ml-8 text-gray-700 mb-4">
          <li data-aos="slide-up">Safe and Supervised Environment</li>
          <li data-aos="slide-down">Fun and Enriching Activities</li>
          <li data-aos="slide-down">Personalized Care</li>
          <li data-aos="slide-down">Daily Updates</li>
          <li data-aos="slide-down">Convenience</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2" data-aos="zoom-in">Why Choose Pawstopia:</h3>
        <ul className="list-disc ml-8 text-gray-700 mb-4" data-aos="slide-up">
          <li>Trusted Reputation</li>
          <li>Passionate Staff</li>
          <li>Happy and Healthy Pets</li>
        </ul>

        <p className="text-lg text-gray-700 mb-4" data-aos="slide-up">Don't let your dog miss out on the fun! Enroll them in Pawstopia's doggy daycare today and watch them thrive in a supportive and enriching environment. Because when it comes to your furry friend, only the best will do.</p>

        <p className="text-lg text-gray-700 mb-4" data-aos="slide-up">Contact us now to learn more and book your pup's spot in our daycare program. Unleash the joy with Pawstopia!</p>
      </div>
      <div className='mx-auto items-center justify-center text-center py-4'>
        <button onClick={navigateBook}
          className="mx-auto rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          MAKE AN APPOINTMENT NOW
        </button>
      </div>
    </div>
  )
}

export default Daycare