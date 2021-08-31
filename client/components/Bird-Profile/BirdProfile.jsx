import React, { useState, useEffect } from 'react';


const BirdProfile = () => {

  return (
    <div>
      <div>This is a birddddddd</div>
      <img src='https://images.unsplash.com/photo-1613891188927-14c2774fb8d7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' className="img-fluid. max-width: auto; height: auto;" alt="Responsive image"></img>
      <h3>Bird Name</h3>
      <div><p>Bird info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p></div>
      <div><p>Notes: I like this bird alot, its really cool! </p></div>
    </div>
  );
}

export default BirdProfile;