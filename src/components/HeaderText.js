import React, { useEffect } from 'react';
import AOS from "aos"
import { useNavigate } from 'react-router-dom';
function HeaderText(props) {
    useEffect(() => {
        AOS.init()
    })
    const navigate = useNavigate();
    function navigateBook() {
        navigate("/booking");
    }
    return (
        <div className='mx-auto text-center justify-center items-center' style={{ backgroundImage: `url(${props.image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <div className='mx-auto text-center justify-center items-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} >
                <h1 className='text-3xl text-teal-500' data-aos="slide-down"><strong>{props.header}</strong></h1>
                <small className='text-center justify-center mx-6 text-white' data-aos="fade-in">{props.details}</small>
                <div className='mx-auto items-center justify-center text-center py-4' data-aos="slide-up">
                    <button
                        onClick={navigateBook}
                        className="mx-auto rounded-full bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        MAKE AN APPOINTMENT
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HeaderText