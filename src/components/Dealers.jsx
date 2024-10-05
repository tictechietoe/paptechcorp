// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';

import nrAgarwalLogo from '../assets/companies/nrAgarwalLogo.jpg';
import sabarmatiLogo from '../assets/companies/sabarmatiLogo.jpg';
import sudarshanLogo from '../assets/companies/sudarshanLogo.jpg';
import threeMLogo from '../assets/companies/threeMLogo.jpg';
import tirthakPaperLogo from '../assets/companies/tirthakPaperLogo.jpg';
import chileLogo from '../assets/companies/chileLogo.jpg';
import indonesiaLogo from '../assets/companies/indonesiaLogo.jpg';
import indiaLogo from '../assets/companies/indiaLogo.jpg';
import jkPaperLogo from '../assets/companies/jkPaperLogo.jpg';
import cmpcLogo from '../assets/companies/cmpcLogo.jpg';
import appLogo from '../assets/companies/appLogo.jpg';

const Dealers = () => {

  const partnershipData = [
    {
      image: jkPaperLogo,
      name: <>
        <div>JK PAPER LTD</div>
        <div>INDUSTRIES LIMITED (LOCAL)</div>
        <div className="flex">
          <div className="mx-5">Odhisa [ India ]</div>
          <img alt="india flag logo" width="35px" className="mt-1 border-2 border-black" src={ indiaLogo } />
        </div>
      </>,
      alternative: 'jk paper limited industries limited logo',
    },
    {
      image: cmpcLogo,
      name: <>
        <div>CMPC PULP & PAPER</div>
        <div>COMPANY (IMPORTED)</div>
        <div className="flex">
          <div className="mx-5">Santiago [ Chile ]</div>
          <img alt="india flag logo" width="35px" className="mt-1 border-2 border-black" src={ chileLogo } />
        </div>
      </>,
      alternative: 'cmpc pulp and paper company logo',
    }
  ];

  const dealershipData = [
    {
      image: nrAgarwalLogo,
      name: <>
        <div>N R AGARWAL</div>
        <div>INDUSTRIES LIMITED</div>
      </>,
      alternative: 'nr agarwal industires limited logo',
    },
    {
      image: threeMLogo,
      name: <>
        <div>THREE M PAPER</div>
        <div>BOARDS LIMITED</div>
      </>,
      alternative: 'three m boards limited logo',
    },
    {
      image: tirthakPaperLogo,
      name: <>
        <div>TIRTHAK PAPER MILL</div>
        <div>PRIVATE LIMITED</div>
      </>,
      alternative: 'tirthak paper mill private limited logo',
    },
    {
      image: sabarmatiLogo,
      name: <>
        <div>SABARMATI</div>
        <div>PAPERS.COM</div>
      </>,
      alternative: 'sabarmati papers.com logo',
    },
    {
      image: sudarshanLogo,
      name: <>
        <div>SUDARSHAN</div>
        <div>PAPER & PRODUCTS</div>
      </>,
      alternative: 'sudarshan paper and products logo',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-16 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center mb-5">
          <div className="text-3xl font-bold mb-5">
            OUR AUTHORIZED DEALERS
          </div>
          <div className="p-5 flex flex-col items-center">
            <div className="text-xl mb-5">
              ( for FBB / SBS / C2S / Bible Paper )
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <img alt="asia pulp and paper company logo" width="300px" className="p-10 mx-5 hover:p-8" src={ appLogo } />
                <div className="text-csutom-primary text-lg font-bold flex flex-col items-center">
                  <div>ASIA PULP & PAPER COMPANY</div>
                  <div>SINAR MAS GROUP (IMPORTED)</div>
                  <div className="flex">
                    <div className="mx-5">Jakarta [ Indonesia ]</div>
                    <img alt="indonesia flag logo" width="35px" className="mt-1 border-2 border-black" src={ indonesiaLogo } />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 flex flex-col items-center border-t-2 border-dashed">
            <div className="text-xl mb-5">
              ( for Greyback / Whiteback )
            </div>
            <div className="flex justify-between">
              {
                _.map(dealershipData, dealer => {
                  return (
                    <div className="flex flex-col items-center">
                      <img alt={ dealer.alternative } width="300px" className="p-10 hover:p-2" src={ dealer.image } />
                      <div className="text-csutom-primary text-lg font-bold flex flex-col items-center">{ dealer.name } </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-16 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center mb-5">
          <div className="text-3xl font-bold mb-5">
            OUR STRATEGIC PARTNERSHIPS
          </div>
          <div className="text-xl">
            ( Imported and Local FBB / SBS / C2S / Bible Paper )
          </div>
        </div>
        <div className="flex justify-around">
          {
            _.map(partnershipData, partner => {
              return (
                <div className="flex items-center">
                  <img alt={ partner.alternative } width="150px" className="p-2 hover:p-0" src={ partner.image } />
                  <div className="text-csutom-primary text-lg font-bold flex flex-col items-center text-center">{ partner.name } </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default Dealers;
