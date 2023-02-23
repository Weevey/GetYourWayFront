import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "./constants";
import sunny from './Images/sunny.png';
import cloudy from './Images/cloudy.png';
import mist from './Images/mist.png';
import rain from './Images/rain.png';
import thunder from './Images/thunder.png';


function Weather({ searchTerm, flightDuration, flightPrice}) {
  const [searchResults, setSearchResults] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [clouds, setClouds] = useState("");

  const token = sessionStorage.getItem("jwt");

  const handleSearch = () => {
    axios
      .get(SERVER_URL + `weather/${searchTerm}`, {
        headers: { Authorization: token },
      })
      .then((response) => {
        setSearchResults(response.data.weather);
        setTemperature(response.data.Temperature);
        setClouds(response.data.Weather.main);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  };
  
  useEffect(() => {
    console.log("Search results updated:", searchResults);
  }, [searchResults]);
  
  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  const weatherInfo = {
    "object": {
    "Clouds": cloudy,
    "Clear": sunny,
    "Mist": mist,
    "Rain": rain,
    "Thunderstorm": thunder
    }
  }

  return (
    <div >
        <p>Flight Duration: {flightDuration}</p> 
        <p>Flight Price: ${flightPrice}</p>
        <img src={weatherInfo.object[clouds]} className="weatherIcon"/>
        <p>
            {temperature}&#xb0;C
        </p>
    </div>
  );
}

export default Weather;