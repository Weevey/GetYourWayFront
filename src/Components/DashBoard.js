import React from "react";
import Weather from "./Weather";
import MapTitle from "./MapTitle";
import Map from "./Map";
import SearchBar from "./searchBar";

const DashBoard = () => {
  return (
    <div className="App-body">
      <div className="search-container">
        <SearchBar labelName="Start Destination" />
        <SearchBar labelName="End Destination" />
      </div>
      <Weather />
      <MapTitle />
      <Map />
    </div>
  );
};

export default DashBoard;
