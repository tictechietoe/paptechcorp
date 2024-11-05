// src/components/PrivacyPolicyPage.js
import React from 'react';
import _ from 'lodash';

const PrivacyPolicyPage = () => {

  const division = (title, descrption) => {
    return (
      <div className="m-5">
        <h1 className="font-bold underline">{title}</h1>
        <div> {descrption} </div>
      </div>
    );
  };

  const data = [
    {
      title: "Introduction",
      content: <>
        Welcome to our website! <a className="text-custom-secondary underline" href='http://paptechcorp.in'>http://paptechcorp.in</a>, we take your privacy seriously. This privacy policy explains how we collect, use, and protect your personal information. By using our website, you agree to the terms outlined below.
      </>
    },
    {
      title: "Information We Collect",
      content: <>
        Personal Information: When you sign up for our newsletter, create an account, or make a purchase, we collect your name, email address, and other relevant details. Usage Data: We gather information about how you interact with our website, including IP addresses, browser type, and pages visited.
      </>
    },
    {
      title: "How We Use Your Information",
      content: <>
        <ul>
          <li><b>Communication</b>: We use your email address to send newsletters, updates, and promotional offers.</li>
          <li><b>Analytics</b>: We analyze usage data to improve our website and tailor content to your preferences.</li>
          <li><b>Security</b>: We take measures to protect your information from unauthorized access.</li>
        </ul>
      </>
    },
    {
      title: "Cookies and Tracking Technologies",
      content: <>
        We use cookies to enhance your browsing experience. You can manage cookie preferences in your browser settings.
      </>
    },
    {
      title: "Third-Party Services",
      content: <>
        We may share your information with trusted third-party services (e.g., payment processors) to provide better user experience.
      </>
    },
    {
      title: "Your Rights",
      content: <>
        You have the right to access, update, or delete your personal information. Contact us at
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=accounts@paptechcorp.in`}
          target="_blank"
          rel="noreferrer"
          className="text-custom-secondary underline mx-2"
        >
          accounts@paptechcorp.in
        </a> for assistance.
      </>
    },
    {
      title: "Changes to this Policy",
      content: <>
        We may update this privacy policy periodically. Check back for any revisions.
      </>
    },
    {
      title: "Contact Us",
      content: <>
        If you have any questions or concerns, please reach out to us at
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=accounts@paptechcorp.in`}
          target="_blank"
          rel="noreferrer"
          className="text-custom-secondary underline mx-2"
        >
          accounts@paptechcorp.in
        </a>
      </>
    }
  ];

  return (
    <div className="mx-5 md:mx-40 lg:mx-60">
      <h2 className="flex py-2 text-xl font-medium border-b sm:border-dashed justify-center mt-5">
        PRIVACY POLICY
      </h2>
      <div className="my-5">
        {
          _.map(data, d => division(d.title, d.content))
        }
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;