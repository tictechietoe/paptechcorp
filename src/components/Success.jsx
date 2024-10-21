import React from 'react';
import _ from 'lodash';

import Quote from '../components/Quote.jsx';

import {
  FaAward
} from "react-icons/fa";
import { PiCubeTransparentLight } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import {
  FaRegHandshake,
  FaDharmachakra,
  FaTruckFast
} from "react-icons/fa6";

const Success = () => {

  const successData = [
    {
      title: 'QUALITY',
      description: 'highest quality standards ensured at every stage of sourcing, storage, packaging, dispatch and customer service.',
      icon: <FaAward className="responsive-icon" />
    },
    {
      title: 'VELOCITY',
      description: 'dedicated logistics team and close tie-ups with transport & shipping partners enable us to deliver your order faster.',
      icon: <MdSpeed className="responsive-icon" />
    },
    {
      title: 'TRANSPARENCY',
      description: 'Transparency is the currency of our trust in business.',
      icon: <PiCubeTransparentLight className="responsive-icon" />
    },
    {
      title: 'COST',
      description: 'we provide cost effective solutions.',
      icon: <GiReceiveMoney className="responsive-icon" />
    },
    {
      title: 'RELATIONS',
      description: 'relations whith the customer are utmost important for us.',
      icon: <FaRegHandshake className="responsive-icon" />
    },
    {
      title: 'TECHNOLOGY',
      description: 'technologically drivern to make lives simpler and always accessible.',
      icon: <FaDharmachakra className="responsive-icon" />
    }
  ];

  return (
    <div className="flex flex-col responsive-padding bg-custom-back shadow-lg py-10">
      <div className="flex justify-center responsive-title font-bold text-custom-secondary">
        SECRET INGRIDIENTS OF OUR SERVICE
      </div>
      <Quote
        icon={ <FaTruckFast className="responsive-icon" /> }
        iconColor="white"
        textColor="custom-pastel-blue"
        message="Service is not a department, it's an attitude that echoes through every aspect of business"
      />
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 responsive-gap">
        {
          _.map(successData, success => {
            return (
              <div className="group relative flex flex-col items-center mt-5 p-2 shadow-elevation-md shadow-custom-secondary">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-white to-custom-secondary bg-[length:0%_100%] bg-no-repeat group-hover:bg-[length:100%_100%] transition-all duration-[700ms] ease-out"></div>
                <div className="text-custom-secondary p-2">{ success.icon }</div>
                <div className="text-white font-bold responsive-label p-2">{ success.title }</div>
                <div className="text-gray-400 responsive-text text-wrap flex text-center p-2">{ success.description }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Success;