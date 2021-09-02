import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBirdForm from './CreateBirdForm.jsx';
import UpdateBirdForm from './UpdateBirdForm.jsx';
import BirdEntryList from './BirdEntryList.jsx';

const BirdEntry = ({ currentUser, location }) => {
  const birdEntry = {
    bird: "Cardinal",
    birdpic_url: "/uploads/cardinal_thumb.webp",
    street_sighted: "6828 Anderson St",
    city_sighted: "Philadelphia",
    date: "2021-09-02T04:00:00.000Z",
    id: 3,
    latitude: "39.9527237",
    longitude: "-75.1635262",
    notes: "I saw a red bird.",
    state_sighted: "PA",
    userID: 6
  }

  return (
    <div>
      {/* <CreateBirdForm location={location} currentUser={currentUser} /> */}
      <UpdateBirdForm birdEntry={birdEntry} />
    </div>
  )
}

export default BirdEntry;
