// src/components/OurServices.js
import React from 'react';
import _ from 'lodash';

import nrAgarwalLogo from '../assets/companies/nrAgarwalLogo.jpg';
import sabarmatiLogo from '../assets/companies/sabarmatiLogo.jpg';
import sudarshanLogo from '../assets/companies/sudarshanLogo.jpg';
import threeMLogo from '../assets/companies/threeMLogo.jpg';
import tirthakPaperLogo from '../assets/companies/tirthakPaperLogo.jpg';
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
      </>,
      alternative: 'jk paper limited industries limited logo',
      width: '150px',
    },
    {
      image: cmpcLogo,
      name: <>
        <div>CMPC PULP & PAPER</div>
        <div>COMPANY (IMPORTED)</div>
      </>,
      alternative: 'cmpc pulp and paper company logo',
      width: '200px',
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
      <div className="flex flex-col p-8 md:p-10 lg:p-12 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center responsive-padding responsive-label-margin">
          <div className="responsive-title font-bold">
            AUTHORIZED DEALERS FOR
          </div>
          <div className="flex flex-col items-center responsive-padding">
            <div className="responsive-label lg:text-xl responsive-label-margin">
              ( for FBB / SBS / C2S / Bible Paper )
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 responsive-gap place-items-center">
              <img alt="asia pulp and paper company logo" className="p-10 mx-5 hover:p-8 w-48 md:w-60 lg:w-72" src={ appLogo } />
              <div className="text-custom-primary responsive-label font-bold">
                <div>ASIA PULP & PAPER COMPANY</div>
                <div>SINAR MAS GROUP (IMPORTED)</div>
              </div>
            </div>
          </div>
          <div className="responsive-padding flex flex-col items-center border-t-2 border-dashed">
            <div className="responsive-label lg:text-xl responsive-label-margin">
              ( for Greyback / Whiteback )
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 responsive-gap place-items-center">
              {
                _.map(dealershipData, dealer => {
                  return (
                    <div className="flex flex-col items-center">
                      <img alt={ dealer.alternative } width="250px" className="responsive-padding hover:p-2" src={ dealer.image } />
                      <div className="text-custom-primary responsive-label font-bold text-center">{ dealer.name } </div>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-16 border-b border-dashed border-t border-custom-primary">
        <div className="flex flex-col text-custom-back items-center responsive-label-margin">
          <div className="responsive-title font-bold responsive-label-margin">
            OUR STRATEGIC PARTNERSHIPS
          </div>
          <div className="responsive-label">
            ( Imported and Local FBB / SBS )
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 responsive-gap place-items-center">
          {
            _.map(partnershipData, partner => {
              return (
                <div className="flex items-center">
                  <img alt={ partner.alternative } width={ partner.width } className="p-2 hover:p-0" src={ partner.image } />
                  <div className="text-custom-primary responsive-label font-bold flex flex-col items-center text-center">{ partner.name } </div>
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
