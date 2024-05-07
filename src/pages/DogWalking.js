import React from 'react'
import HeaderText from '../components/HeaderText';
import walking from "../images/walking.jpeg";
import dogwalking from "../images/dogwalking.jpeg";
import { FaDog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DogWalking() {
const navigate = useNavigate();
    function navigateBook(){
        navigate("/booking");
    }
    return (
        <div className='lg:mt-16 mt-10'>
            <HeaderText image={walking} header="Dog Walking Services" details="Our professional dog walkers are dedicated to providing your beloved pets with the exercise, stimulation, and outdoor exploration they need to thrive.
With Pawstopia's dog walking service, your pet will enjoy refreshing walks in the great outdoors, tailored to their individual needs and energy levels. Whether it's a leisurely stroll through the park or an exhilarating hike along nature trails, our experienced walkers ensure
 that every outing is filled with joy, excitement, and enrichment for your canine companion."/>
            <div className="flex flex-col items-center justify-center bg-gray-100 py-12">
                <h2 className="text-3xl font-semibold text-indigo-600 mb-8 mx-auto text-center">Explore Our Dog Walking Services</h2>
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center mx-4">
                    <img src={dogwalking} alt="Dog Walking" className="rounded-lg w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 mx-4" />
                    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md mx-auto justify-center py-4 my-4">
                        <FaDog className="mx-auto mb-4 text-5xl text-indigo-600" />
                        <h3 className="text-xl font-semibold mb-2">Dog Walking Service</h3>
                        <p className="text-gray-700 mb-4">Give your pet the exercise and adventure they crave with our professional dog walking services. A happy dog is a healthy dog!</p>
                        <button className="animate-pulse bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400" onClick={navigateBook}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DogWalking;