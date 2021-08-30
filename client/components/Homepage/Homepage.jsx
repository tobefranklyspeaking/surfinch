import React, { useState, useEffect } from 'react';

import NavBar from '../Shared/NavBar.jsx';

const Homepage = (props) => {

  return (
    <div className="home-container d-flex">
      <div className="mini-home-container d-flex flex-column">
        <div className="mini-profile-container"></div>
        <div className="mini-info-container"></div>
      </div>
      <div className="mini-map-container"></div>
    </div>

  )
}

export default Homepage;