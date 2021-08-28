import React from 'react';
import Homepage from './Homepage/Homepage.jsx';
import NavBar from './Shared/NavBar.jsx';

const App = () => {
  return (
    <div className="main-container">
      {/* <h1>OKAY BOOTS ARE STRAPPED MY FRIENDS<span className="badge bg-secondary">New</span></h1>
      <h3>App is react-ive</h3>
      <h4>Dev branch BABYYYYY</h4> */}
      <NavBar/>
      <Homepage/>
    </div>
  );
}

export default App;