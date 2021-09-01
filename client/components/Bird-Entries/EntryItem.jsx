import React from 'react';

const EntryItem = ({ photo, notes, city, state, name, handleCardClick }) => {
  return (
    <div className="d-flex card mx-2" style={{width: '14rem', minWidth: '14rem'}} onClick={handleCardClick}data-birdname={name}>

      <div data-birdname={name} className="card-header text-center font-weight-bold">{name}</div>
      <div data-birdname={name} className="card-img-top" style={{ width: "222px", height:"180px", overflow: 'hidden', backgroundImage: `url(.${photo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <img src={photo} className="card-img-top" /> */}
      </div>
      <div data-birdname={name}>
        <p data-birdname={name}>
          {
            city &&
            <span>{city}, </span>
          }
          {state}
        </p>
        <p data-birdname={name}>{notes}</p>
      </div>
    </div>
  )
}

export default EntryItem;
