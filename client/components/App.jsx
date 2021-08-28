import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

//PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import Profile from './Profile/Profile.jsx'
//import BirdEntry from './??.jsx'
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Homepage} />
            <Route path="/user-profile" component={Profile} />
            {/*<Route path="/bird-entry" component={BirdEntry} /> */}
            <Route path="/BirdProfile" component={BirdProfile} />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;