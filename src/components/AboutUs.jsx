// src/components/AboutUs.js
import React from 'react';
import founders from '../assets/faces/founders.jpg';

const AboutUs = () => {

return (
    <div className="bg-custom-back p-10 flex flex-col items-center">
      <div className="text-3xl font-bold text-white p-5">ABOUT US</div>
      <div className="grid grid-cols-5">
        <div className="col-span-2 flex flex-col justify-around items-center basis-1/4">
          <div className="flex-1"><img alt="about us founders" src={ founders } /></div>
          <div className="flex-1 mt-5 text-white text-center">Palak Gala and Rushabh Savla - Team Paptech</div>
          <div className="flex-1 flex mt-3">
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
        </div>
        <div className="col-span-3 felx flex-col items-center text-custom-secondary font-medium tex-2xl basis-3/4">
          <div className="flex justify-center m-10">
            <ul className="list-disc ml-5">
              <li>If you are looking for the best quality paper, paperboard, delivered faster at the most competitive price, you are at the right place.</li>
              <li>Paptech Corp PVT LTD is a leading integrated trading house and exporter of high quality paper and paperboard from India.</li>
              <li>We have more than 2 decades of proven credibility in the paper industry and serve customers across the world.</li>
              <li>We trade in all grades of paper & paperboard such as Duplex Board, Fluting Medium & Test liner, Kraft Paper, Packaging Board, Newsprint, Printing Paper, Waste Paper etc.</li>
              <li>We also cater to the customized requirements and offer bespoke solutions as per the customer’s needs.</li>
              <li>Our relentless focus on Quality, Velocity and Cost makes us the preferred partner to our buyers as well as suppliers alike.</li>
            </ul>
          </div>
          <div className="m-10">
            Paptech Corp Pvt. Ltd. is a leading distributor in the packaging boards industry, known for its strong partnerships and innovative solutions. With a focus on sustainable growth and profitability, Paptech aims to reshape the industry through strategic global partnerships and cutting-edge technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;