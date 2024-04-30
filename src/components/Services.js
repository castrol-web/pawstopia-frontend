import React, { useEffect } from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import AOS from "aos";
import 'aos/dist/aos.css';

function Services(props) {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div data-aos="zoom-in" className='text-center justify-center rounded-lg lg:my-0 my-5' style={{ backgroundImage: `url(${props.background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='justify-center text-center items-center py-4 rounded-lg' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                {/* icon */}
                <div className='mx-auto w-1/5'>
                    <p className='bg-slate-50 w-10 mx-auto p-3 rounded-full'>{props.icon}</p>
                </div>

                {/* title */}
                <h1 className='text-slate-50'>{props.tittle}</h1>
                {/* paragraph */}
                <p className='text-slate-400'>{props.description}</p>
                {/* button */}
                <button
                    className="mt-5 flex items-center justify-center mx-auto mb-6 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Learn More <IoMdArrowDropright />
                </button>
            </div>
        </div>
    )
}

export default Services