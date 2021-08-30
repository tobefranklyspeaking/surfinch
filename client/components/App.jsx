import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import * as firebase from 'firebase';
// import firebaseConfig from '/client/components/Login/firebase.config.js';

// SHARED COMPONENTS
import NavBar from './Shared/NavBar.jsx';

//PAGE COMPONENTS
import Homepage from './Homepage/Homepage.jsx';
import Login from './Login/Login.jsx';
import Profile from './Profile/Profile.jsx'
import BirdEntry from './Bird-Entries/BirdEntry.jsx'
import BirdProfile from './Bird-Profile/BirdProfile.jsx'

// firebase.initilizeApp(firebaseConfig);

// export const AuthContext = React.createContext(null);

// console.log(firebase)

const App = () => {
  // SET IS LOGGED IN TO TRUE TO ACCESS PAGES OTHER THAN LOGIN/SIGNUP
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});


  return (
    // <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
    // Is logged in? {JSON.stringify(isLoggedIn)}
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
            <Route path="/bird-entry">
              <BirdEntry />
            </Route>
            <Route path="/BirdProfile">
              <BirdProfile />
            </Route>
          </Route>
        </div>
      </Router>
    </div>
    // </AuthContext.Provider>
  );
}

export default App;