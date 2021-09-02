import React from 'react';
import { Switch, Link } from 'react-router-dom';

const LocalBirds = ({top10Birds}) => {
  return (
    <>
      {top10Birds.map((bird) => {
        return (
          <div className="local-bird">
             <a onClick={() => {}}>
               <Switch><Link to="/birdProfile">
                 <p className="toobig">{bird.comName}</p>
                 <p className="smol"><i>({bird.sciName})</i></p>
               </Link></Switch>
              </a>
          </div>
        )
      })}
    </>
  )
}

export default LocalBirds;