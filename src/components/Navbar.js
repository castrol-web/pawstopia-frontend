import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import logo from "../images/logo.jpg";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const navRef = useRef();


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    function showServices() {
        setServicesOpen(!servicesOpen);
    }


    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                //close the menu
                setIsOpen(false);
                setServicesOpen(false);
            }

        }
        //event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);
        //remove listener when unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, []);

    //close menu when a link is clicked
    function closeMenu() {
        setIsOpen(false);
        setServicesOpen(false);
    }

    return (
        <nav className="bg-gray-800 py-3 fixed sm:fixed w-full z-50 top-0" ref={navRef}>
            <div className="mx-auto lg:flex justify-between items-center px-5">
                <div className='flex justify-between items-center text-center'>
                    <Link onClick={closeMenu} to="/" className="flex gap-2 items-center text-center text-white lg:text-2xl font-bold"><img className='w-5 h-5 rounded-full' src={logo} alt='pawstopia logo'></img>Pawstopia</Link>
                    <div className="lg:hidden text-gray-300 hover:text-white focus:outline-none px-6">
                        {isOpen ? <FaTimes onClick={toggleDropdown} /> : <RxHamburgerMenu onClick={toggleDropdown} />}
                    </div>
                </div>

                {/* Navbar Links */}
                <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="grid lg:block">
                        <Link onClick={closeMenu} to="/" className="text-gray-300 hover:text-white px-4 py-2">Home</Link>
                        <Link onClick={closeMenu} to="/contact" className="text-gray-300 hover:text-white px-4 py-2">Contact</Link>
                        <Link onClick={closeMenu} to="/booking" className="text-gray-300 hover:text-white px-4 py-2">Online booking</Link>
                        <div className="relative inline-block text-left">
                            <div className="text-gray-300 hover:text-white px-4 py-2 focus:outline-none flex items-center text-center gap-1" onClick={showServices}>
                                Services {servicesOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                            <div
                                className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${servicesOpen ? 'block' : 'hidden'}`}
                            >
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link onClick={closeMenu} to="/grooming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pet Grooming</Link>
                                    <Link onClick={closeMenu} to="/vaccination" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pet Vaccination</Link>
                                    <Link onClick={closeMenu} to="/deworming" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pet Deworming</Link>
                                    <Link onClick={closeMenu} to="/vetinary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Vetinary</Link>
                                    <Link onClick={closeMenu} to="/walking" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dog Walking</Link>
                                    <Link onClick={closeMenu} to="/pet-sitters" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pet Sitters</Link>
                                    <Link onClick={closeMenu} to="/dog-daycare" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Dog Daycare</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
