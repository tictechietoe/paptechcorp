// src/components/TermsAndConditionsPage.js
import React from 'react';
import _ from 'lodash';

const TermsAndConditionsPage = () => {

  const division = (index, title, descrption) => {
    return (
      <div className="m-5">
        <div className='flex'>
          <h1 className='font-bold mr-5'>{index + 1}.</h1>
          <h1 className="font-bold underline">{title}</h1>
        </div>
        <div> {descrption} </div>
      </div>
    );
  };

  const data = [
    {
      title: "Acceptance of Terms",
      descrption: "By accessing and using our website, you agree to comply with these terms and conditions. If you do not agree, please refrain from using our services."
    },
    {
      title: "Intellectual Property",
      descrption: "All content on this website, including text, images, and logos, is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our explicit consent."
    },
    {
      title: "User Conduct",
      descrption: "You agree not to engage in any prohibited activities, including: Violating any applicable laws. Uploading harmful or malicious content. Impersonating others. Interfering with the website’s functionality."
    },
    {
      title: "Privacy",
      descrption: "Our privacy policy outlines how we collect, use, and protect your personal information. Please review it separately."
    },
    {
      title: "Disclaimer of Warranties",
      descrption: "We provide the website “as is” without any warranties or guarantees. We do not guarantee the accuracy, completeness, or reliability of the content."
    },
    {
      title: "Limitation of Liability",
      descrption: "We are not liable for any direct, indirect, or consequential damages arising from your use of the website. Your sole remedy is to discontinue using our services."
    },
    {
      title: "Governing Law",
      descrption: "These terms and conditions are governed by the laws of INDIA.\n Any disputes shall be resolved in the courts of Mumbai."
    }
  ];

  return (
    <div className="mx-5 md:mx-40 lg:mx-60">
      <h2 className="flex py-2 text-xl font-medium border-b sm:border-dashed justify-center mt-5">
        TERMS AND CONDITIONS
      </h2>
      <div className="my-5">
        {
          _.map(data, (d, idx) => division(idx, d.title, d.descrption))
        }
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;