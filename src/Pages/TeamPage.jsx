// src/components/Team.js
import React, { useState } from 'react';
import _ from 'lodash';
import teamImage from '../assets/images/team.jpg';
import BannerImage from '../components/BannerImage.jsx';
import Quote from '../components/Quote.jsx';
import rahul from '../assets/faces/rahul.jpg';

import ProfileCard from '../components/ProfileCard.jsx';
import { FaPeopleGroup } from "react-icons/fa6";

const Team = () => {
  const [showFounderMoreDetails, setShowFounderMoreDetails] = useState(false);

  const teamMembers = [
    {
      name: "Palak Gala",
      designation: "Co-founder",
      image: rahul,
      email: 'email_palak',
      phone: 'phone_palak',
    },
    {
      name: "Dwip Gala",
      designation: "Co-founder",
      image: rahul,
      email: 'email_dwip',
      phone: 'phone_dwip',
    },
    {
      name: "Rushabh Savla",
      designation: "Co-founder",
      image: rahul,
      email: 'email_rushabh',
      phone: 'phone_rushabh',
    },
    {
      name: "Pritesh <Surname>",
      designation: "Co-founder",
      image: rahul,
      email: 'email_pritesh',
      phone: 'phone_pritesh',
    }
  ];

  const foundersProfile = (
    <div className="border pb-5">
      <h2 className="flex py-2 px-5 text-xl font-medium justify-start text-custom-secondary">FOUNDER'S PROFILE</h2>
      <div className="flex">
        <div className="flex flex-col px-5 basis-2/6 justify-center">
          <img alt="profile pic" src={ rahul } />
          <h2 className="flex justify-center text-lg font-bold text-custom-primary">RAHUL J GALA</h2>
        </div>
        <div className="flex flex-col base-1/6 pl-5 justify-center">
          <ul className="list-disc ml-5 pb-5">
            <li>Chartered Accountant (ICAI)</li>
            <li>Certified  in GST course (ICAI)</li>
            <li>Trained in Securities and Financial Assets Valuation (PVAI)</li>
            <li>Graduate (HR College)</li>
          </ul>
          <ul className="list-disc ml-5">
            <li>Phone : +91 12345678</li>
            <li>Email: rahulgala@gmail.com</li>
          </ul>
        </div>
        <div className="basis-3/6">
          <div className="my-2 text-sm">
            Rahul J Gala is a young  Chartered Accountant and the founder of  R J Gala and Associates. He is a commerce graduate from HR College of Commerce and Economics (Mumbai University). He is certified in GST course held by Institute of Chartered Accountants of India and also availed professional training in the field of Securities and Financial Assets valuation conducted by a recognised institute.
          </div>
          <div className="my-2 text-sm">
            In his professional lifespan, he has accumulated rich experience in several fields of professional services, different sectors and with diverse clients. He has considerable domain expertize in Direct and Indirect Taxation, Accounting, Audit and Advisory. His understanding of the intricacies of businesses enables him to provide clients with comprehensive, accurate and technology enabled solutions for their current and future business issues.  He has successfully represented various clients before tax authories on complex tax litigation matters.
          </div>
          {
            !showFounderMoreDetails &&
            <button
              className="rounded-lg bg-custom-secondary text-white font-medium p-1"
              onClick={ () => setShowFounderMoreDetails(true) }
            >
              More Details
            </button>
          }
        </div>
      </div>
      {
        showFounderMoreDetails &&
        <div className="px-5">
          <div className="my-2 text-sm">
            Prior to founding R J Gala and Associates, he has headed the Accounting and Taxation department and also served in the capacity as a consultant in different professionally managed  corporate organisations. He has worked very closely with top companies and firms including Big Four on several occassions.
          </div>
          <div className="my-2 text-sm">
            As a leader, he has always been a strong source of inspiration for the team and aspiring professionals within the organization. He is a strong believer of giving back to the society and hence is associated with various not-for-profit organizations. He strongly believes that exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
          </div>
          <button
            className="rounded-lg bg-custom-secondary text-white font-medium p-1"
            onClick={ () => setShowFounderMoreDetails(false) }
          >
            Hide Details
          </button>
        </div>
      }
    </div>
  );

  return (
    <div>
      <BannerImage
        image={ teamImage }
        title="TEAM"
        fromText="Home"
        fromLink="/"
        toText="Team"
      />
      <Quote
        icon={ <FaPeopleGroup size={ 50 } /> }
        iconColor="custom-secondary"
        textColor="custom-primary"
        message="The strength of a team is each individual member, the strength of each member is the team"
      />
      <div className="px-10">
        <div className="my-5">
          We  generate our strength from our team of professionals who have significant functional and industry expertise across services and are well-equipped to deliver outstanding results. Quality of our people is the foundation of our ability to serve our clients in the best way. From our newest staff members through senior staff, exceptional client service represents a dedication to going above and beyond expectations in every working relationship.
        </div>
        <div>
          <h2 className="flex py-5 px-5 text-xl font-medium justify-start text-custom-secondary">TEAM OF PROFESSIONALS</h2>
          <div className="grid grid-cols-4 gap-8 p-5">
            {
              _.map(teamMembers, (member, index) => <ProfileCard key={index} data={member} />)
            }
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Team;