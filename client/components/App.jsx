import React, { useState, createContext, useEffect } from 'react';
import { HashRouter as Router, Switch, Route, Link, useHistory, Redirect } from "react-router-dom";
let firebase = require('firebase/app');
import { firebaseConfig } from '/client/components/Login/firebase.config.js';

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

// PRIVATE ROUTES
// import PrivateRoute from "./PrivateRoute.jsx"

// PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import SignUp from './Login/SignUp.jsx';
import Profile from './Profile/Profile.jsx'
import BirdEntry from './Bird-Entries/BirdEntry.jsx'
import BirdProfile from './Bird-Profile/BirdProfile.jsx'

firebase.default.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const history = useHistory();

  useEffect(() => {
    console.log('state update rerender');
  }, [isLoggedIn])

  const redirect = () => {
    history.push('/home')
  }


  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, currentUser, setCurrentUser }}>
      <div className="boolean">
        {JSON.stringify(isLoggedIn)}
      </div>
      <div className="main-container">
        <Router>
          {isLoggedIn && <NavBar />}
          <div className="page-container">
            <Route>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/home" component={Homepage} />
              <Route path="/user-profile" component={Profile} />
              <Route path="/bird-entry" component={BirdEntry} />
              <Route path="/BirdProfile" component={BirdProfile} />
            </Route>
          </div>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;