import React from 'react';

import Homepage from './Homepage/Homepage.jsx';
import NavBar from './Shared/NavBar.jsx';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './login/Login.jsx';
import Home from './home/Home.jsx'
// import User from './??.jsx'
// import BirdEntry from './??.jsx'
import BirdProfile from './Bird-Profile/BirdProfile.jsx'

const App = () => {
  return (
    <div className="main-container">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Link to="/home">Home</Link>
            <Login />
          </Route>
          <Route>
            <Link to="/login">Login</Link>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/user-profile">
              {/* <User /> */}
            </Route>
            <Route path="/bird-entry">
              {/* <BirdEntry /> */}
            </Route>
            <Link to="/BirdProfile">Bird Profile</Link>
            <Route path="/BirdProfile">
              <BirdProfile />
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;