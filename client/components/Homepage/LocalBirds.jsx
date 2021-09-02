import React from 'react';

const LocalBirds = ({top10Birds}) => {
  return (
    <>
      {top10Birds.map((bird) => {
        return (
          <div className="local-bird">
            <h4>{bird.comName}</h4>
            <p><i>({bird.sciName})</i></p>
          </div>
        )
      })}
    </>
  )
}

export default LocalBirds;