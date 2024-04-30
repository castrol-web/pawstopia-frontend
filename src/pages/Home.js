import React, { useEffect } from 'react';
import grooming from "../images/grooming.jpg";
import petdeworming from "../images/petdeworming.jpg";
import vaccination from "../images/vaccination.jpeg";
import dogwalking from "../images/dogwalking.jpeg";
import dogdaycare from "../images/dogdaycare.jpeg";
import dogs from "../images/dogs.jpeg";
import { IoMdArrowDropright } from "react-icons/io";
import { MdChildCare } from 'react-icons/md';
import Services from '../components/Services';
import { FaSyringe } from 'react-icons/fa';
import { FaDog } from 'react-icons/fa';
import { FaPaw } from "react-icons/fa6";
import "../pages/home.css";
import AOS from "aos";
import 'aos/dist/aos.css';

function Home() {
    // Function to generate a random number between min and max
    const getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Array to store the positions of paw icons
    const pawPositions = [];
    // Generate random positions for paw icons
    for (let i = 0; i < 10; i++) {
        const top = getRandomNumber(0, 100); // Random top position
        const left = getRandomNumber(0, 100); // Random left position
        pawPositions.push({ top, left });
    }
    //initialize aos
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <header className="relative px-6 pt-14 lg:px-8" style={{ backgroundImage: `url(${grooming})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto py-4 max-w-2xl sm:py-48 lg:py-56">
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                        <div className="text-white relative rounded-full px-3 py-1 text-sm leading-6  ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Explore cool services offered here.{' '}
                            <a href="/readmore" className="font-semibold text-indigo-600">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            <h1 style={{ color: "#0F2167" }}>Pawstopia Pet Grooming and Wellness Company</h1>
                        </div>
                        <p className="mt-6 text-lg leading-8 text-amber-700">
                            book a service from us hassle-free.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <button
                                className="rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                BOOK AN APPOINTMENT
                            </button>
                            <a href="/learnmore" className="text-sm font-semibold leading-6 text-white">
                                Learn more <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e5cfd8] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </header>
            {/* services section heading */}
            <div className='relative text-center justify-center items-center lg:flex bg-teal-100 pt-9 lg:px-10'>

                <div className='text-center items-center justify-center mx-auto px-10'>
                    <img src={petdeworming} alt='pet_image' className='items-center mx-auto rounded-lg hover:opacity-75'></img>
                </div>

                <div className='pb-6 mx-auto items-center justify-center text-center'>
                    {/* Render paw icons using random positions */}
                    {pawPositions.map((position, index) => (
                        <div
                            key={index}
                            className='absolute mx-auto text-center justify-center items-center'
                            style={{ top: `${position.top}%`, left: `${position.left}%` }}
                        >
                            <FaPaw className='text-teal-700 animate-pulse mx-auto text-center justify-center items-center' />
                        </div>
                    ))}
                    <strong className='text-3xl text-teal-700' data-aos="flip-down">Pawstopia Pet Care Services: Enhancing the Lives of Your Furry Pet</strong>
                    <p className='py-4' data-aos="zoom-in">Welcome to our premier pet grooming company, where we pride ourselves on providing
                        top-notch services tailored to meet the unique needs of your beloved furry companions.
                        Our mobile pet grooming service brings the salon experience right to your doorstep,
                        ensuring maximum comfort and convenience for both you and your pets. Whether you have a playful
                        pup or a finicky feline, our expert groomers specialize
                        in pampering cats and dogs of all breeds and sizes, leaving them looking and feeling their best.</p>
                    <p className='py-4' data-aos="flip-down">Beyond grooming and healthcare, we understand the importance of keeping your pets active and entertained.
                        That's why we offer a range of services including dog walking, pet sitting, and doggy daycare. Whether your
                        pet needs a leisurely stroll around the block, a cozy staycation while you're away,
                        or a fun-filled day of play with other dogs, our compassionate caregivers are here to cater to their every need.</p>
                    <button
                        data-aos="zoom-out" className="flex items-center text-center justify-center mx-auto mb-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Book With Us Now <IoMdArrowDropright className='text-center justify-center items-center' />
                    </button>
                </div>
            </div>
            {/* some of the services  */}
            <div className='mt-2 text-center justify-center mx-auto'>
                <strong className='text-3xl  text-teal-700' data-aos="fade-in">Elegancy grooming services</strong>
                <div className='grid-cols-1 sm:grid md:grid-cols-3 mb-10  gap-10 lg:mx-7 mx-4 mt-4'>
                    <Services icon={<FaSyringe />} background={vaccination} tittle="Pet Vaccination" description="Protect your pet's health and well-being with our comprehensive pet vaccination services,click the button below for more descriptions" />
                    <Services icon={<FaDog />} background={dogwalking} tittle="Dog Walking" description="Give your pet the exercise and adventure they crave with our professional dog walking services.A happy dog is a healthy dog." />
                    <Services icon={<MdChildCare />} background={dogdaycare} tittle="Dog Daycare" description="Our premier dog daycare is a tail-wagging paradise where dogs can romp, play, and make new friends in a safe and supervised environment." />
                </div>
                <button
                    data-aos="slide-up"
                    className="flex items-center justify-center mx-auto mb-6 rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    See All Services
                </button>
            </div>
            {/* testimonials */}
            <div className="mx-auto text-center items-center justify-center mb-5 bg-teal-100 py-4 transition duration-500 ease-in-out transform hover:scale-105">
                <h3>Testimonials</h3>
                <div className="mx-auto text-center items-center justify-center">
                    <h1> <strong className='text-3xl text-teal-700'>What Some of Our Customers Say</strong></h1>
                    <small>Nothing brings us more joy than hearing from our satisfied customers.</small>
                </div>
                <div className="lg:flex justify-center mx-auto items-center text-center" data-aos="slide-up">
                    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md mx-auto justify-center py-4 my-4 lg:my-0 transition duration-500 ease-in-out transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="David Kariuki" className="mx-auto mb-4 rounded-full" />
                        <small className="mb-4">"I can't say enough great things about Pawstopia! My pup,
                            Max, absolutely loves going there. The staff is incredibly caring and attentive, and I always feel
                            confident leaving Max in their capable hands. It's such a relief to know that he's not only
                            getting exercise and socialization but also lots of love and attention. Highly recommend!"</small>
                        <p className="font-semibold">- David Kariuki</p>
                    </div>
                    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md mx-auto justify-center py-4 my-4 transition duration-500 ease-in-out transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="Jane Wambui" className="mx-auto mb-4 rounded-full" />
                        <small className="mb-4">"I've been taking my dog, Bella, to Pawstopia for over a year now,
                            and I couldn't be happier with the service. The facility is clean, spacious, and well-maintained, and the staff
                            is always friendly and welcoming. Bella gets so excited when she realizes where we're going,
                            and I love seeing how happy and tired she is after a day of play. It's been a game-changer for both of us!"</small>
                        <p className="font-semibold">- Jane Wambui</p>
                    </div>
                    <div className="max-w-xs p-4 bg-white rounded-lg shadow-md mx-auto justify-center items-center text-center py-4 my-4 transition duration-500 ease-in-out transform hover:scale-105">
                        <img src="https://via.placeholder.com/150" alt="Carson Kinyua" className="mx-auto mb-4 rounded-full" />
                        <small className="mb-4">"As a busy pet parent, finding a reliable dog daycare was a priority for me, and I'm
                            so glad I found Pawstopia. The convenience of drop-off and pick-up times, along with the peace of
                            mind knowing that my dog, Charlie, is in good hands, has made all the difference. The staff genuinely cares about
                            the dogs and goes above and beyond
                            to ensure they have a positive experience."</small>
                        <p className="font-semibold">- Carson Kinyua</p>
                    </div>
                </div>
            </div>

            {/* contact us hero */}
            <div className='mx-auto text-center justify-center items-center py-5 my-4' style={{ backgroundImage: `url(${dogs})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='mx-auto text-center justify-center items-center'>
                    <h1 className='text-3xl text-teal-700'><strong>Contact Us</strong></h1>
                    <p className='lg:text-black text-slate-950'>Do you have any questions? Feel free to contact us at any time,
                        we will gladly respond to your questions adequately.</p>
                    <button
                        className="flex items-center justify-center mx-auto mt-3 mb-6 rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Contact Us Now <IoMdArrowDropright className='text-center justify-center items-center' />
                    </button>
                </div>
            </div>

        </>
    )
}

export default Home;