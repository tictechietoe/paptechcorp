// src/components/AboutUs.js
import React from 'react';
import founders from '../assets/faces/founders.jpg';

const AboutUs = () => {

  return (
    <div className="bg-custom-back p-10 flex flex-col items-center">
      <div className="text-3xl font-bold text-custom-secondary p-5">ABOUT US</div>
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <div className="flex-1"><img src={ founders } /></div>
          <div className="flex-1 mt-5 text-white">Palak Gala and Rushabh Savla - Team Paptech</div>
          <div className="flex items-center mt-3">
            <div className="text-white mx-2">NEWS :</div>
            <a
              className="text-custom-secondary hover:cursor-pointer underline"
              href='https://www.newsvoir.com/release/paptech-corp-pvt-ltd-secures-usd1-million-debt-fundraising-to-drive-expansion-and-strengthen-supply-chain-29667.html'
              target="_blank"
            >
              Check us out here !
            </a>
          </div>
        </div>
        <div className="p-10 text-custom-secondary font-medium tex-2xl">
          If you are looking for the best quality paper, paperboard, delivered faster at the most competitive price, you are at the right place.
          <br />
          <br />
          Paptech Corp PVT LTD is a leading integrated trading house and exporter of high quality paper and paperboard from India.
          <br />
          <br />
          We have more than 2 decades of proven credibility in the paper industry and serve customers across the world.
          <br />
          <br />
          We trade in all grades of paper & paperboard such as Duplex Board, Fluting Medium & Test liner, Kraft Paper, Packaging Board, Newsprint, Printing Paper, Waste Paper etc.
          <br />
          <br />
          We also cater to the customized requirements and offer bespoke solutions as per the customer’s needs.
          <br />
          <br />
          Our relentless focus on Quality, Velocity and Cost makes us the preferred partner to our buyers as well as suppliers alike.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;