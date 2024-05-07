import React, { useState } from 'react';
import dogs from "../images/dogs.jpeg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Booking() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        service:"",
        petName:"",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post(`${URL}/api/users/contact-us`, formData, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response.status === 201) {
                toast.success("feedback received successfully");
                // Clear form fields after submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    service:"daycare",
                    petName:"",
                });

            }

        } catch (error) {
            if (error.response && error.response.status === 400) {
                toast.error(error.response.data.message);
            }
            else if (error.response && error.response.status === 500) {
                toast.error('Server error. Please try again later.');
            } else {
                toast.error('An unexpected error occurred. Please try again later!');
            }
        } finally {
            setLoading(false);
        }

    };
    return (
        <div className='lg:mt-16 mt-10'>
            <div className='mx-auto text-center justify-center items-center' style={{ backgroundImage: `url(${dogs})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='mx-auto text-center justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                    <h1 className='text-3xl text-teal-500'><strong>Book An appointment Below</strong></h1>
                    <small className='text-center justify-center mx-6 text-white'>Ready to book your pet's next grooming session, daycare
                        visit, or veterinary appointment? Our convenient online booking system makes scheduling hassle-free! Simply choose your
                        desired service, select a date and time that works for you, and let us take care of the rest. With Pawstopia's
                        easy-to-use appointment booking, giving your furry friend the care they deserve has never been simpler.
                        Book now and ensure your pet receives the exceptional treatment they deserve!</small>
                </div>
            </div>
            <div className="mx-auto px-4 py-8 rounded-lg">
                <form onSubmit={handleSubmit} method='post' action='api/contact-us' className="lg:w-2/4 mx-auto p-10 bg-teal-700 rounded-lg">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-100">Book Here</h1>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-100 font-semibold mb-2">Name</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Name" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-100 font-semibold mb-2">Email</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="petName" className="block text-gray-100 font-semibold mb-2">Your pet's name</label>
                        <input type="text" id="petName" name="petName" value={formData.petName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter pet Name"/>
                    </div>
                    <div>
                        <label htmlFor="typeOfService" className="grid text-sm font-medium leading-18 text-gray-900">Choose Service below</label>
                        <select id="typeOfService" name="service" value={formData.service} onChange={handleChange} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="daycare">Daycare</option>
                            <option value="deworming">Deworming</option>
                            <option value="dog-walking">Dog walking</option>
                            <option value="grooming">Grooming</option>
                            <option value="pet-sitting">Pet Sitting</option>
                            <option value="vaccination">Vaccination</option>
                            <option value="veterinary">Veterinary</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">{loading ? "loading..." : "Book Now"}</button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default Booking