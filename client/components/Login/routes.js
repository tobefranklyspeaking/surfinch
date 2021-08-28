import React from 'react';
import Login from './Login.jsx';
import Home from '../home/Home.jsx'
// import User from '../??.jsx'
// import BirdEntry from '../??.jsx'
// import BirdProfile from '../??.jsx'

const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
]

export default routes;