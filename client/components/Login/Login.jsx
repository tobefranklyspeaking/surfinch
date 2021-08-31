import React, { useState, useContext } from 'react';
import Logo from '/public/img/Logo.png';
import SignUp from './SignUp.jsx';
import { AuthContext } from '../App.jsx';
import { Link, Switch, useHistory } from 'react-router-dom';
let firebase = require('firebase/app');

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setErrors] = useState('');

  let history = useHistory();

  const Auth = useContext(AuthContext);


  const handleForm = e => {
    e.preventDefault();
    console.log(Auth);
    Auth.setLoggedIn(true);
    history.push('/home')
  };

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }


  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center bg-secondary'>
        <h1 className='text-white'>Surfinch</h1>
      </div>
      <div >
        <h1>Login</h1>
        <form onSubmit={e => handleForm(e)}>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
          />
          <input
            onChange={e => setPassword(e.target.value)}
            name="password"
            value={password}
            type="password"
            placeholder="password"
          />
          <hr />
          <button type="submit">Login</button>
          <Switch>
            <Link to="/SignUp">
              <button type="button">
                New User?
              </button>
            </Link>
          </Switch>
          <span>{error}</span>
        </form>
      </div>
      {/* <div className='d-flex justify-content-center'> */}
      {/* <img src={Logo} width='20%' height='20%' alt='finch' /> */}
      {/* </div> */}
    </div>
  )
}

export default Login;