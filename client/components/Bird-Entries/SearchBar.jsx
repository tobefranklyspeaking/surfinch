import React from 'react';

const SearchBar = ({handleSearchBarChange}) => {
  return (
    <div>
      <label htmlFor="">Search</label>
      <input type="text" onChange={handleSearchBarChange} />
      <input type="submit" />
    </div>
  )
}

export default SearchBar;