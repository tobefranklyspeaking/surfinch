import React, { useState, useContext } from 'react';
import Logo from '/public/img/Logo.png';
import Join from './Join.jsx';
// import { AuthContext } from "../App.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  // const Auth = useContext(AuthContext);
  // const handleForm = e => {
  //   e.preventDefault();
  //   console.log(Auth);
  //   Auth.setLoggedIn(true);
  // };

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }

  return (
    <div className='loginContainer'>
      <div className="headerLogin">
        <h1 className='text-white'>Surfinch</h1>
      </div>
      <div className='secondaryContainerLogin'>
        <div className="loginBox">
          <div className="loginTitle">
            <h3 className="loginText">Login</h3>
            {/* {error && <div className="alert alert-danger" role="alert">
            Failed to login: {error} */}
          </div>
          <div className="loginFormContainer">
            <form className='loginForm' onSubmit={e => handleForm(e)}>
              <small className="smallText">Your Email</small>
              <input className="emailInput"
                value={email}
                onChange={e => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="email"
              />
              <small className="smallText">Your Password</small>
              <input className="passwordInput"
                onChange={e => setPassword(e.target.value)}
                name="password"
                value={password}
                type="password"
                placeholder="password"
              />
              <hr />
              <button className="googleBtn" type="button">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="logo"
                />
                <div className="withGoogle">Login With Google</div>
              </button>
              <button className="loginSubmit" type="submit">Login</button>
              <span>{error}</span>
            </form>
          </div>
          <a>Sign Up</a>
        </div>
        {/* <div className='d-flex justify-content-center'>
          <img src="https://i.imgur.com/Cqy7EEY.png" width='20%' height='20%' alt='finch' />
        </div> */}
      </div>
    </div>
  )
}

export default Login;