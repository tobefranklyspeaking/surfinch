import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBirdForm from './CreateBirdForm.jsx';
import BirdEntryList from './BirdEntryList.jsx';

const BirdEntry = ({ currentUser, location }) => {


  return (
    <div>
      <CreateBirdForm currentUser={currentUser} location={location}/>
    </div>
  )
}

export default BirdEntry;
