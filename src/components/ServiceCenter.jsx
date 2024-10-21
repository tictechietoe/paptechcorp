import React from 'react';
import pasaban from '../assets/images/pasaban.jpeg';
import gsmTesting from '../assets/images/gsmTesting.jpg';

const ServiceCenter = () => {

  return (
    <div className="flex flex-col responsive-padding bg-custom-secondary shadow-elevation-xl items-center">
      <div className="flex responsive-title text-custom-back font-bold">
        PAPTECH QUICK SERVICE CENTERS
      </div>
      <div className="grid grid-cols-1 place-items-center responsive-text">
        <div className="grid grid-cols-1 lg:grid-cols-5 py-5 text-white text-center">
          <div className="col-span-1 lg:col-span-2">
            <img alt="pasaban alternate" className="border-2 rounded-2xl" src={ pasaban } />
          </div>
          <div className="col-span-1 lg:col-span-3 flex flex-col py-2 px-3">
            <div className="font-bold underline">ONE OF THE FINEST SHEETING AND SLITING TECHNOLOGY</div>
            <div className="my-2 mx-3">
              <b>At Paptech Corp Pvt Ltd,</b> we are deeply committed to excellence in both quality and service. Our state-of-the-art automated sheeting systems stand as a testament to our dedication to precision and innovation. These advanced machines not only ensure flawless, high-precision cuts, but they also integrate the processes of slitting and sheeting, streamlining production and enhancing efficiency.
            </div>
            <div className="my-2 mx-3">
              By eliminating redundancy, our technology delivers exact specifications with unparalleled accuracy, meeting and exceeding customer expectations. We recognize that the cornerstone of our business is the trust and commitment we establish with our clients. At Paptech, we honor this commitment through cutting-edge technology and relentless innovation, ensuring that our customers consistently receive the highest level of service and product quality.
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 py-5 text-custom-back text-center">
          <div className="col-span-1 lg:col-span-3 flex flex-col py-2 px-3">
            <div className="font-bold underline my-2 mx-3">INHOUSE PAPER TESTING LAB</div>
            <div className="my-2 mx-3">
              At Paptech Corp Pvt Ltd, our in-house paper testing lab ensures the highest quality standards by accurately measuring GSM for all materials entering our facility. This guarantees a smooth and error-free process in slitting and sheeting, eliminating any issues related to paper weight.
            </div>
            <div className="col-span-1 lg:col-span-2">
              Transparency and customer focus are at the core of our operations. We take pride in openly sharing our quality control processes. Our commitment to customer-centricity drives everything that we do. Our advanced lab enhances R&D precision, ensuring flawless execution for our clients. Additionally, our experts offer consultations to help customers choose the right paper for their printing needs, further strengthening our commitment to quality and innovation.
            </div>
          </div>
          <div className="col-span-1 lg:col-span-2">
            <img alt="gsm lab testing" className="border-2 border-custom-back rounded-2xl" src={ gsmTesting } />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCenter;