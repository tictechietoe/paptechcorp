import React from 'react';
import _ from 'lodash';

import Quote from '../components/Quote.jsx';
import { FaTruckLoading } from "react-icons/fa";


const Success = () => {

  const successData = [
    {
      title: 'QUALITY',
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
    {
      title: 'TRANSPARENCY',
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
    {
      title: 'VELOCITY',
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
    {
      title: 'COST',
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
    {
      title: 'RELATIONS',
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    }
  ];

  return (
    <div className="flex flex-col p-10 bg-custom-back">
      <div className="flex justify-center text-3xl font-bold text-custom-secondary">
        SECRET INGRIDIENTS OF OUR SERVICE
      </div>
      <Quote
        icon={ <FaTruckLoading size={ 75 } /> }
        iconColor="white"
        message="Service is not a department, it's an attitude that echoes through every aspect of business"
      />
      <div className="grid grid-cols-3">
        {
          _.map(successData, success => {
            return (
              <div className="flex flex-col items-center m-10 p-5 shadow-md shadow-custom-secondary hover:shadow-xl hover:shadow-custom-secondary hover:border-t-4 hover:border-white p-2">
                <div className="text-custom-secondary p-2">{ success.icon }</div>
                <div className="text-white font-bold text-xl p-2 hover:text-custom-pastel-blue">{ success.title }</div>
                <div className="text-gray-400">{ success.description }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Success;