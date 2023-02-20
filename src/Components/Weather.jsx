import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react';
import axios from 'axios';

function Weather() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = () => {
    axios.get(`http://localhost:9090/weather/${searchTerm}`)
      .then(response => {
        setSearchResults(response.data.weather);
        console.log(response.data.weather);
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  };
  useEffect(() => {
    console.log('Search results updated:', searchResults);
  }, [searchResults]);
  return (
    <div>
      <label htmlFor="search-users">Check the weather:</label>
      <input type="text" id="search-users" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <div>
          <h2>The current temperature in {searchTerm} is: {searchResults}&#xb0;C</h2>
          <p></p>
          
          
        </div>)}
      </div>
  );
}


export default Weather;
