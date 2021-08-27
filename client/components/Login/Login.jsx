import React, { useState } from 'react';

function Login() {

  return (
    <div>
      <header>
        <div>Surfinch</div>
      </header>
      <body>
        <div>
          <div>Please Login</div>
          <div>
            <div>Log in with Spring Social</div>
            <div>Log in with Google</div>
          </div>
          <div>New User?
            <a href='#'> Sign up! </a>
          </div>
        </div>
      </body>
    </div>
  )
}

export default Login;