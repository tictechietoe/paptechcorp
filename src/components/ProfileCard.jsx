import React, { useState } from 'react';
import _ from 'lodash';
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ProfileCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);

  const {
    image,
    designation = '',
    name = '',
    email = '',
    phone = '',
  } = data;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div 
        className="relative"
        onMouseEnter={ () => setIsHovered(true) }
        onMouseLeave={ () => setIsHovered(false) }
      >
        { image }
        <div 
          className={ `absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-white transition-transform duration-300 ease-in-out ${ isHovered ? 'translate-y-0' : '-translate-y-full' }` }
        >
          <p className="text-lg my-2 font-medium">{ email }</p>
          <p className="text-lg my-2 font-medium">+91 { phone }</p>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <button className="p-3 hover:bg-gray-300 bg-gray-200 rounded-full shadow-elevation-lg">
            <div>
              <a
                href={ `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}` }
                target="_blank"
                rel="noreferrer"
              >
                <MdEmail size={ 25 } />
              </a>
            </div>
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-elevation-lg">
            <div><a href={ `tel:${phone}` }><FaPhoneAlt size={ 25 } /></a></div>
          </button>
        </div>
        <h2 className="text-xl mt-2 text-custom-primary font-bold">{ _.upperCase(name) }</h2>
        <p className="text-lg mt-2 text-custom-secondary font-semibold">{ _.upperCase(designation) }</p>
      </div>
    </div>
  );
};

export default ProfileCard;