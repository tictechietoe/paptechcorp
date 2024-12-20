// src/components/ContactInfo.js
import React from 'react';
import _ from 'lodash';

import contact from '../assets/images/contact.jpg';
import BannerImage from '../components/BannerImage';
import CountingNumbers from '../components/CountingNumbers';

import { RiHomeOfficeFill, RiCustomerServiceFill } from "react-icons/ri";
import { PiWarehouseBold } from "react-icons/pi";
import { MdOutlineContactPhone } from "react-icons/md";


const ContactInfo = () => {
  const officeData = [
    {
      name: 'Kandivali Office',
      designation: 'Head Quaters (HQ)',
      location: 'G-5, Raghuleela maega mall, Behind Poisar Depot, Kandivali (West), Mumbai - 400067.',
      emails: ['accounts@paptechcorp.in'],
      contacts: ['7738463016', '022 49615770'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.589437685923!2d72.8468108752088!3d19.21312648201993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b72aeb5bd387%3A0x4fb72a26290d43f4!2sRaghuleela%20Mega%20Mall%20Kandivali%20West!5e0!3m2!1sen!2sin!4v1727932590452!5m2!1sen!2sin",
    },
    {
      name: 'Kalbadevi Office',
      designation: 'Office branch',
      location: '170, Sitaram Podar Marg, Marine Lines East, Fanas Wadi, Kalbadevi, Mumbai, Maharashtra 400002.',
      emails: ['accounts@paptechcorp.in'],
      contacts: ['9137197113'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
    }
  ];

  const warehouseData = [
    {
      name: 'Bhawale Warehouse',
      designation: 'Cutting Facility',
      location: 'Shed No. 3, Pissa Dam Road Next to All Saint High School, near BMC Water Filtration Plant, Bhawale, Maharashtra 421302.',
      emails: ['godown@paptechcorp.in'],
      contacts: ['9372020788'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.2344615486923!2d73.12924120000001!3d19.3156297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be797549608bc89%3A0x6d4cf199bb7594d0!2sPrabhat%20Paper%20Mart%20(Bhawale)!5e0!3m2!1sen!2sin!4v1728889298902!5m2!1sen!2sin"
    },
    {
      name: 'Dapode Warehouse',
      designation: 'Storage Facility',
      location: 'Gupta Compound, C-4, Dapode, Bhiwandi, Maharashtra 421302.',
      emails: ['godown@paptechcorp.in'],
      contacts: ['8080117732'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.716660822444!2d73.03870909999999!3d19.2511764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bd0009981775%3A0x6322556093005491!2sPapTech%20Gupta%20compound!5e0!3m2!1sen!2sin!4v1728889185146!5m2!1sen!2sin"
    }
  ];

  const overviewNumbersDuration = 500; // 2 seconds
  const overviewData = [
    {
      title: 'Offices',
      number: 2,
      logo: <RiHomeOfficeFill size={50} />
    },
    {
      title: 'Warehouses',
      number: 2,
      logo: <PiWarehouseBold size={50} />
    },
    {
      title: 'Salesmen',
      number: 5,
      logo: <RiCustomerServiceFill size={50} />
    },
    {
      title: 'Accountants',
      number: 5,
      logo: <MdOutlineContactPhone size={50} />
    },
  ];

  return (
    <div>
      <BannerImage
        image={contact}
        title="CONTACT US"
        fromText="Home"
        fromLink="/"
        toText="Contact"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 responsive-gap responsive-margin responsive-padding  shadow-elevation-md rounded-2xl">
          {
            _.map(overviewData, overview => {
              return (
                <div className="flex flex-col justify-center items-center rounded-2xl hover:bg-custom-nav-color m-2 p-5 border-2">
                  <div className="text-custom-back font-bold responsive-title">{overview.title}</div>
                  <div className="text-custom-secondary responsive-icon">{overview.logo}</div>
                  <div className="text-custom-primary font-medium text-lg md:text-xl lg:text-2xl">
                    <CountingNumbers
                      targetNumber={overview.number}
                      duration={overviewNumbersDuration}
                    />
                  </div>
                  <div className="flex flex-col">
                    {
                      _.map(overview.list, item => <div className="font-medium">{item}</div>)
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="responsive-padding">
          <div className="grid grid-cols-3 place-items-center responsive-gap responsive-padding bg-custom-primary rounded-xl shadow-elevation-lg text-custom-secondary justify-evenly">
            <div className="col-span-1 row-span-2 responsive-text font-bold text-wrap">FOR QUALITY GRIVIENCE</div>
            <div className="col-span-2 text-white font-medium text-wrap">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=indenting@paptechcorp.in`}
                target="_blank"
                rel="noreferrer"
              >
                Email : indenting@paptechcorp.in
              </a>
            </div>
            <div className="col-span-2 font-medium text-white text-wrap">
              <a href="tel:8879874369">
                Contact : +91 8879874369
              </a>
            </div>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-center responsive-title font-bold text-custom-back">OUR OFFICES</div>
          {
            _.map(officeData, office => {
              return (
                <div className="responsive-padding grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 responsive-gap">
                  <div className="grid grid-rows-4 col-span-1 responsive-gap">
                    <div className="row-span-2 flex flex-col justify-evenly bg-custom-primary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold">{_.upperCase(office.name)}</p>
                      <p className="text-custom-secondary font-medium">[ {_.upperCase(office.designation)} ]</p>
                      <p className="responsive-text">{office.location}</p>
                    </div>
                    <div className="bg-custom-secondary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold">CONTACT NUMBER</p>
                      {
                        _.map(office.contacts, contact => {
                          return (
                            <div><a href={`tel:${contact}`}>+91 {contact}</a></div>
                          );
                        })
                      }
                    </div>
                    <div className="bg-custom-mark-color text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold">EMAIL</p>
                      {
                        _.map(office.emails, email => {
                          return (
                            <div>
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {email}
                              </a>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div className="m-5 border-4 col-span-1 md:col-span-3 lg:col-span-3 rounded-2xl">
                    <iframe
                      title="Google Maps Location"
                      src={office.src}
                      width="100%"
                      height="400"
                      className="border rounded-lg shadow-lg shadow-gray-500"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="mt-10 responsive-padding">
          <div className="flex justify-center responsive-title font-bold text-custom-back">
            OUR WAREHOUSES
          </div>
          {
            _.map(warehouseData, warehouse => {
              return (
                <div className="responsive-padding grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 responsive-gap">
                  <div className="grid grid-rows-4 col-span-1 responsive-gap">
                    <div className="row-span-2 bg-custom-primary flex flex-col justify-evenly text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold ">{_.upperCase(warehouse.name)}</p>
                      <p className="text-custom-secondary font-medium">[ {_.upperCase(warehouse.designation)} ]</p>
                      <p className="responsive-text">{warehouse.location}</p>
                    </div>
                    <div className="bg-custom-secondary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold ">CONTACT NUMBER</p>
                      {
                        _.map(warehouse.contacts, contact => {
                          return (
                            <div><a href={`tel:${contact}`}>+91 {contact}</a></div>
                          );
                        })
                      }
                    </div>
                    <div className="bg-custom-mark-color text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold ">EMAIL</p>
                      {
                        _.map(warehouse.emails, email => {
                          return (
                            <div>
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}`}
                                target="_blank"
                                rel="noreferrer"
                              >
                                {email}
                              </a>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div className="m-5 border-4 col-span-1 md:col-span-3 lg:col-span-3 rounded-2xl">
                    <iframe
                      title="Google Maps Location"
                      src={warehouse.src}
                      width="100%"
                      height="400"
                      className="border rounded-lg shadow-lg shadow-gray-500"
                      allowFullScreen=""
                    />
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

export default ContactInfo;
