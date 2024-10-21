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
import { FaTruck } from "react-icons/fa";
import { GrUserWorker } from "react-icons/gr";
import { SiCloudflareworkers } from "react-icons/si";


const Badges = () => {
  const duration = 3000; // 5 seconds

  const badgesData = [
    {
      number: 10,
      thousand: false,
      description: 'Years of Experience',
      icon: <FaBusinessTime className="responsive-icon" />
    },
    {
      number: 300,
      thousand: false,
      description: 'Traders and Customers Served Globally',
      icon: <FaHandHoldingHand className="responsive-icon" />
    },
    {
      number: 200,
      thousand: true,
      description: 'Amount of Paper Supplied (in Tonnes)',
      icon: <PiToiletPaperFill className="responsive-icon" />
    },
    {
      number: 13,
      thousand: false,
      description: 'Strategic Partners and Associated Dealers',
      icon: <RiBuilding2Fill className="responsive-icon" />
    },
  ];

  const strengthData = [
    {
      number: 100,
      metric: 'MT/Day',
      description: 'Sheeting Capacity',
      icon: <SiCloudflareworkers className="responsive-icon" />
    },
    {
      number: 50,
      metric: '',
      description: 'Total Warehouse workers',
      icon: <GrUserWorker className="responsive-icon" />
    },
    {
      number: 80000,
      metric: 'Sqft',
      description: 'Total Warehousing Facility',
      icon: <PiWarehouseFill className="responsive-icon" />
    },
    {
      number: 10,
      metric: '',
      description: 'Delivey Trucks',
      icon: <FaTruck className="responsive-icon" />
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 responsive-padding bg-custom-nav-color shadow-lg">
        {
          _.map(badgesData, badge => {
            return (
              <div className="p-5 flex flex-col items-center">
                <div className="text-custom-secondary responsive-padding m-2 shadow-lg hover:border-custom-secondary rounded-full border-4">
                  { badge.icon }
                </div>
                <div className="flex text-custom-primary items-center text-3xl font-bold">
                  <span><CountingNumbers targetNumber={ badge.number } duration={ duration } /></span>
                  <span>{ badge.thousand ? 'K' : ''}+</span>
                </div>
                <div className="text-custom-back responsive-text text-center text-pretty">{ badge.description }</div>
              </div>
            );
          })
        }
      </div>
      <div className="flex flex-col p-5 md:p-7 lg:p-10 responsive-margin bg-custom-back rounded-3xl shadow-elevation-xl">
        <div className="flex justify-center responsive-title font-bold text-custom-secondary">OUR DAILY STRENGTH</div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {
            _.map(strengthData, strength => {
              return (
                <div className="responsive-padding grid grid-rows-3 place-items-center">
                  <div className="text-white responsive-text text-center text-pretty">{ _.upperCase(strength.description) }</div>
                  <div className="text-custom-secondary m-2">{ strength.icon }</div>
                  <div className="flex text-custom-pastel-blue items-center font-medium text-base md:text-xl lg:text-3xl">
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