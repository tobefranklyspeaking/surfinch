import React from 'react';

const SearchBar = ({ handleSearchBarChange }) => {
  return (
    <form action="">
      <div className="form-group row">
        {/* <label className="control-label" htmlFor="">Search</label> */}
        <div className="col-9">
          <input className="form-control" type="text" onChange={handleSearchBarChange} />
        </div>
        <div className="col-3">
          <input className="form-control" type="submit" value="Search" />
        </div>
      </div>
    </form>
  )
}

export default SearchBar;