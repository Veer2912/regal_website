import React from 'react';
import logo from '../static/img/img1.png'
import { AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { AiFillMail } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillGooglePlusSquare } from 'react-icons/ai';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 body-font font-sans h-full">
      <div className="container px-5 py-12 mx-auto flex flex-wrap md:flex-row flex-col items-center ">
        <div className="flex flex-col md:w-1/2 lg:w-1/3 md:items-start items-center px-4 md:px-0">
          <h2 className="title-font font-sans font-medium text-white ">
            <img src={logo} className='w-16 h-16' alt="" />Regal Outsource(India) PVT. LTD.
          </h2>
          <br />
          <p className="mt-2 text-sm text-gray-400">


            <span className="text-gray-400 font-sans"><AiFillHome /></span>


            F-39 B, MEWAR INDUSTRIAL AREA EXTN.
            <br />
            ROAD NO. 12, MADRI, UDAIPUR-313003,
            <br />
            RAJASTHAN, IN
            <br />

          </p>
          <p className="mt-2 text-sm text-gray-400 font-sans">
            <br />
            <AiFillPhone />
            +91 8829918888
            <br />
            +91 294 2980888
            <br />
            <br />
            <AiFillMail />

            admin@regaloutsourceindia.com
          </p>
        </div>
        <div className="flex flex-col md:w-1/2 lg:w-1/3 md:items-start items-center px-4 md:px-0 ">
          <h2 className="title-font font-medium text-white font-sans">
            Resources
          </h2>
          <nav className="mt-5 flex flex-col list-none">
            <li>
              <a href="#" className="text-gray-400 hover:text-white font-sans">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray- 400 hover:text-white font-sans">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white font-sans">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white font-sans">
                About Us
              </a>
            </li>
          </nav>
          
          

          <nav className="mt-5  grid grid-cols-4 overflow-hidden list-none  ">
            <li>
              <a href="#" className=" text-gray-400 hover:text-white ">
                <AiFillFacebook className='w-6 h-6' />
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                <AiFillInstagram className='w-6 h-6 ml-1' />
              </a>
            </li>
            <li>
              <a href="http://in.linkedin.com/pub/regal-outsource-india-private-limited/96/8b1/a80" className="text-gray-400 hover:text-white">
                <AiFillLinkedin className='w-6 h-6 ml-1' />
              </a>
            </li>
            <li>
              <a href="https://plus.google.com/108033648564806572456/about" className=" text-gray-400 hover:text-white ">
                <AiFillGooglePlusSquare className='w-6 h-6 ml-1' />
              </a>
            </li>
          </nav>
          <br />
          
          
          
          
        </div>
        <div className="footer ">
        <h2 className="title-font font-medium text-white font-sans mb-10">
            Subscribe to Newsletter
          </h2>
            <p className='mb-5'>Subscribe our newsletter to receive updates and exclusive offers.</p>
            <form action="#" method='POST' className=''>
              <input type="email" placeholder="Enter your email" required className=' w-60 px-2 py-2 h-8 border-none '/>
              
                <button  type="submit" className='justify-center items-center h-8 px-2  bg-gradient-to-l from-lime-700 via-lime-500 to-lime-700 text-white'>SEND</button>
            </form>
            <br/>
            <br/>
            <p><a href="#">Privacy Policy</a></p>
            
          </div>

      </div>
      <div className="bg-gray-900 bg-opacity-50 w-full mt-4 md:flex md:items-center text-center md:justify-between">
            <p className="text-sm text-gray-400 w-full text-center">
              ©2024 Regal Export Era LLP. All rights reserved.
            </p>
          </div>

    </footer>
  );
};

export default Footer;