import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App.jsx';
import firebase from 'firebase';
import Region from '../Shared/RegionCode.js';
require('firebase/auth');

const BirdNestItem = ({ bird }) => {
  const Auth = useContext(AuthContext);
  let history = useHistory();

  var speciesCode;
  var regionCode;
  var commonName;
  var scientific;

  const getBirdFormData = () => {
    console.log('Searched');
    const isThere = (entry) => entry.comName.toLowerCase().includes(bird.bird.toLowerCase().replace(' ', ''));
    var index = Auth.allBirds.findIndex(isThere);

    speciesCode = Auth.allBirds[index].speciesCode;
    commonName = Auth.allBirds[index].comName;
    scientific = Auth.allBirds[index].sciName;
    regionCode = Region[bird.state_sighted];
  }

  getBirdFormData();

  const handleBird = (e) => {
    Auth.setIndividualBird(bird);
    history.push('/update-bird-form');
  }

  const sendBird = () => {
    Auth.setBirdRequest({
      regionCode: regionCode,
      speciesCode: speciesCode,
      commonName: commonName,
      scientific: scientific,
      pic: bird.birdpic_url,
      notes: bird.notes
    });
    history.push('/BirdProfile');
  }

  return (
    <div className='bird-nest-item' >
      <div className="card"
        onClick={sendBird}>
        <img src={bird.birdpic_url} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{bird.bird}</h5>
          <p className="card-text">{bird.state_sighted}</p>
          <button onClick={handleBird} className="btn btn-primary">Edit</button>
        </div>
      </div>
    </div>
  );

}

export default BirdNestItem;