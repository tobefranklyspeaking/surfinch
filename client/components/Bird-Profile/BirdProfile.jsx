import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_TOKEN } from '/config.js';


const BirdProfile = () => {
  const [bird, setBird] = useState([]);
  const [notes, setNotes] = useState([]);

  //get bird info
  useEffect(() => {
    axios.get('')
  })


  //get user notes
  useEffect(() => {
    axios.get('/birdNotes')
    .then((result) => {
      console.log(result);
      // setNotes(result)
    })
    .catch(error => {
      consol.log('There was an error retrieving notes from DB', error)
    })
  })




  return (
    <div>
      <div>This is a birddddddd</div>
      <img src='https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' class="img-fluid. max-width: auto; height: auto;" alt="Responsive image"></img>
      <h3>Canada Goose</h3>
      <h5>Branta canadensis</h5>
      <div><p>Bird info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p></div>
      <div><p>Notes: I like this bird alot, its really cool! </p></div>
    </div>
  );
}

export default BirdProfile;



//Get Species list for a region
//https://api.ebird.org/v2/product/spplist/{{regionCode}}

//Get observations of a given species in a given region
//https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/{{speciesCode}}

//bird information
//https://api.ebird.org/v2/ref/taxonomy/ebird?species=cangoo