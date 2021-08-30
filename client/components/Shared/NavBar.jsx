import React, { useState, useEffect } from 'react';
import { Switch, Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <div className="nav-container d-flex">
      <div className="d-flex flex-column flex-shrink-0 bg-dark" style={{width: "4.5rem"}}>
        <a href="#" className="d-block p-3 link-dark text-decoration-none">LOGO</a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/home">Home</Link>
            {/* <a href="#" className="nav-link active py-3 border-bottom bg-dark"> */}
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </Switch>
          </li>
          <li>
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="user-profile">Profile</Link>
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </Switch>
          </li>
          <li>
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/birdEntry">New Bird Entry</Link>
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </Switch>
          </li>
          <li>
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/BirdProfile">Bird Profile </Link>
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </Switch>
          </li>
          <li>
            <Switch className="nav-link active py-3 border-bottom bg-dark">
              <Link to="/login">Log Out </Link>
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </Switch>
          </li>
        </ul>
        <div className="dropdown border-top">

        </div>
      </div>
    </div>
  )
}

export default NavBar;