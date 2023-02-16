import React from 'react';

function SearchBar(props) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for flights..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <button onClick={props.onSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;