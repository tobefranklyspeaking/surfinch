import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../App.jsx';
require('firebase/auth');

import Avatar from '../Shared/Avatar.jsx';
import NavBar from '../Shared/NavBar.jsx';
import Map from '../Shared/Map.jsx';

var auth = 'pk.d7d064c84a94d6bb8ce9a8fbca7cc4d0';

const Homepage = (props) => {
  const Auth = useContext(AuthContext);
  const [birdEntries, setBirdEntries] = useState([]);

  var fakeData = [{ pic: 'URL', name: 'Parrot' }, { pic: 'URL', name: 'Crane' }, { pic: 'URL', name: 'Eagle' }];
  console.log(Auth);
  console.log('uuuussaaahhhh', Auth.currentUser);

  // useEffect(() => {
  //   //console.log(currentUser)
  //   navigator.geolocation.getCurrentPosition((position) => {

  //     var lat = position.coords.latitude.toString();
  //     var lon = position.coords.longitude.toString();

  //     axios.get(`https://us1.locationiq.com/v1/reverse.php?key=${auth}&lat=${lat}&lon=${lon}&format=json`)
  //       .then(results => {
  //         console.log('location results', results.data)
  //         // setStreet(results.data.address.house_number + " " + results.data.address.road);
  //         // setCity(results.data.address.city);
  //         // setSt(results.data.address.state);
  //       })
  //       .catch(error => { console.log('errr', error); });

  //   });
  //   axios.get(`/entries/${props.currentUser.userID}`)
  //     .then(results => { setBirdEntries(results.data); console.log('user bird stuff?', results.data)})
  // }, []);

  // const propz = useSpring({
  //   to: { opacity: 1, marginTop: 0 },
  //   from: { opacity: 0, marginTop: 150 },
  //   config: { duration: 2000 },
  //   reset: true,
  //   // delay: 1500,
  // })

  return (
    <div className="home-container">
      <div className="mini-home-container">
        <div className="mini-profile-container">
        <div className="usericon topbirdersicon">
        <Avatar className="usericon topbirdersicon" size={75} color='#c8994d' />
        </div>
          <h2>Welcome, {Auth.currentUser.displayName}! Thanks for flyin in today!</h2>
          <div>more info go here</div>
        </div>
        <div className="mini-map-container">
          <Map styleWidth={60} styleHeight={40} />
        </div>
        </div>
        <div className="mini-info-container">
          <h3 className="toptitle">TOP BIRD WATCHERS</h3>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag1">Mr. Raymonds</div>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag2">Smitty</div>
          <div className="topbirdersicon">
            <Avatar size={75} color='#c8994d' />
          </div>
          <div className="descriptiontag3">Regionald</div>
        </div>
    </div>
  )
}

export default Homepage;

/*
<div><Map styleWidth={50} styleHeight={50} userMarkers={sampleFriendData} heatMap={heatData}/></div>

const sampleFriendData = [{
    bird_name: "red bird",
    bird_notes: "looks cool",
    bird_pics: "string",
    coordinates: [32.822376, -96.807374]
  },
  {
    bird_name: "blue bird",
    bird_notes: "has blue wings",
    bird_pics: "string",
    coordinates: [32.820989, -96.791009]
  }];

  const heatData = [[32.7769, -96.7970], [32.7767, -96.7970], [32.7790, -96.7970], [32.7794, -96.7970]];
*/