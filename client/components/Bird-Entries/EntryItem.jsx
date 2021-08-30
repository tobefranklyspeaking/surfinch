import React from 'react';

const EntryItem = ({ photo, notes, city, state, name }) => {
  return (
    <div className="d-flex">
      <div>
        <img height='150' width='150' src={photo} className="rounded" />
      </div>
      <div>
        <p>{name}</p>
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
