import React, { useContext } from 'react';
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from './App.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const Auth = useContext(AuthContext);
  const { isLoggedIn } = Auth;

  return (
    <Route
      {...rest}
      render={props => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}

export default PrivateRoute;