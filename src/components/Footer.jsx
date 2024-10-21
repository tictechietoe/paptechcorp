// src/components/Footer.js
import React from 'react';
import _ from 'lodash';
import { CgWebsite } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

import { RiHomeOfficeFill } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";

import nrAgarwalLogo from '../assets/companies/nrAgarwalLogo.jpg';
import sabarmatiLogo from '../assets/companies/sabarmatiLogo.jpg';
import sudarshanLogo from '../assets/companies/sudarshanLogo.jpg';
import threeMLogo from '../assets/companies/threeMLogo.jpg';
import tirthakPaperLogo from '../assets/companies/tirthakPaperLogo.jpg';

const Footer = () => {
  const navigate = useNavigate();

  const handleReadMoreDisclaimerClick = () => {
    navigate(`/disclaimer`);
  };

  const dealershipCompanies = [
    {
      logo: nrAgarwalLogo,
      name: <>
        <div>N R AGARWAL</div>
        <div>INDUSTRIES LIMITED</div>
      </>,
    },
    {
      logo: sabarmatiLogo,
      name: <>
        <div>SABARMATI</div>
        <div>PAPERS.COM</div>
      </>,
    },
    {
      logo: sudarshanLogo,
      name: <>
        <div>SUDARSHAN</div>
        <div>PAPER & PRODUCTS</div>
      </>,
    },
    {
      logo: threeMLogo,
      name: <>
        <div>THREE M PAPER</div>
        <div>BOARDS LIMITED</div>
      </>,
    },
    {
      logo: tirthakPaperLogo,
      name: <>
        <div>TIRTHAK PAPER MILL</div>
        <div>PRIVATE LIMITED</div>
      </>,
    }
  ];

  const disclaimerSection = <>
    <div className="pl-5 md:pl-3 lg:pl-2 responsive-text">
      <p>
        Your access to this website constitutes your agreement to be bound by all terms and conditions listed herein below.
      </p>
      <br />
      <p>
        If you do not agree to this, you may not access or otherwise use the website.
      </p>
      <button
        className="mt-3 rounded-md bg-custom-secondary text-custom-primary px-2 py-1 font-medium hover:text-white hover:cursor-pointer"
        onClick={ handleReadMoreDisclaimerClick }
      >
        Read More
      </button>
    </div>
  </>;

  const headerSymbol = (header, symbol) => (
    <div className="flex items-center">
      <div className="mx-2">{ symbol }</div>
      <div className="mx-2">{ header }</div>
    </div>
  );

  const contactUsSection = <>
    <div className="px-5 md:px-3 lg:px-2">
      <div className="grid grid-rows-4 grid-cols-3 responsive-text">
        <div className="col-span-1">{ headerSymbol('WEBSITE', <CgWebsite />) }</div>
        <a
          href="https://www.paptechcorp.in"
          target="_blank"
          rel="noreferrer"
          className="col-span-2 pl-2"
        >
          www.paptechcorp.in
        </a>
        <div className="col-span-1">{ headerSymbol('SALES TEL.', <AiFillCustomerService />) }</div>
        <div className="flex flex-col col-span-2 pl-2">
          <div><a href="tel:02249615770">022 49615770</a></div>
          <div><a href="tel:7738463016">+91 7738463016</a></div>
        </div>
        <div className="col-span-1">{ headerSymbol('ACCOUNTS TEL.', <FaPhoneAlt />) }</div>
        <div className="col-span-2 pl-2"><a href="tel:7738463018">+91 7738463018</a></div>
        <div className="col-span-1">{ headerSymbol('EMAIL', <MdAttachEmail />) }</div>
        <div className="flex flex-col col-span-2 pl-2">
          <div>accounts@paptechcorp.in</div>
          <div>godown@paptechcorp.in</div>
          <div>indenting@paptechcorp.in</div>
        </div>
        <div className="col-span-1">{ headerSymbol('OFFICE', <RiHomeOfficeFill />) }</div>
        <div className="col-span-2 pl-2">G-5, Raghuleela maega mall, Behind Poisar Depot, Kandivali (West), Mumbai - 400067.</div>
      </div>
      <SocialMedia />
    </div>
  </>;

  const sectionDetails = [
    {
      key: 'discalimer',
      title: 'DISCLAIMER',
      content: disclaimerSection
    },
    {
      key: 'contact_us',
      title: 'CONTACT US',
      content: contactUsSection
    }
  ];

  const sectionContent = (section = {}) => {
    const {
      content = <></>,
      key = ''
    } = section;
    return (
      <div className="text-md font-light my-3">
        { content }
      </div>
    );
  };

  const sectionTitle = (section = {}) => {
    const {
      title = '',
    } = section;

    return (
      <div className="flex flex-wrap justify-start pl-5 py-2 text-2xl font-medium basis-1/3 pb-3">
        <div className="text-custom-secondary py-1">{title}</div>
      </div>
    );
  };

  const companyDetails = (
    <div className="text-custom-tertiary">
      <div className="flex flex-col pb-3">
        <div className="flex justify-center font-bold responsive-text">
          Stockist and Cutting Center for
        </div>
        <div className="flex justify-center font-bold responsive-text">
          Imported & Local FBB / SBS / C2S / Bible Paper
        </div>
      </div>
      <div className="flex flex-col pt-3">
        <div className="flex justify-center mx-2 md:mx-5 lg:mx-10 responsive-text border-t-2 border-t-black py-3 font-bold">
          Authorised Dealer of Greyback / Whiteback for
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-0 md:gap-1 lg:gap-2">
          {
            _.map(dealershipCompanies, company => {
              return (
                <div className="mx-5">
                  <img alt="company logo" width="100px" className="bg-white mb-5" src={ company.logo } />
                  <div className="text-xs font-bold">{ company.name }</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-custom-tertiary text-white border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="p-5 col-span-1 md:col-span-2 lg:col-span-3 responsive-margin bg-gray-100">
          <Logo />
          <div className="text-lg">{ companyDetails }</div>
        </div>
        <div className="col-span-1 md:col-span-1 lg:col-span-1">
          <div>{ sectionTitle(sectionDetails[0]) }</div>
          <div>{ sectionContent(sectionDetails[0]) }</div>
        </div>
        <div className="col-span-1 md:col-span-3 lg:col-span-2">
          <div>{ sectionTitle(sectionDetails[1]) }</div>
          <div>{ sectionContent(sectionDetails[1]) }</div>
        </div>
      </div>
      <div className="flex justify-center border-t border-b p-16">
        &copy; 2024 PAPTECH CORP PVT. LTD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
