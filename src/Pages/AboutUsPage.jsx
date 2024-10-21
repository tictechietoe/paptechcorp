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
    <div className="flex flex-col responsive-padding items-center text-white border-2">
      <div className="text-custom-secondary mb-5">{ icon }</div>
      <div className="responsive-title font-bold text-custom-priamry mb-5">{ _.upperCase(title) }</div>
      <div className="text-align responsive-text">{ message }</div>
    </div>
  );
};

const AboutUsPage = () => {

  const qualities = [
    {
      icon: <FaAward className="responsive-icon" />,
      title: 'highest quality',
    },
    {
      icon: <FaTruckFast className="responsive-icon" />,
      title: 'faster delivery',
    },
    {
      icon: <PiTipJarBold className="responsive-icon" />,
      title: 'affordable pricing',
    },
    {
      icon: <AiFillProduct className="responsive-icon" />,
      title: 'variety of products',
    },
    {
      icon: <PiResizeFill className="responsive-icon" />,
      title: 'unlimeted sizes',
    },
    {
      icon: <AiOutlineSolution className="responsive-icon" />,
      title: 'customized solutions',
    },
    {
      icon: <AiOutlineAim className="responsive-icon" />,
      title: 'customer centric',
    },
    {
      icon: <TbHours24 className="responsive-icon" />,
      title: 'always available',
    },
    {
      icon: <VscWorkspaceTrusted className="responsive-icon" />,
      title: 'trusted and expericenced',
    },
    {
      icon: <LiaHandshakeSolid className="responsive-icon" />,
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 place-items-center responsive-margin responsive-padding rounded-xl bg-custom-pastel-blue">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex justify-start">
              <div className="rounded-2xl p-2 text-custom-back bg-custom-back-light">About Us</div>
            </div>
            <div className="responsive-title font-bold text-custom-back text-center">
              PAPTECH CORP PVT. LTD.
            </div>
            <div className="my-3 responsive-title font-medium text-white">
              Pap tech Sales Corporation and Prabhat paper mart have merged into Paptech Corp Pvt. Ltd. from FY 2024.
            </div>
          </div>
          <img className="col-span-1 md:col-span-1 lg:col-span-1" src={ warehouse } />
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex text-pretty responsive-text mt-10 text-white text-center">
            With over 10 years of experience, Paptech Corp PVT. LTD. is amongst the leading integrated paper trading houses from India. We cater to the requirement of customers in global markets with all grades of paper & paperboard such as Duplex Board, Fluting Medium & Test liner, Kraft Paper, Packaging Board, etc. We also cater to the customized requirements and offer bespoke solutions as per the customer’s needs. Our relentless focus on Quality, Velocity and Cost makes us the preferred partner to our buyers as well as suppliers alike.
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex justify-center responsive-text responsive-margin text-white">
            <ul className="list-disc ml-5">
              <li>If you are looking for the best quality paper, paperboard, delivered faster at the most competitive price, you are at the right place.</li>
              <li>Paptech Corp PVT LTD is a leading integrated trading house and exporter of high quality paper and paperboard from India.</li>
              <li>We have more than 2 decades of proven credibility in the paper industry and serve customers across the world.</li>
              <li>We trade in all grades of paper & paperboard such as Duplex Board, Fluting Medium & Test liner, Kraft Paper, Packaging Board, Newsprint, Printing Paper, Waste Paper etc.</li>
              <li>We also cater to the customized requirements and offer bespoke solutions as per the customer’s needs.</li>
              <li>Our relentless focus on Quality, Velocity and Cost makes us the preferred partner to our buyers as well as suppliers alike.</li>
            </ul>
          </div>
        </div>
        <div className="responsive-padding bg-custom-secondary responsive-margin rounded-2xl">
          <div className="responsive-title font-bold text-custom-back text-center mb-5">
            WHY CHOOSE US
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 responsive-gap">
            {
              _.map(qualities, quality => {
                return (
                  <div className="py-2 flex flex-col items-center text-white bg-custom-back hover:bg-custom-nav-color hover:text-custom-secondary rounded-2xl shadow-elevation-lg">
                    <div className="m-2">{ quality.icon }</div>
                    <div className="m-2 font-bold responsive-text text-center">{ _.upperCase(quality.title) }</div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="responsive-margin responsive-padding bg-custom-back roubnded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 place-items-center responsive-gap text-center text-pretty">
            <CardDiv
              title="vission"
              icon={ <FaEye className="responsive-icon" /> }
              message="We aspire to be recognized as the most prominent global brand in paper trade, catering to all the applications of our customers. We aim to grow sustainably and proactively deliver solutions in line with the changing global trends in paper requirements for printing and packaging. We also commit to contributing in the conservation of natural resources."
            />
            <CardDiv
              title="mission"
              message="With a relentless focus on Quality, Velocity and Cost, serve global customers with the best-in-class products and services. Build and operate the most efficient sourcing and logistics process and infrastructure to deliver the best value for money to customers and become their most preferred partners for all kinds of requirements including the customized solutions."
              icon={ <GiPodiumWinner className="responsive-icon" /> }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;