import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../App.jsx';
import firebase from 'firebase';
require('firebase/auth');

const BirdNestItem = ({ bird }) => {
  const Auth = useContext(AuthContext);
  let history = useHistory();

  console.log('oh lord', Auth.allBirds)

  const handleBird = (e) => {
    Auth.setIndividualBird(bird);
    history.push('/update-bird-form');
  }

  return (
    <div className='bird-nest-item' >
      <div className="card">
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