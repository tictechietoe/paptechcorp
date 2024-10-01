import React from 'react';
import _ from 'lodash';

import CountingNumbers from '../components/CountingNumbers';
import { FaTruckLoading } from "react-icons/fa";


const Badges = () => {
  const duration = 5000; // 5 seconds

  const badgesData = [
    {
      number: 50,
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
    {
      number: 50,
      description: 'description',
      icon: <FaTruckLoading size={ 100 } />
    },
  ];

  return (
    <div className="flex justify-center p-10 bg-custom-nav-color">
      {
        _.map(badgesData, badge => {
          return (
            <div className="px-10 flex flex-col items-center">
              <div className="text-custom-secondary">{ badge.icon }</div>
              <div className="flex text-custom-primary items-center text-3xl">
                <span><CountingNumbers targetNumber={ badge.number } duration={ duration } /></span>
                <span>K+</span>
              </div>
              <div className="text-custom-back">{ badge.description }</div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Badges;