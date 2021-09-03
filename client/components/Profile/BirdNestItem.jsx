import React from 'react';

import { AuthContext } from '../App.jsx';
import firebase from 'firebase';
require('firebase/auth');

const BirdNestItem = ({ bird }) => {
  const Auth = useContext(AuthContext);

  const handleBird = () => {
    setIndividualBird(bird);
  }

  return (
    <div className='bird-nest-item' onClick={handleBird} >
      <div className="card">
        <img src={bird.birdpic_url} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{bird.bird}</h5>
          <p className="card-text">{bird.state_sighted}</p>
          <a href="" className="btn btn-primary">Edit</a>
        </div>
      </div>
    </div>
  );

}

export default BirdNestItem;