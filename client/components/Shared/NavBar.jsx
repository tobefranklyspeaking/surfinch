import React, { useState, useEffect } from 'react';

const NavBar = (props) => {
  return (
    <div className="nav-container d-flex">
      <div className="d-flex flex-column flex-shrink-0 bg-dark" style={{width: "4.5rem"}}>
        <a href="#" className="d-block p-3 link-dark text-decoration-none">LOGO</a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <a href="#" className="nav-link active py-3 border-bottom bg-dark">
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </a>
            <a href="#" className="nav-link active py-3 border-bottom bg-dark">
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </a>
            <a href="#" className="nav-link active py-3 border-bottom bg-dark">
              <svg className="bi" width="24" height="24" role="img" aria-label="Home">
              </svg>
            </a>
          </li>
        </ul>
        <div className="dropdown border-top">

        </div>
      </div>
    </div>
  )
}

export default NavBar;