import React, { useState, useContext, useEffect } from 'react';
import Logo from '/public/img/Logo.png';
import SignUp from './SignUp.jsx';
import { AuthContext } from '../App.jsx';
import { Link, Switch, useHistory } from 'react-router-dom';
import firebase from 'firebase';
require('firebase/auth');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const Auth = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      Auth.setCurrentUser(user);
    })
    return unsubscribe;
  }, [])


  const handleForm = e => {
    e.preventDefault();
    firebase
      .auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setError("");
        setLoading(true);
        Auth.setLoggedIn(true);
        history.push('/home');
      })
      .catch((err) => {
        setError(err.message)
      });

    setLoading(false);
  };

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }


  return (
    <div className='loginContainer'>
      <div className="headerLogin">
        {/* <h2 className='text-white'>Surfinch</h2> */}
      </div>
      <div className='secondaryContainerLogin'>
        {error && <div className="alert" role="alert">
          Failed to login: {error}
        </div>}
        <div className="centerLogo">
          <div className="logoLogin">
          <h2 className='text-white'>SURFINCH</h2>
            <img src="https://i.imgur.com/6pDMm0T.png" width='20%' height='20%' alt='finch' />
          </div>
          <div className="loginBox">
            <div className="loginTitle">
              <h3 className="loginText">Login</h3>
            </div>
            <div className="loginFormContainer">
              <form className='loginForm' onSubmit={e => handleForm(e)}>
                <small className="smallText">Your Email</small>
                <input className="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                />
                <small className="smallText">Your Password</small>
                <input className="passwordInput"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                />
                <hr />
                <button className="googleBtn" type="button">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="logo"
                  />
                  <div className="withGoogle">Login With Google</div>
                </button>
                <button className="loginSubmit" disabled={loading} type="submit">Login</button>
              </form>
            </div>
            <div>
              <Link to="/SignUp">
                <button className="signUp" type="button">
                  New User?
                </button>
              </Link>
            </div>
          </div>
        </div>
        <small className="poweredBY">Powered by: Team Kauri </small>
      </div>
    </div>
  )
}

export default Login;