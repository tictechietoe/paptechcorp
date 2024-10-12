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
      emails: ['accounts@paptechcorp.in', 'godown@paptechcorp.in'],
      contacts: ['9372597268', '9022573304'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.589437685923!2d72.8468108752088!3d19.21312648201993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b72aeb5bd387%3A0x4fb72a26290d43f4!2sRaghuleela%20Mega%20Mall%20Kandivali%20West!5e0!3m2!1sen!2sin!4v1727932590452!5m2!1sen!2sin",
    },
    {
      name: 'Kalbadevi Office',
      designation: 'Office branch',
      location: '170, Sitaram Podar Marg, Marine Lines East, Fanas Wadi, Kalbadevi, Mumbai, Maharashtra 400002.',
      emails: ['accounts@paptechcorp.in', 'godown@paptechcorp.in'],
      contacts: ['9372597268', '9022573304'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
    }
  ];

  const warehouseData = [
    {
      name: 'Bhawale Warehouse',
      designation: 'Cutting Facility',
      location: '',
      emails: ['accounts@paptechcorp.in', 'godown@paptechcorp.in'],
      contacts: ['9372597268', '9022573304'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
    },
    {
      name: 'Padhga Warehouse',
      designation: 'Storage Facility',
      location: '',
      emails: ['accounts@paptechcorp.in', 'godown@paptechcorp.in'],
      contacts: ['9372597268', '9022573304'],
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5687328262234!2d72.82348707690886!3d18.950474055897928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfbad044e6e3%3A0x5b2f8515f6b60f83!2sVadhan%20Niwas!5e0!3m2!1sen!2sin!4v1719416541890!5m2!1sen!2sin"
    }
  ];

  const overviewNumbersDuration = 500; // 2 seconds
  const overviewData = [
    {
      title: 'Office',
      number: 2,
      list: [
        'Kandivali Office (HQ)',
        'Kalbadevi Office (Branch)'
      ],
      logo: <RiHomeOfficeFill size={ 50 } />
    },
    {
      title: 'Warehouse',
      number: 2,
      list: [
        'Bhawale Warehouse',
        'Padhga Warehouse'
      ],
      logo: <PiWarehouseBold size={ 50 } />
    },
    {
      title: 'Salesman',
      number: 5,
      list: [
        'ascs',
        'scwnwe'
      ],
      logo: <RiCustomerServiceFill size={ 50 } />
    },
    {
      title: 'Accountants',
      number: 5,
      list: [
        'ascs',
        'scwnwe'
      ],
      logo: <MdOutlineContactPhone size={ 50 } />
    },
  ];

  return (
    <div>
      <BannerImage
        image={ contact }
        title="CONTACT US"
        fromText="Home"
        fromLink="/"
        toText="Contact"
      />
      <div className="flex flex-col">
        <div className="grid grid-cols-4 m-10 p-10 border-2 shadow-elevation-md rounded-2xl">
          {
            _.map(overviewData, overview => {
              return (
                <div className="flex flex-col justify-center items-center border-2 rounded-2xl hover:bg-custom-nav-color m-2 p-5">
                  <div className="text-custom-back font-bold text-2xl">{ overview.title }</div>
                  <div className="text-custom-secondary">{ overview.logo }</div>
                  <div className="text-custom-primary font-medium text-3xl">
                    <CountingNumbers targetNumber={ overview.number } duration={ overviewNumbersDuration } />
                  </div>
                  <div className="flex flex-col">
                    {
                      _.map(overview.list, item => <div className="font-medium">{ item }</div>)
                    }
                  </div>
                </div>
              );
            })
          }
        </div>
        <div className="p-5">
          <div className="flex justify-center text-3xl font-bold text-custom-back">OUR OFFICES</div>
          {
            _.map(officeData, office => {
              return (
                <div className="p-5 grid grid-cols-4">
                  <div className="grid grid-rows-3 p-5 col-span-1 gap-4">
                    <div className="bg-custom-primary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">{ _.upperCase(office.name) }</p>
                      <p>{ office.location }</p>
                    </div>
                    <div className="bg-custom-secondary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">CONTACT NUMBER</p>
                      {
                        _.map(office.contacts, contact => {
                          return (
                            <div><a href={ `tel:${contact}` }>+91 { contact }</a></div>
                          );
                        })
                      }
                    </div>
                    <div className="bg-custom-mark-color text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">EMAIL</p>
                      {
                        _.map(office.emails, email => {
                          return (
                            <div>
                              <a
                                href={ `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}` }
                                target="_blank"
                                rel="noreferrer"
                              >
                                { email }
                              </a>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div className="m-5 border-4 col-span-3 rounded-2xl">
                    <iframe
                      title="Google Maps Location"
                      src={ office.src }
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
        <div className="mt-10 p-5">
          <div className="flex justify-center text-3xl font-bold text-custom-back">OUR WAREHOUSES</div>
          {
            _.map(warehouseData, warehouse => {
              return (
                <div className="p-5 grid grid-cols-4">
                  <div className="grid grid-rows-3 p-5 col-span-1 gap-4">
                    <div className="bg-custom-primary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">{ _.upperCase(warehouse.name) }</p>
                      <p>{ warehouse.location }</p>
                    </div>
                    <div className="bg-custom-secondary text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">CONTACT NUMBER</p>
                      {
                        _.map(warehouse.contacts, contact => {
                          return (
                            <div><a href={ `tel:${contact}` }>+91 { contact }</a></div>
                          );
                        })
                      }
                    </div>
                    <div className="bg-custom-mark-color text-white p-2 rounded-lg shadow-lg">
                      <p className="font-extrabold underline">EMAIL</p>
                      {
                        _.map(warehouse.emails, email => {
                          return (
                            <div>
                              <a
                                href={ `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}` }
                                target="_blank"
                                rel="noreferrer"
                              >
                                { email }
                              </a>
                            </div>
                          );
                        })
                      }
                    </div>
                  </div>
                  <div className="m-5 border-4 col-span-3 rounded-2xl">
                    <iframe
                      title="Google Maps Location"
                      src={ warehouse.src }
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
