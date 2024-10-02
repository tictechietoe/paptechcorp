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
import itcLogo from '../assets/companies/itcLogo.jpg';
import jkPaperLogo from '../assets/companies/jkPaperLogo.jpg';
import centuryLogo from '../assets/companies/centuryLogo.jpg';
import cmpcLogo from '../assets/companies/cmpcLogo.jpg';
import appLogo from '../assets/companies/appLogo.jpg';

const Dealers = () => {

  const partnershipData = [
    {
      image: jkPaperLogo,
      name: <>
        <div>JK PAPER LTD</div>
        <div>INDUSTRIES LIMITED</div>
        <div>Odhisa [ India ]</div>
        <img alt="india flag logo" width="35px" className="mt-1 border-2 border-black" src={ indiaLogo } />
      </>,
      alternative: 'jk paper limited industries limited logo',
    },
    {
      image: itcLogo,
      name: <>
        <div>ITC</div>
        <div>PVT LTD COMPANY</div>
        <div>Telangana [ India ]</div>
        <img alt="india flag logo" width="35px" className="mt-1 border-2 border-black" src={ indiaLogo } />
      </>,
      alternative: 'itc pvt ltd company logo',
    },
    {
      image: centuryLogo,
      name: <>
        <div>CENTURY PULP & PAPER</div>
        <div>PRODUCTS COMPANY</div>
        <div>Andhra Pradesh [ India ]</div>
        <img alt="india flag logo" width="35px" className="mt-1 border-2 border-black" src={ indiaLogo } />
      </>,
      alternative: 'ccentury pulp and paper products company logo',
    },
    {
      image: appLogo,
      name: <>
        <div>ASIA PULP & PAPER COMPANY</div>
        <div>SINAR MAS GROUP*</div>
        <div>Jakarta [ Indonesia ]</div>
        <img allt="indonesia flag logo" width="35px" className="mt-1 border-2 border-black" src={ indonesiaLogo } />
      </>,
      alternative: 'asia pulp and paper company logo',
    },
    {
      image: cmpcLogo,
      name: <>
        <div>CMPC</div>
        <div>PULP & PAPER COMPANY*</div>
        <div>Santiago [ Chile ]</div>
        <img alt="chile flag logo" width="35px" className="mt-1 border-2 border-black" src={ chileLogo } />
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
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-16 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center mb-5">
          <div className="text-3xl font-bold mb-5">
            OUR STRATEGIC PARTNERSHIPS
          </div>
          <div className="text-xl">
            ( Imported and Local FBB / SBS / C2S / Bible Paper )
          </div>
        </div>
        <div className="flex justify-between">
          {
            _.map(partnershipData, partner => {
              return (
                <div className="flex flex-col items-center">
                  <img alt={ partner.alternative } width="300px" className="p-10 hover:p-2" src={ partner.image } />
                  <div className="text-csutom-primary text-lg font-bold flex flex-col items-center">{ partner.name } </div>
                </div>
              );
            })
          }
        </div>
        <div className="flex mt-5 justify-end">* - Global companies</div>
      </div>
      <div className="flex flex-col p-16 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center mb-5">
          <div className="text-3xl font-bold mb-5">
            OUR AUTHORIZED DEALERS
          </div>
          <div className="text-xl">
            ( for Greyback / Whiteback )
          </div>
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
  );
};

export default Dealers;
