import React, { useState, useEffect } from 'react';

import NavBar from '../Shared/NavBar.jsx';

const Homepage = (props) => {

  //PROPS.CURRENTUSER WILL HAVE LOTS OF INFO 4 U

  return (
    <div className="home-container">
      <div className="mini-home-container">
        <div className="mini-profile-container">
        <div className="usericon topbirdersicon"></div>
          <h2>Welcome, user! Thanks for flyin in today!</h2>
          <div>more info go here</div>
        </div>
        <div className="mini-info-container">
          <h3 className="toptitle">TOP BIRD WATCHERS</h3>
          <div className="topbirdersicon"></div>
          <div className="topbirdersicon"></div>
          <div className="topbirdersicon"></div>
          <div className="topbirdersicon"></div>
        </div>
      </div>
      <div className="mini-map-container">
        <div>Mappity map map</div>
      </div>
    </div>
  )
}

export default Homepage;