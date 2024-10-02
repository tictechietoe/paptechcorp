import React from 'react';
import _ from 'lodash';

import CountingNumbers from '../components/CountingNumbers';
import { FaBusinessTime } from "react-icons/fa";
import {
  FaHandHoldingHand,
  FaPersonRays,
} from "react-icons/fa6";
import {
  PiToiletPaperFill,
  PiWarehouseFill
} from "react-icons/pi";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoCut } from "react-icons/io5";
import { GrUserWorker } from "react-icons/gr";
import { SiCloudflareworkers } from "react-icons/si";


const Badges = () => {
  const duration = 3000; // 5 seconds

  const badgesData = [
    {
      number: 10,
      thousand: false,
      description: 'Years of Experience',
      icon: <FaBusinessTime size={ 150 } />
    },
    {
      number: 300,
      thousand: false,
      description: 'Traders and Customers Served Globally',
      icon: <FaHandHoldingHand size={ 150 } />
    },
    {
      number: 200,
      thousand: true,
      description: 'Amount of Paper Supplied (in Tonnes)',
      icon: <PiToiletPaperFill size={ 150 } />
    },
    {
      number: 13,
      thousand: false,
      description: 'Strategic Partners and Associated Dealers',
      icon: <RiBuilding2Fill size={ 150 } />
    },
  ];

  const strengthData = [
    {
      number: 10,
      metric: 'MT/Day',
      description: 'Sheeting Capacity',
      icon: <SiCloudflareworkers size={ 75 } />
    },
    {
      number: 300,
      metric: 'MT/Day',
      description: 'Slitting Capacity',
      icon: <IoCut size={ 75 } />
    },
    {
      number: 5,
      metric: '',
      description: 'Total Team Members',
      icon: <FaPersonRays size={ 75 } />
    },
    {
      number: 200,
      metric: '',
      description: 'Total Warehouse workers',
      icon: <GrUserWorker size={ 75 } />
    },
    {
      number: 50000,
      metric: 'Sqft',
      description: 'Total Warehousing Facility',
      icon: <PiWarehouseFill size={ 75 } />
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-4 p-10 bg-custom-nav-color shadow-lg">
        {
          _.map(badgesData, badge => {
            return (
              <div className="p-5 flex flex-col items-center">
                <div className="text-custom-secondary p-10 m-2 shadow-lg rounded-full border-2">{ badge.icon }</div>
                <div className="flex text-custom-primary items-center text-3xl font-bold">
                  <span><CountingNumbers targetNumber={ badge.number } duration={ duration } /></span>
                  <span>{ badge.thousand ? 'K' : ''}+</span>
                </div>
                <div className="text-custom-back text-center text-pretty">{ badge.description }</div>
              </div>
            );
          })
        }
      </div>
      <div className="flex flex-col p-10 m-10 bg-custom-back rounded-3xl shadow-elevation">
        <div className="flex justify-center text-3xl font-bold text-custom-secondary">OUR DAILY STRENGTH</div>
        <div className="grid grid-cols-5">
          {
            _.map(strengthData, strength => {
              return (
                <div className="p-10 flex flex-col items-center">
                  <div className="text-white h-16 text-center text-pretty">{ _.upperCase(strength.description) }</div>
                  <div className="text-custom-secondary m-2">{ strength.icon }</div>
                  <div className="flex text-custom-pastel-blue items-center text-3xl font-medium">
                    <span className="mr-2"><CountingNumbers targetNumber={ strength.number } duration={ duration } /></span>
                    <span>{ strength.metric }</span>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Badges;