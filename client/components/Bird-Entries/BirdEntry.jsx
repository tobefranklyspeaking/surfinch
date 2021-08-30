import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CreateBirdForm from './CreateBirdForm.jsx';
import BirdEntryList from './BirdEntryList.jsx';

const BirdEntry = () => {


  return (
    <div>
      <CreateBirdForm />
    </div>
  )
}

export default BirdEntry;
