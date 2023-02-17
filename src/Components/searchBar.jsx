import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        className="search-field"
        type="text"
        placeholder="Search for flights..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <button className="search-button" onClick={props.onSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;