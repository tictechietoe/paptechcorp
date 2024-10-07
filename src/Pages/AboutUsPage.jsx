// src/components/AboutUs.js
import React, { useRef } from 'react';
import _ from 'lodash';
import BannerImage from '../components/BannerImage';
import aboutus from '../assets/images/aboutus.jpg';
import warehouse from '../assets/images/warehouse.jpg';
import { FaEye, FaAward } from 'react-icons/fa';
import { FaTruckFast } from "react-icons/fa6";
import { PiTipJarBold } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { PiResizeFill } from "react-icons/pi";
import { AiOutlineSolution } from "react-icons/ai";
import { AiOutlineAim } from "react-icons/ai";
import { TbHours24 } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { LiaHandshakeSolid } from "react-icons/lia";
import { GiPodiumWinner } from "react-icons/gi";


const CardDiv = ({ message, title, icon }) => {
  return (
    <div className="flex flex-col p-10 items-center text-white border-2">
      <div className="text-custom-secondary mb-5">{ icon }</div>
      <div className="text-xl font-bold text-custom-priamry mb-5">{ _.upperCase(title) }</div>
      <div className="text-align text-lg">{ message }</div>
    </div>
  );
};

const AboutUsPage = () => {

  const sectionRefs = {
    'who': useRef(null),
    'how': useRef(null),
    'what': useRef(null),
  };

  const qualities = [
    {
      icon: <FaAward size={ 50 } />,
      title: 'highest quality',
    },
    {
      icon: <FaTruckFast size={ 50 } />,
      title: 'faster delivery',
    },
    {
      icon: <PiTipJarBold size={ 50 } />,
      title: 'affordable pricing',
    },
    {
      icon: <AiFillProduct size={ 50 } />,
      title: 'variety of products',
    },
    {
      icon: <PiResizeFill size={ 50 } />,
      title: 'unlimeted sizes',
    },
    {
      icon: <AiOutlineSolution size={ 50 } />,
      title: 'customized solutions',
    },
    {
      icon: <AiOutlineAim size={ 50 } />,
      title: 'customer centric',
    },
    {
      icon: <TbHours24 size={ 50 } />,
      title: 'always available',
    },
    {
      icon: <VscWorkspaceTrusted size={ 50 } />,
      title: 'trusted and expericenced',
    },
    {
      icon: <LiaHandshakeSolid size={ 50 } />,
      title: 'socially responsible',
    },
  ];

  return (
    <div>
      <BannerImage
        image={ aboutus }
        title="ABOUT US"
        fromText="Home"
        fromLink="/"
        toText="About Us"
      />
      <div>
        <div className="m-10 p-10 rounded-xl bg-custom-pastel-blue">
          <div className="grid grid-cols-2">
            <img src={ warehouse } />
            <div className="flex flex-col items-center">
              <div>
                <div className="flex justify-start">
                  <div className="rounded-2xl p-2 text-custom-back bg-custom-back-light">About Us</div>
                </div>
                <div className="text-3xl font-bold text-custom-back text-center">
                  PAPTECH CORP PVT. LTD.
                </div>
              </div>
              <div className="flex text-pretty text-xl mt-10 text-white">
                With over 20 years of experience, Jagdamba Paper Corporation (JPC) is amongst the leading integrated paper trading houses from India. We cater to the requirement of customers in global markets with all grades of paper & paperboard such as Duplex Board, Fluting Medium & Test liner, Kraft Paper, Packaging Board, Newsprint, Printing Paper, Waste Paper etc. We also cater to the customized requirements and offer bespoke solutions as per the customer’s needs. Our relentless focus on Quality, Velocity and Cost makes us the preferred partner to our buyers as well as suppliers alike.
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-custom-secondary m-10 rounded-2xl">
          <div className="text-3xl font-bold text-custom-back text-center mb-5">
            WHY CHOOSE US
          </div>
          <div className="grid grid-cols-5 gap-8">
            {
              _.map(qualities, quality => {
                return (
                  <div className="py-5 flex flex-col items-center text-white bg-custom-back hover:bg-custom-nav-color hover:text-custom-secondary rounded-2xl shadow-elevation-lg">
                    <div className="m-2">{ quality.icon }</div>
                    <div className="m-2 font-bold">{ _.upperCase(quality.title) }</div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="p-10 m-10 bg-custom-back roubnded-2xl">
          <div className="grid grid-cols-2 gap-8">
            <CardDiv
              title="vission"
              icon={ <FaEye size={ 75 } /> }
              message="We aspire to be recognized as the most prominent global brand in paper trade, catering to all the applications of our customers. We aim to grow sustainably and proactively deliver solutions in line with the changing global trends in paper requirements for printing and packaging. We also commit to contributing in the conservation of natural resources."
            />
            <CardDiv
              title="mission"
              message="With a relentless focus on Quality, Velocity and Cost, serve global customers with the best-in-class products and services. Build and operate the most efficient sourcing and logistics process and infrastructure to deliver the best value for money to customers and become their most preferred partners for all kinds of requirements including the customized solutions."
              icon={ <GiPodiumWinner size={ 75 } /> }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;