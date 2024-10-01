// src/components/AboutUs.js
import React from 'react';
import founders from '../assets/faces/founders.jpg';

const AboutUs = () => {

  return (
    <div className="bg-custom-back p-10 flex flex-col items-center">
      <div className="text-3xl font-bold text-custom-secondary p-5">ABOUT US</div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <img width="600px" src={ founders } />
          <div className="mt-5 text-white">Palak Gala and Rushabh Savla - Team Paptech</div>
          <a className="mt-5 text-white underline" href='https://www.newsvoir.com/release/paptech-corp-pvt-ltd-secures-usd1-million-debt-fundraising-to-drive-expansion-and-strengthen-supply-chain-29667.html'>Check us out here !</a>
        </div>
        <div>
          Details about Paptech
        </div>
      </div>
    </div>
  );
};

export default AboutUs;