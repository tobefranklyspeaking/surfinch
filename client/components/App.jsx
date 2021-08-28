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