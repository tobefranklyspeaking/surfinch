import React, { useState } from 'react';
import Logo from '/public/img/Logo.png';
import { googleProvider, facebookProvider, githubProvider } from './config/authMethods.js';
import socialMediaAuth from './config/auth.js';

function Login() {

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }

  const handleClick = async (provider) => {
    const res = awaitSocialMediaAuth(provider);
    console.log(res)
  }

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center bg-secondary'>
        <h1 className='text-white'>Surfinch Top Bar</h1>
      </div>
      <div >
          <div>LAWGIN</div>
          <button onClick={() => handleClick(googleProvider)}>Google</button>
          <button onClick={() => handleClick(facebookProvider)}>Facebook</button>
          <button onClick={() => handleClick(githubProvider)}>Github</button>
          <div>Returning user? Please Login</div>
      </div>
      <div className='d-flex justify-content-center'>
        <img src={Logo} width='20%' height='20%' alt='finch'/>
      </div>
    </div>
  )
}

export default Login;