import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Avatar from '../Shared/Avatar.jsx';
import NavBar from '../Shared/NavBar.jsx';
import Map from '../Shared/Map.jsx';
import LocalBirds from './LocalBirds.jsx';
import { EBIRD_TOKEN } from '/config';

const Homepage = ({currentUser, location}) => {
  //var fakeData = [{ pic: 'URL', name: 'Parrot' }, { pic: 'URL', name: 'Crane' }, { pic: 'URL', name: 'Eagle' }];
  const [top10Birds, setTop10Birds] = useState([]);
  const [top10Loc, setTop10Loc] = useState([]);

  const sampleLocbirddata = [
    {
        speciesCode: "rthhum",
        comName: "Ruby-throated Hummingbird",
        sciName: "Archilochus colubris",
        locId: "L9682819",
        locName: "7211 McKamy Boulevard, Dallas, Texas, US (32.984, -96.782)",
        obsDt: "2021-09-01 17:36",
        howMany: 1,
        coordinates: [32.9836112, -96.7820043],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94050257"
    },
    {
        speciesCode: "yebcuc",
        comName: "Yellow-billed Cuckoo",
        sciName: "Coccyzus americanus",
        locId: "L1935350",
        locName: "Back Yard",
        obsDt: "2021-09-01 14:45",
        howMany: 1,
        coordinates: [32.8006406, -96.7647243],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94044366"
    },
    {
        speciesCode: "eursta",
        comName: "European Starling",
        sciName: "Sturnus vulgaris",
        locId: "L16065128",
        locName: "El Centro Campus Dallas College",
        obsDt: "2021-09-01 10:48",
        howMany: 1,
        coordinates: [32.7802336, -96.8061208],
        obsValid: true,
        obsReviewed: false,
        locationPrivate: true,
        subId: "S94032980"
    }]

  // const propz = useSpring({
  //   to: { opacity: 1, marginTop: 0 },
  //   from: { opacity: 0, marginTop: 150 },
  //   config: { duration: 2000 },
  //   reset: true,
  //   // delay: 1500,
  // })

  useEffect(() => {
    axios.get(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${parseFloat(location.lat)}&lng=${parseFloat(location.lng)}&sort=date`, {
      headers: {
        'X-eBirdApiToken': EBIRD_TOKEN
      }})
      .then((result) => {
        //console.log('BIRD!!!', result.data);
        let top10 = result.data.slice(0, 10);
        setTop10Birds(top10);
        console.log(top10);
        let temp = [];
        top10.map((bird) => {
          temp.push({
            speciesCode: bird.speciesCode,
            comName: bird.comName,
            sciName: bird.sciName,
            locId: bird.locId,
            locName: bird.locName,
            obsDt: bird.obsDt,
            howMany: bird.howMany,
            coordinates: [bird.lat, bird.lng],
            obsValid: bird.obsValid,
            obsReviewed: bird.obsReviewed,
            locationPrivate: bird.locationPrivate,
            subId: bird.subId
        });
        })
        console.log('BIRD DATA FOR PINS', temp);
        setTop10Loc(temp);
      })
      .catch((err) => {
        console.log('wah', err);
      })
  }, [location])



  console.log('here', currentUser);

  return (
    <div className="home-container">
      <div className="mini-home-container">
        <div className="mini-profile-container">
        <div className="usericon topbirdersicon">
        <Avatar className="usericon topbirdersicon" size={75} color='#c8994d' />
        </div>
          <h2>Welcome, {currentUser.username}! Thanks for flyin in today!</h2>
          <div>more info go here</div>
        </div>
        <div className="mini-map-container">
          <Map styleWidth={40} styleHeight={40} defaultCenter={{ lat: parseFloat(location.lat), lng: parseFloat(location.lng) }} defaultZoom={7} localBirdsMarkers={top10Loc}/>
          <div className="birds-nearby-container">
            <LocalBirds top10Birds={top10Birds}/>
          </div>
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
