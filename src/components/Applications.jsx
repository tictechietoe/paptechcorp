import React from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';
import applicationsData from '../data/applicationsData';

const Applications = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-16 bg-custom-secondary shadow-elevation-xl items-center">
      <div className="flex text-3xl text-custom-back font-bold mb-10">
        PAPER APPLICATIONS
      </div>
      <div className="grid grid-cols-6 gap-8">
        {
          _.map(applicationsData, application => {
            return (
              <div
                key={ application.id }
                id={ application.id }
                onClick={ () => navigate(`/products#${application.id}`) }
                className="flex flex-col items-center cursor-pointer p-5 hover:bg-white text-white hover:text-custom-primary bg-custom-back shadow-elevation-xl rounded-2xl justify-between"
              >
                <div className="">{ application.icon }</div>
                <div className="m-2 text-center font-medium">{ _.upperCase(application.name) }</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Applications;