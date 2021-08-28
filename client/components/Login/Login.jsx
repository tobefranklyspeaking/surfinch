import React, { useState } from 'react';
import Logo from '/public/Logo.png';
function Login() {

  let img = document.createElement('img');
  img.style = {
    height: '25%',
    width: '25%'
  }

  return (
    <div>
      <div>
        <div>Surfinch Top Bar</div>
      </div>
      <div className='login'>
          <div>LAWGIN</div>
          <div>Returning user? Please Login</div>
      </div>
      <div>
        <img src={Logo} width='20%' height='20%' alt='finch'/>
      </div>
    </div>
  )
}

export default Login;