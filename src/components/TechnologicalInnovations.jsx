import React from 'react';
import AppQRCode from './AppQRCode';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import appPgae1 from '../assets/images/appPage1.jpg';
import appPgae2 from '../assets/images/appPage2.jpg';

const StoreLabel = ({ icon, priamryText, secondaryText }) => (
  <div className="grid grid-cols-4 bg-black placed-items-center rounded-2xl p-1 m-1">
    <div className="m-1 col-span-1">{ icon }</div>
    <div className="flex flex-col col-span-3 justify-center items-center text-white mx-1">
      <div className="responsive-small-text">{ secondaryText }</div>
      <div className="responsive-small-text font-bold">{ priamryText }</div>
    </div>
  </div>
);

const TechnologicalInnovations = () => {

  return (
    <div className="">
      <div className="flex flex-col responsive-padding responsive-margin rounded-2xl bg-custom-back shadow-elevation-xl items-center text-white">
        <div className="flex responsive-title font-bold mb-10">
          TECHNOLOGICAL INNOVATIONS
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1">
            <AppQRCode url="https://qr-codes.io/IFfhew" className="responsive-icon lg:w-96 lg:h-96" />
          </div>
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1 lg:row-start-2 bg-white rounded-2xl">
            <div className="flex justify-center responsive-small-text pt-1 text-black">Download The App Now</div>
            <div className="flex flex-col justify-between">
              <StoreLabel
                priamryText="App Store"
                secondaryText="Download on the"
                icon={ <FaApple className="responsive-small-icon" /> }
              />
              <StoreLabel
                priamryText="Google Play"
                secondaryText="GET IT ON"
                icon={ <FaGooglePlay className="responsive-small-icon" /> }
              />
            </div>
          </div>
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:row-start-2 lg:col-span-1 lg:row-span-2">
            <img alt="applicaiton page 1" src={ appPgae1 } />
          </div>
          <div className="col-span-1 row-span-1 md:col-span-1 md:row-span-1 md:row-start-2 lg:col-span-1 lg:row-span-2">
            <img alt="applicaiton page 2" src={ appPgae2 } />
          </div>
          <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2">
            <div className="p-3 md:p-4 lg:p-5 responsive-text">
              At Paptech Corp Pvt. Ltd., we are committed to leveraging the latest technology to enhance operational efficiency and deliver exceptional customer experiences. Our internally developed system optimizes every stage of the process, allowing us to provide real-time updates, seamless tracking, and instant notifications. This ensures transparency and enables customers to stay informed at all times.
            </div>
            <div className="p-3 md:p-4 lg:p-5 responsive-text">
              We've designed our platform to make ordering as easy and accessible as possible. With just a few clicks, customers can place orders, track shipments, and manage their requirements effortlessly, no matter where they are. This integration of technology not only boosts efficiency but also strengthens our ability to meet and exceed customer expectations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologicalInnovations;