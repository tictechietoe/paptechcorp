import React from 'react';
import _ from 'lodash';
import AppQRCode from './AppQRCode';
import { FaApple, FaGooglePlay } from "react-icons/fa";

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
    <div className="p-10">
      <div className="flex flex-col p-16 bg-custom-back shadow-elevation-xl items-center text-white">
        <div className="flex text-3xl font-bold mb-10">
          TECHNOLOGICAL INNOVATIONS
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="mb-10">
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
          <div>
            <div>App details of Application</div>
            <div>bar code to help them reuse</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologicalInnovations;