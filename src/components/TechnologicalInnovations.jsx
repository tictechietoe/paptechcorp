import React from 'react';
import AppQRCode from './AppQRCode';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import appPgae1 from '../assets/images/appPage1.jpg';
import appPgae2 from '../assets/images/appPage2.jpg';

const StoreLabel = ({ icon, priamryText, secondaryText }) => (
  <div className="bg-black flex items-center rounded-2xl p-1 m-2">
    <div className="m-1">{ icon }</div>
    <div className="flex flex-col justify-center items-center text-white">
      <div className="text-sm">{ secondaryText }</div>
      <div className="text-lg">{ priamryText }</div>
    </div>
  </div>
);

const TechnologicalInnovations = () => {

  return (
    <div className="">
      <div className="flex flex-col p-16 m-10 rounded-2xl bg-custom-back shadow-elevation-xl items-center text-white">
        <div className="flex text-3xl font-bold mb-10">
          TECHNOLOGICAL INNOVATIONS
        </div>
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-1">
            <div className="mb-5">
              <AppQRCode url="https://qr-codes.io/IFfhew" size={ 175 } />
            </div>
            <div className="bg-white px-1 rounded-2xl">
              <div className="flex justify-center text-medium pt-2 text-black font-base">Download The App Now</div>
              <div className="flex flex-col justify-between">
                <StoreLabel
                  priamryText="App Store"
                  secondaryText="Download on the"
                  icon={ <FaApple size={ 35 } /> }
                />
                <StoreLabel
                  priamryText="Google Play"
                  secondaryText="GET IT ON"
                  icon={ <FaGooglePlay size={ 35 } /> }
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 border-2">
            <img alt="applicaiton page 1" src={ appPgae1 } />
          </div>
          <div className="col-span-1 border-2">
            <img alt="applicaiton page 2" src={ appPgae2 } />
          </div>
          <div className="col-span-3 flex flex-col justify-between">
            <div className="p-5 text-lg">
              At Paptech Corp Pvt. Ltd., we are committed to leveraging the latest technology to enhance operational efficiency and deliver exceptional customer experiences. Our internally developed system optimizes every stage of the process, allowing us to provide real-time updates, seamless tracking, and instant notifications. This ensures transparency and enables customers to stay informed at all times.
            </div>
            <div className="p-5 text-lg">
              We've designed our platform to make ordering as easy and accessible as possible. With just a few clicks, customers can place orders, track shipments, and manage their requirements effortlessly, no matter where they are. This integration of technology not only boosts efficiency but also strengthens our ability to meet and exceed customer expectations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologicalInnovations;