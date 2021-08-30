import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

//PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import Profile from './Profile/Profile.jsx'
// import BirdEntry from './birdEntries/CreateBirdForm.jsx'
import BirdProfile from './Bird-Profile/BirdProfile.jsx'

const App = () => {
  // SET IS LOGGED IN TO TRUE TO ACCESS PAGES OTHER THAN LOGIN/SIGNUP
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});


  return (
    <div className="main-container">
      <Router>
        {isLoggedIn && <NavBar />}
        <div className="page-container">
          <Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/home">
              <Homepage />
            </Route>
            <Route path="/user-profile">
              <Profile />
            </Route>
            {/* <Route path="/bird-entry">
              <BirdEntry />
            </Route> */}
            <Route path="/BirdProfile">
              <BirdProfile />
            </Route>
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;