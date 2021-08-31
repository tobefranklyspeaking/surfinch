import React, { useState, useContext } from "react";
import { AuthContext } from "../App.jsx";
import { Link, useHistory } from 'react-router-dom';
import firebase from 'firebase';
require('firebase/auth');


const SignUp = (props) => {
  const Auth = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setErrors] = useState('');


  const handleForm = (e, provider) => {
    e.preventDefault();
    if (provider) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          console.log(res.user);
          history.push('/login');
          return res.user;
        })
        .catch(err => console.log('error'));
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            let user = { 'email': email, 'name': name };
            console.log(user);
            Auth.setLoggedIn(true);
            props.setCurrentUser(user);
            history.push('/login');
            return res.user;
          }
        })
    }
    Auth.setLoggedIn(true);
  };


  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={handleForm}>
          Register
        </button>
        <div>
          Already have an account? <Link to="/login">Login</Link> now.
        </div>
      </div>
    </div>
  );
};

export default SignUp;