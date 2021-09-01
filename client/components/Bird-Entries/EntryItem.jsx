import React from 'react';

const EntryItem = ({ photo, notes, city, state, name }) => {
  return (
    <div className=" card p-0 mb-2" style={{ width: '100%' }}>
      <div className="card-header text-center">
        {name}
      </div>

      <div className="d-flex flex-row">
        <div className="" style={{ width: "100px", height: "100px", margin: '', overflow: 'hidden', backgroundImage: `url(${photo})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}>
          {/* <img src={photo} className="card-img-top" /> */}
        </div>
        <div className="text-right">
          {/* <p>{name}</p> */}
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
    </div>
  )
}

export default EntryItem;
