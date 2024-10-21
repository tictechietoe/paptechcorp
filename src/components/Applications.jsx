import React from 'react';
import _ from 'lodash';
import applicationsData from '../data/applicationsData';

const Applications = () => {

  return (
    <div className="flex flex-col responsive-padding bg-custom-secondary shadow-elevation-lg items-center">
      <div className="flex responsive-title text-custom-back font-bold my-5 md:my-10 lg:my-10">
        PAPER APPLICATIONS
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 responsive-gap">
        {
          _.map(applicationsData, application => {
            return (
              <div
                key={ application.id }
                id={ application.id }
                className="flex flex-col items-center cursor-pointer p-2 md:p-3 lg:p-5 hover:bg-white text-white hover:text-custom-primary bg-custom-back shadow-elevation-xl rounded-2xl justify-between"
              >
                <div className="">{ application.icon }</div>
                <div className="m-2 text-xs md:text-sm lg:text-base text-center font-medium">{ _.upperCase(application.name) }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Applications;