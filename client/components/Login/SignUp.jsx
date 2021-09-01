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
  const [passConfirm, setPassConfirm] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)


  const handleForm = (e, provider) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    console.log(name);
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
        .then(res => {
          if (res.user) {
            let user = { 'email': email, 'name': name };
            console.log(res.user);
            Auth.setCurrentUser(user.name);
            history.push('/login');
            console.log('inside create', name)
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
    <div className='loginContainer'>
      <div className="headerLogin">
        <h2 className='text-white'>Surfinch</h2>
        {/* <img src="https://i.imgur.com/Cqy7EEY.png" width='20%' height='20%' alt='finch' /> */}
      </div>
      <div className='secondaryContainerLogin'>
        {error && <div className="alert" role="alert">
          Failed to sign up: {error}
        </div>}
        <div className="loginBox">
          <div className="loginTitle">
            <h3 className="loginText">Create Account</h3>
          </div>
          <div className="loginFormContainer">
            <form className='loginForm' onSubmit={e => handleForm(e)}>
              <small className="smallText">Full Name</small>
              <input className="emailInput"
                value={email}
                onChange={(e) => setName(e.target.value)}
              />
              <small className="smallText">Your Email</small>
              <input className="passwordInput"
                onChange={(e) => setEmail(e.target.value)}
                value={password}
              />
              <small className="smallText">Your Password</small>
              <input className="passwordInput"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type='password'
              />
              <small className="smallText">Confirm Password</small>
              <input className="passwordInput"
                onChange={(e) => setPassConfirm(e.target.value)}
                value={password}
                type='password'
              />
              <hr />
              <div className="buttonContainer">
                {/* <button className="googleBtn" type="button">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                  />
                  <div className="withGoogle">Sign Up With Google</div>
                </button> */}
                <button className="loginSubmit" disabled={loading} type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div>
            <Link to="/Login">
              <button className="signUp" type="button">
                Back to Login?
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>

  );
};

export default SignUp;