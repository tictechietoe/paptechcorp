// src/components/Navbar.js
import React, { useState } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { RiTeamFill } from "react-icons/ri";
import { FaHome, FaWpforms, FaBars } from "react-icons/fa";
import { PiPhoneCallFill } from "react-icons/pi";
import { MdPrivacyTip } from "react-icons/md";
import { IoDocumentTextSharp } from "react-icons/io5";


import Logo from './Logo';


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarContent = [
    {
      title: 'HOME',
      to: '/',
      icon: <FaHome size={20} />
    },
    {
      title: 'ABOUT US',
      to: '/aboutus',
      icon: <FaWpforms size={20} />
    },
    {
      title: 'TEAM',
      to: '/team',
      icon: <RiTeamFill size={20} />
    },
    {
      title: 'CONTACT US',
      to: '/contact',
      icon: <PiPhoneCallFill size={20} />
    },
    {
      title: 'TERMS & CONDITIONS',
      to: '/terms_conditions',
      icon: <IoDocumentTextSharp size={20} />
    },
    {
      title: 'PRIVACY POLICY',
      to: '/privacy_policy',
      icon: <MdPrivacyTip size={20} />
    }
  ];

  const navItem = (content = {}) => {
    const {
      title = '',
      to: navigateUrl = '/',
      icon = <></>
    } = content;

    return (
      <button key={title} className="text-custom-secondary mx-2 rounded-sm transition delay-100 duration-100 ease-in-out hover:shadow-xl">
        <Link to={navigateUrl}>
          <div className="flex items-center p-1 hover:bg-custom-secondary hover:text-white">
            <div className="mx-1">{icon}</div>
            <div className="mx-1 hover:text-lg">{title}</div>
          </div>
        </Link>
      </button>
    );
  };

  return (
    <nav>
      <div className="flex items-center justify-between sticky top-0 z-30 bg-custom-nav-color drop-shadow-lg">
        <Logo />
        <div className="px-10 text-custom-secondary lg:hidden">
          <div
            className="hover:bg-custom-secondary hover:text-white p-1 curosr-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FaBars size={20} />
          </div>
        </div>
        <div className="hidden md:hidden lg:flex flex-col items-center">
          <div className="flex flex-1 font-medium text-sm flex-wrap">
            {
              _.map(navbarContent, content => navItem(content))
            }
          </div>
        </div>
      </div>
      {
        isMenuOpen &&
        <div className="my-5 grid md:grid-cols-2 sm:grid-cols-1 font-medium text-sm flex-wrap">
          {
            _.map(navbarContent, content => navItem(content))
          }
        </div>
      }
    </nav>
  );
};

export default Navbar;