import React, { useState, useEffect } from 'react';
import logo from '../static/img/img1.png';

import Company from '../elements/Navbar/CompanyElement';
import Services from '../elements/Navbar/ServicesElement';

import IndustriesElement from '../elements/Navbar/IndustriesElement';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50); // Set threshold for scroll distance
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <header
            className={`w-full top-0 fixed  lg:px-24 py-4 transition-colors duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'
                }`}
        >
            <nav>
                <div className="lg:flex items-center justify-between">
                    <div className="flex items-center justify-around space-x-2">
                        <a className="flex justify-center items-center contrast-125" href="/">
                            <img alt="logo" width="50" height="50" decoding="async" data-nimg="1" style={{ color: 'transparent' }} src={logo} />
                        </a>
                    </div>
                    <div className="lg:bg-transparent bg-black text-gray-800">
                        <ul className="lg:flex lg:space-x-1 items-center text-center font-sans font-bold contrast-100 text-white py-6 lg:py-0 mt-2 hidden">
                        <li className="relative flex justify-center w-[20%] hover:border-b-4 border-lime-400 h-full items-center py-2 lg:py-0 border-spacing-4 group">
                                <a className="py-2 px-4 text-2xl lg:text-[17px] hover:text-lime-300 contrast-100" href="/">
                                    Home
                                </a>
                            </li>
                            <Services />

                            
                            <IndustriesElement />
                            <Company />
                            <li className="relative flex justify-center w-[20%] hover:border-b-4 border-lime-400 h-full items-center py-2 lg:py-0 border-spacing-4 group">
                                <a className="py-2 px-4 text-2xl lg:text-[17px] hover:text-lime-300 contrast-100" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
