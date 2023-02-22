import React, { useState } from "react";
import data from "../data/airports.json";
import Weather from "./Weather";
import axios from "axios";

const FlightSearchForm = ({ onDepartChange, onDestinationChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [departureValue, setdepartureValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");
  const [departureSuggestions, setdepartureSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  // Information from user interactions and called into the axon request.
  const [flightDate, setFlightDate] = useState("");
  const [flightAdultCount, setFlightAdultCount] = useState("");
  const [flightDepartureCode, setFlightDepartureCode] = useState("");
  const [flightDestinationCode, setFlightDestinationCode] = useState("");
  // end section.
  
   

  const handledepartureChange = (event) => {
    const value = event.target.value;
    setdepartureValue(value);
    const matches = data.filter((airport) => {
      const regex = new RegExp(`${value}`, "gi");

      return airport.name.match(regex) || airport.code.match(regex);
    });
    setdepartureSuggestions(matches.slice(0, 5)); // limit to first 5 matches
  };

  const handleDestinationChange = (event) => {
    const value = event.target.value;
    setDestinationValue(value);

    const matches = data.filter((airport) => {
      const regex = new RegExp(`${value}`, "gi");
      return airport.name.match(regex) || airport.code.match(regex);
    });
    setDestinationSuggestions(matches.slice(0, 5)); // limit to first 5 matches
  };

  const handledepartureSuggestionClick = (airport) => {
    setdepartureValue(airport.name);
    setFlightDepartureCode(airport.code);
    const departurelat = airport.lat;
    const departurelon = airport.lon;
    const leafletexportlatdeparture = parseFloat(departurelat);
    const leafletexportlondeparture = parseFloat(departurelon);
    const departure = [leafletexportlatdeparture, leafletexportlondeparture];
    onDepartChange(departure); // added JG

   

    setdepartureSuggestions([]);
  };

  const handleDestinationSuggestionClick = (airport) => {
    setDestinationValue(airport.name);
    setFlightDestinationCode(airport.code);
    const destinationlat = airport.lat;
    const destinationlon = airport.lon;

    const leafletexportdestinationlat = parseFloat(destinationlat);
    const leafletexportdestinationlon = parseFloat(destinationlon);
    const destination = [
      leafletexportdestinationlat,
      leafletexportdestinationlon,
    ];

    onDestinationChange(destination); // added JG
    console.log(destination);

    setSearchTerm(airport.city);

    setDestinationSuggestions([]);
  };

  const handleDateChange = (event) => {
    setFlightDate(event.target.value);
  };

  const handlePassengersChange = (event) => {
    setFlightAdultCount(event.target.value);
  };

  const handleSearch = () => {
    const token = sessionStorage.getItem("jwt");
    const url = "http://18.132.251.114:9090/flight";

    const payload = {
      departure: flightDepartureCode,
      destination: flightDestinationCode,
      date: flightDate,
      adults: flightAdultCount,
    };

    axios
      .post(url, payload, { headers: { Authorization: token } })
      .then((response) => {
        console.log(response.data);
        console.log(payload);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
    <label htmlFor="departure-input">Departure:</label>
    <input
      id="departure-input"
      type="text"
      value={departureValue}
      onChange={handledepartureChange}
    />
    {departureSuggestions.length > 0 && (
      <ul>
        {departureSuggestions.map((airport) => (
          <li
            key={airport.code}
            onClick={() => handledepartureSuggestionClick(airport)}
          >
            {airport.name} ({airport.code})
          </li>
        ))}
      </ul>
    )}

    <label htmlFor="destination-input">Destination:</label>
    <input
      id="destination-input"
      type="text"
      value={destinationValue}
      onChange={handleDestinationChange}
    />
    {destinationSuggestions.length > 0 && (
      <ul>
        {destinationSuggestions.map((airport) => (
          <li
            key={airport.code}
            onClick={() => handleDestinationSuggestionClick(airport)}
          >
            {airport.name} ({airport.code})
          </li>
        ))}
      </ul>
    )}

    <label htmlFor="date-input">Date:</label>
    <input
      id="date-input"
      type="date"
      value={flightDate}
      onChange={handleDateChange}
    />

    <label htmlFor="passengers-input">Passengers:</label>
    <input
      id="passengers-input"
      type="number"
      min="1"
      max="10"
      value={flightAdultCount}
      onChange={handlePassengersChange}
    />
    <br />
    <button onClick={handleSearch}>Search</button>
    {searchTerm && <Weather searchTerm={searchTerm} />}
  </div>
  );
};

export const WeatherCity = FlightSearchForm.WeatherCity;
export let searchCity = FlightSearchForm.searCity;

export default FlightSearchForm;
