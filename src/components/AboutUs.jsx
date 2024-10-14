// src/components/AboutUs.js
import React from 'react';
import founders from '../assets/faces/founders.jpg';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {

  const navigate = useNavigate();

return (
    <div className="bg-custom-back p-10 flex flex-col items-center">
      <div className="text-3xl font-bold text-white p-5">ABOUT US</div>
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex flex-col justify-around items-center basis-1/4">
          <div className="flex-1"><img alt="about us founders" src={ founders } /></div>
          <div className="flex-1 mt-5 text-white text-center">Palak Gala and Rushabh Savla - Team Paptech</div>
        </div>
        <div className="col-span-1 felx flex-col items-center text-custom-secondary font-medium tex-2xl basis-3/4 my-5 mx-10">
          <div className="mb-5 font-semibold text-white">
            Pap tech Sales Corporation and Prabhat paper mart have merged into Paptech Corp Pvt. Ltd. from FY 2024.
          </div>
          <div className="mb-5">
            Paptech Corp Pvt. Ltd. is a leading distributor in the packaging boards industry, known for its strong partnerships and innovative solutions. With a focus on sustainable growth and profitability, Paptech aims to reshape the industry through strategic global partnerships and cutting-edge technology.
          </div>
          <div className="flex-1 flex mb-5">
            <div className="text-white mx-2">NEWS :</div>
            <a
              className="text-custom-secondary hover:cursor-pointer underline"
              href='https://www.newsvoir.com/release/paptech-corp-pvt-ltd-secures-usd1-million-debt-fundraising-to-drive-expansion-and-strengthen-supply-chain-29667.html'
              target="_blank"
              rel="noreferrer"
            >
              Check us out here !
            </a>
          </div>
            <button
              className="mb-3 rounded-md bg-custom-secondary text-custom-primary px-2 py-1 font-medium hover:text-white hover:cursor-pointer"
              onClick={ () => navigate(`/aboutus`) }
            >
              Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;