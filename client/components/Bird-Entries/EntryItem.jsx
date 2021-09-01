import React from 'react';

const EntryItem = ({ photo, notes, city, state, name }) => {
  return (
    <div className="d-flex card" style={{width: '14rem'}}>

      <div className="card-header text-center font-weight-bold">{name}</div>
      <div className="card-img-top" style={{ width: "222px", height:"180px", overflow: 'hidden', backgroundImage: `url(.${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <img src={photo} className="card-img-top" /> */}
      </div>
      <div>
        <p>
          {
            city &&
            <span>{city}, </span>
          }
          {state}
        </p>
        <p>{notes}</p>
      </div>
    </div>
  )
}

export default EntryItem;
