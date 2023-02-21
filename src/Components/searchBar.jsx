import React from "react";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <label>{props.labelName}</label>
      <input
        className="search-field"
        type="text"
        placeholder="Search for flights..."
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
      <button className="search-button" onClick={props.onSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
