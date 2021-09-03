import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Map from '.././Shared/Map.jsx';
import { compileCoordinates } from './coordinates.js';
import { GOOGLE_TOKEN } from '../../../config.js';
import { EBIRD_TOKEN } from '../../../config.js';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const BirdProfile = (props) => {
  const [bird, setBird] = useState([]);
  const [location, setLocation] = useState([]);
  const [notes, setNotes] = useState([]);
  const [taxonomy, setTax] = useState('');
  //boolean flag indicators **************
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(true);
  const [map, setMap] = useState(false);
  const [button, setButton] = useState(false);

  const regionCode = props.region || "RI";
  const speciesCode = props.species || "cangoo";
  const birdName = props.birdName || "Branta canadensis";
  const user = props.userID || 1;

  // //get recent observation of bird
  useEffect(() => {
    axios.get(`https://api.ebird.org/v2/data/obs/US-${regionCode}/recent/${speciesCode}`, {
      headers: {
        'X-eBirdApiToken': EBIRD_TOKEN
      }
    })
      .then((result) => {
        var result2 = compileCoordinates(result.data);
        // console.log('lats and longs', result2)
        setLocation(result2);
        setBird(result.data);
      })
      .catch(error => { console.log('There was an error retrieving data from API, ', error); })
  }, [])

  //get bird info
  useEffect(() => {
    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
      action: "query",
      list: "search",
      srsearch: `${birdName}`,
      format: "json"
    };
    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    axios.get(url)
      .then((result) => {
        var data = result.data.query.search[0].snippet
        var text = data.replace(/(<([^>]+)>)/ig, '')
        setTax(text);
      })
      .catch((error) => { console.log('error from Wiki api', error) });
  }, [])


  //get user notes
  // useEffect(() => {
  //   axios.get(`/userbirds/${user}`)
  //   .then((result) => {
  //     console.log(result);
  //     // setNotes(result)
  //   })
  //   .catch(error => {
  //     consol.log('There was an error retrieving notes from DB', error)
  //   })
  // }, [notes])

  const handleClick = (event) => {
    event.preventDefault();
    setShow(!show);
    setPhoto(false);
    setMap(false);
  }

  const handleMap = (event) => {
    event.preventDefault();
    setMap(!map)
    setShow(false);
    setPhoto(false)
  }

  const handlePhoto = (event) => {
    event.preventDefault();
    setPhoto(true);
    setMap(false)
    setShow(false);
    setButton(!button);
  }



  return (
    <div className='birdProfileContainer'>
      <div className='birdBio'>
        <h1 className='birdTitle'>Canada Goose</h1>
        <h3 className='scientific'><em>Branta canadensis</em> </h3>
        <small>| General Information |</small>
        <div className='paragraphBird'>
          {taxonomy ? <p>{taxonomy}...click here for more</p> : null}
        </div>
      </div>
      <div className="secondRowBP">
        <div className="buttonSquad">
          {!show ?
            <button className='downButton' onClick={event => handleClick(event)}>Notes <FaAngleRight size="25px" /></button> : <button className='downButton' onClick={event => handleClick(event)}>Notes <FaAngleLeft size="25px" /></button>}
          {!map ?
            <button className="downButton" onClick={event => handleMap(event)}>Heat Map <FaAngleRight size="25px" /></button> : <button className="downButton" onClick={event => handleMap(event)}>Heat Map <FaAngleLeft size="25px" /></button>}
          {!button ?
            <button className="downButton" onClick={event => handlePhoto(event)}>Photo <FaAngleRight size="25px" /></button> : <button className="downButton" onClick={event => handlePhoto(event)}>Photo <FaAngleLeft size="25px" /></button>}
        </div>
        <div className="viewer">
          {photo ? <div className='birdProfilePic'>
            <img src='https://images.unsplash.com/photo-1451493683580-9ec8db457610?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGlhbiUyMGdvb3NlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt="canada goose"></img>
          </div> : null}
          {map ? <div className='heatMap'>
            <Map styleHeight={40} styleWidth={40} defaultZoom={ 7 } defaultCenter={{ lat: location[0][0], lng: location[0][1] }} heatMap={location} />
          </div> : null}
          {show ? <div className="birdNotes">
            <h4 className='notesTitle'> My Notes</h4>
            <hr className="dash"></hr>
            <p className='notesText'>YOOOO, WOW LOVE THIS BIRD OMG! SO GREAT! CANADA GOOSE! LETS GO BABY!</p>
          </div> : null}
        </div>
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
