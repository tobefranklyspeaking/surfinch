<<<<<<< HEAD
import React, { useState, useContext } from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import routes from "./login/routes.js";
export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      <div className="App">
        <Router>

          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
=======
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
>>>>>>> eb8c04ddd7d319923e9b9bb099994752512cb8a0
  );
}
// const App = () => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
//       Is logged in? {JSON.stringify(isLoggedIn)}
//       <div>
//         <Router>
//           <Switch>

//           </Switch>
//         </Router>
//       </div>
//     </AuthContext.Provider>
//   );
// }

export default App;

{/* <Route exact path="/login">
<Login />
<Link to="/home">Home</Link>
</Route>
<Route>
<Link to="/login">Login</Link>
<Route exact path="/home">
  <Home />
</Route>
<Route path="/user-profile">
  {/* <User /> */}
// </Route>
// <Route path="/bird-entry">
//   {/* <BirdEntry /> */}
// </Route>
// <Route path="/bird-profile">
//   {/* <BirdProfile /> */}
// </Route>
// </Route> */}