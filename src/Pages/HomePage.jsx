// src/components/Home.js
import React from 'react';
import Dealers from '../components/Dealers.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import Success from '../components/Success.jsx';

import meeting from '../assets/images/meeting.jpg';
import difference from '../assets/images/difference.jpg';
import helping from '../assets/images/helping.jpg';
import findingSolutions from '../assets/images/findingSolutions.jpg';
import warehouse from '../assets/images/warehouse.jpg';
import workingWarehouse from '../assets/images/workingWarehouse.jpg';
import variety from '../assets/images/variety.jpg';

import Badges from '../components/Badges.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Quote from '../components/Quote.jsx';
import Products from '../components/Products.jsx';
import Applications from '../components/Applications.jsx';
import ServiceCenter from '../components/ServiceCenter.jsx';
import TechnologicalInnovations from '../components/TechnologicalInnovations.jsx';


import { FaInfinity } from "react-icons/fa6";

const Home = () => {
  const images = [
    meeting,
    findingSolutions,
    difference,
    helping,
    warehouse,
    workingWarehouse,
    variety
  ];

  const textContent = [
    'Accessable. Approachable. Accountable', // meetng
    'Finding Solutions and not Execuses', // findingSolutions
    'Making a Difference', // difference
    'We Build Relations', // helping
    'A World of Paper, Tailored to Your Needs', // warehouse
    'Delivering More Than Paper — Delivering Excellence', // workingWarehouse
    'Quality with Variety', // variety
  ];

  return (
    <div>
      <ImageCarousel images={images} textContent={ textContent }/>
      <Quote
        icon={ <FaInfinity size={ 75 } /> }
        iconColor="custom-secondary"
        textColor="custom-tertiary"
        message="Paper may be thin, but it can build strong bridges between businesses and their customers. Similarly Relationships in bussiness are like well-crafted paper, require care, attention, and a foundation of trust."
      />
      <AboutUs />
      <Products />
      <Applications />
      <Dealers />
      <Success />
      <ServiceCenter />
      <Badges />
      <TechnologicalInnovations />
    </div>
  );
};

export default Home;
