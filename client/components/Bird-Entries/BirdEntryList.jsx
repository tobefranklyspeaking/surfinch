import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EntryItem from './EntryItem.jsx';

const BirdEntryList = ({birdEntries, handleCardClick}) => {

  return (
    <div className="bird-list d-flex flex-row">
      { birdEntries &&
        birdEntries.map(function(item, index) {
          return <EntryItem key={index} photo={item.birdpic_url} notes={item.notes} city={item.city_sighted} state={item.state_sighted} name={item.bird} handleCardClick={handleCardClick}/>
        })
      }
    </div>
  )
}

export default BirdEntryList;