import React from 'react';
import { HashRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Login from './login/Login.jsx';
import Home from './home/Home.jsx'
// import User from './??.jsx'
// import BirdEntry from './??.jsx'
// import BirdProfile from './??.jsx'

const App = () => {
  return (
    <div>
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
            <Route path="/bird-profile">
              {/* <BirdProfile /> */}
            </Route>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;