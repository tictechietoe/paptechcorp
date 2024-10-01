// src/components/Home.js
import React from 'react';
import Dealers from '../components/Dealers.jsx';
import ImageCarousel from '../components/ImageCarousel.jsx';
import Success from '../components/Success.jsx';
import meeting from '../assets/images/meeting.jpg';
import skyscrapers from '../assets/images/skyscrapers.jpg';
import solutions from '../assets/images/solutions.jpg';
import difference from '../assets/images/difference.jpg';
import assets from '../assets/images/assets.jpg';
import helping from '../assets/images/helping.jpg';
import Badges from '../components/Badges.jsx';
import AboutUs from '../components/AboutUs.jsx';

const Home = () => {
  const images = [
    meeting,
    skyscrapers,
    solutions,
    difference,
    assets,
    helping
  ];

  const textContent = [
    'Accessable. Approachable. Accountable',
    'We are here to help your bussiness',
    'Finding Solutions and not Execuses',
    'Making a Difference',
    'Surround yourself with Assets, Not Liabilities',
    'We Build Relations'
  ];

  return (
    <div>
      <ImageCarousel images={images} textContent={ textContent }/>
      <AboutUs />
      <Dealers />
      <Success />
      <Badges />
    </div>
  );
};

export default Home;
