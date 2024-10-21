import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';


import { teamMembers } from '../domain/constants/TeamMember';


const OurTeam = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8  ">
      <h2 className="text-3xl text-center font-extrabold text-blue-400 underline mb-4">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className=" w-full h-72 group perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style preserve-3d group-hover:rotate-y-180">
              {/* Front Side (Image) */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full shadow-md"
                />
              </div>
              {/* Back Side (Details) */}
              <div className="absolute inset-0 bg-white rounded shadow-md p-4 transform rotate-y-180 backface-hidden flex flex-col justify-center items-center text-center">
                <h3 className="text-lg text-blue-400 hover:text-lime-400 font-bold mb-2">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-gray-600 mb-2">
                  {member.title}
                </p>

                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                </a>
                <AiFillLinkedin size={24} />
                <a
                  href={member.Facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                ></a>
                <AiFillFacebook size={24} />
                <a
                  href={member.Instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex"
                ></a>
                <AiFillInstagram size={24} />


              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;