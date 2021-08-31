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
    <div className='container-fluid'>
      <div className='d-flex justify-content-center bg-secondary'>
        <h1 className='text-white'>Surfinch Top Bar</h1>
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
          <button className="googleBtn" type="button">
            <img
              src={"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"}
              alt="logo"
            />
            Login With Google
          </button>
          <button type="submit">Login</button>
          <span>{error}</span>
        </form>
      </div>
      <div className='d-flex justify-content-center'>
        <img src={Logo} width='20%' height='20%' alt='finch' />
      </div>
    </div>
  )
}

export default Login;