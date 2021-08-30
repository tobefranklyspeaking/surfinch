import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { compileCoordinates } from './coordinates.js';
import { taxonomySplit } from './taxonomyOrder.js';
import { API_TOKEN } from '/config.js';


const BirdProfile = () => {
  const [bird, setBird] = useState([]);
  const [location, setLocation] = useState([]);
  const [notes, setNotes] = useState([]);
  const [taxonomy, setTax] = useState('');

  // //get recent observation of bird
  // useEffect(() => {
  //   axios.get('https://api.ebird.org/v2/data/obs/US-RI/recent/cangoo', {
  //     headers: {
  //       'X-eBirdApiToken': API_TOKEN
  //     }
  //   })
  //   .then((result) => {
  //     var result2 = compileCoordinates(result.data);
  //     setLocation(result2);
  //     setBird(result.data);
  //   })
  //   .catch(error => {
  //     console.log('There was an error retrieving data from API, ', error);
  //   })
  // }, [])

  //get bird info
  useEffect(() => {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        list: "search",
        srsearch: "Branta canadensis",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

  axios.get(url)
      .then((result) => {
        var data = result.data.query.search[0].snippet
        var text = data.replace( /(<([^>]+)>)/ig, '')
        setTax(text);
      })
      .catch((error) => {
        console.log('error from Wiki api', error)
      });

  }, [])


  //get user notes
  // useEffect(() => {
  //   axios.get('/userbirds/:userid')
  //   .then((result) => {
  //     console.log(result);
  //     // setNotes(result)
  //   })
  //   .catch(error => {
  //     consol.log('There was an error retrieving notes from DB', error)
  //   })
  // }, [notes])




  return (
    <div className='birdProfileContainer'>
      <div className='birdProfilePic'>
      <img src='https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' class=".img-fluid" alt="Responsive image"></img>
      </div>
      <div className='birdBio'>
      <h1>Canada Goose</h1>
      <h3>Branta canadensis</h3>
      <h5>General Information:</h5>
        {taxonomy ? <p>{taxonomy}</p> : null}
      </div>
      <div className='birdNotes'>
        <h5>Notes:</h5>
        <p>I like this bird alot, its really cool! </p>
        </div>
        <div className='heatMap'>
          HEAT MAP its getting hot in here!
        </div>
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


// <img src='https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' class=".img-fluid" alt="Responsive image"></img>


// axios.get('https://api.ebird.org/v2/ref/taxonomy/ebird?species=cangoo', {
//   headers: {
//     'X-eBirdApiToken': API_TOKEN
//   }
// })
// .then((result) => {
//   var test = taxonomySplit(result.data)
//   console.log(test);
//   // setTax(result.data);
// })
// .catch(error => {
//   console.log('There was an error retrieving data from API, ', error);
// })


// <div style={{
//   width: '100%',
//   height: '350px',
//   backgroundImage: "url('https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')",
//   backgroundPosition: 'center',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
// }} ></div>