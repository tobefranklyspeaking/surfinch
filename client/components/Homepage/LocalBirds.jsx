import React from 'react';

const LocalBirds = ({top10Birds}) => {
  return (
    <>
      {top10Birds.map((bird) => {
        return (
          <div className="local-bird">
            <p className="toobig">{bird.comName}</p>
            <p><i>({bird.sciName})</i></p>
          </div>
        )
      })}
    </>
  )
}

export default LocalBirds;