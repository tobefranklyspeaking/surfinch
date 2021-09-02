import React, { useState, useContext } from "react";
import { AuthContext } from "../App.jsx";
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase/app';
require('firebase/auth');
import axios from 'axios';


const SignUp = (props) => {
  const Auth = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);


  const handleForm = (e, provider) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    if (provider) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .currentUser(name)
        .then(res => {
          history.push('/login');
          console.log('inside create', name)
          return res.user.updateProfile({
            displayName: name
          })
        })
        .catch(err => {
          setError(err.message)
        });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .currentUser(name)
        .then(res => {
          if (res.user) {
            // WE NEED TO ADD THE AVATAR FUNCTIONALITY HERE
            let user = { 'email': email, 'name': name, pic: '' };
            axios.post('/newUser', user)
              .then((result) => {
                user.userId = result.data.insertId;
                console.log('AWH YEAH', user);
                Auth.setCurrentUser(user);
              })
              .catch((err) => console.log('signup err', err))
            history.push('/login');
            return res.user.updateProfile({
              displayName: name
            })
          }
        })
        .catch(err => {
          setError(err.message)
        });
    }
    setLoading(false)
  };


  return (
    <div className="signUpContainer">
      <div className="signUpHeader">
        <img src="https://i.imgur.com/6pDMm0T.png" width='20px' height='30px' alt='finch' />
      </div>
      <div className="signUpBlock">
        {error && <div className="registerAlert" role="alert">
          Failed to create account: {error}
        </div>}
        <div className="register">
          <h4 className="signUpText">Sign Up</h4>
          <input
            type="text"
            className="registerInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
          <input
            type="text"
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="registerInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input
            type="password"
            className="registerInput"
            value={passConfirm}
            onChange={(e) => setPassConfirm(e.target.value)}
            placeholder="Verify Password"
          />
          <button disabled={loading} className="registerBtn" type="submit" onClick={handleForm}>
            Register
          </button>
          <div className="AccountLink">
            Already have an account? <Link to="/login">Login</Link> now.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;