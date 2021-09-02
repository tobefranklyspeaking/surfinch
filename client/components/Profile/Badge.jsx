import React from 'react';

const Badge = ({ title, color }) => {



  return (
    <span className={`badge rounded-pill ${color}`}>{title}</span>
  );



}

export default Badge;