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

  const teamMembers = [
    {
      name: "Palak Gala",
      designation: "Co Owner",
      image: rahul,
      email: 'palak.gala@paptechcorp.in',
      phone: '8879874369',
    },
    {
      name: "Dwip Gala",
      designation: "Co Owner",
      image: rahul,
      email: 'dwip.gala@paptechcorp.in',
      phone: '8080609658',
    },
    {
      name: "Rushabh Savla",
      designation: "Co Owner",
      image: rahul,
      email: 'rushabh.savla@paptechcorp.in',
      phone: 'phone_rushabh',
    },
    {
      name: "Pritesh Shah",
      designation: "Co Owner",
      image: rahul,
      email: 'Pritesh.shah@paptechcorp.in',
      phone: 'phone_pritesh',
    }
  ];

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