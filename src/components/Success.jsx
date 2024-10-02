import React from 'react';
import _ from 'lodash';

import Quote from '../components/Quote.jsx';

import {
  FaTruckLoading,
  FaAward
} from "react-icons/fa";
import { PiCubeTransparentLight } from "react-icons/pi";
import { MdSpeed } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import {
  FaRegHandshake,
  FaDharmachakra
} from "react-icons/fa6";



const Success = () => {

  const successData = [
    {
      title: 'QUALITY',
      description: 'highest quality standards ensured at every stage of sourcing, storage, packaging, dispatch and customer service.',
      icon: <FaAward size={ 100 } />
    },
    {
      title: 'TRANSPARENCY',
      description: 'Transparency is the currency of our trust in business.',
      icon: <PiCubeTransparentLight size={ 100 } />
    },
    {
      title: 'VELOCITY',
      description: 'dedicated logistics team and close tie-ups with transport & shipping partners enable us to deliver your order faster.',
      icon: <MdSpeed size={ 100 } />
    },
    {
      title: 'COST',
      description: 'we provide cost effective solutions.',
      icon: <GiReceiveMoney size={ 100 } />
    },
    {
      title: 'RELATIONS',
      description: 'relations whith the customer are utmost important for us.',
      icon: <FaRegHandshake size={ 100 } />
    },
    {
      title: 'TECHNOLOGY',
      description: 'technologically drivern to make lives simpler and always accessible.',
      icon: <FaDharmachakra size={ 100 } />
    }
  ];

  return (
    <div className="flex flex-col p-10 bg-custom-back shadow-lg">
      <div className="flex justify-center text-3xl font-bold text-custom-secondary">
        SECRET INGRIDIENTS OF OUR SERVICE
      </div>
      <Quote
        icon={ <FaTruckLoading size={ 75 } /> }
        iconColor="white"
        textColor="custom-pastel-blue"
        message="Service is not a department, it's an attitude that echoes through every aspect of business"
      />
      <div className="grid grid-cols-3">
        {
          _.map(successData, success => {
            return (
              <div className="group relative flex flex-col items-center m-5 p-5 shadow-md shadow-custom-secondary">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-white to-custom-secondary bg-[length:0%_100%] bg-no-repeat group-hover:bg-[length:100%_100%] transition-all duration-[1500ms] ease-out"></div>
                <div className="text-custom-secondary p-2">{ success.icon }</div>
                <div className="text-white font-bold text-xl p-2 hover:text-custom-pastel-blue">{ success.title }</div>
                <div className="text-gray-400 text-wrap flex text-center">{ success.description }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Success;