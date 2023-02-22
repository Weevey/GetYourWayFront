import React, { useState } from "react";
import data from "../data/airports.json";



const FlightSearchForm = () => {
  const [departureValue, setdepartureValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");
  const [departureSuggestions, setdepartureSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [dateValue, setDateValue] = useState("");
  const [passengersValue, setPassengersValue] = useState("");

  const handledepartureChange = (event) => {
    const value = event.target.value;
    setdepartureValue(value);
    const matches = data.filter((airport) => {
      const regex = new RegExp(`${value}`, "gi");

      // return airport.city.match(regex) || airport.code.match(regex);
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
    const departurelat = airport.lat;
    const departurelon = airport.lon;
    console.log(departurelat);
    console.log(departurelon);

    const leafletexportlatdeparture = parseFloat(departurelat);
    const leafletexportlondeparture = parseFloat(departurelon);

    const departure = [leafletexportlatdeparture, leafletexportlondeparture];
    console.log(departure);

    setdepartureSuggestions([]);
  };

  const handleDestinationSuggestionClick = (airport) => {
    setDestinationValue(airport.name);
    const destinationlat = airport.lat;
    const destinationlon = airport.lon;

    

    const leafletexportdestinationlat = parseFloat(destinationlat);
    const leafletexportdestinationlon = parseFloat(destinationlon);
    const destination = [
      leafletexportdestinationlat,
      leafletexportdestinationlon,
    ];

    console.log(destination);
    

    setDestinationSuggestions([]);
  };

  const handleDateChange = (event) => {
    setDateValue(event.target.value);
  };

  const handlePassengersChange = (event) => {
    setPassengersValue(event.target.value);
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
        value={dateValue}
        onChange={handleDateChange}
      />

      <label htmlFor="passengers-input">Passengers:</label>
      <input
        id="passengers-input"
        type="number"
        min="1"
        max="10"
        value={passengersValue}
        onChange={handlePassengersChange}
      />
      <br />
      <button>Search</button>
    </div>
  );
};

export const LeafletDepart = FlightSearchForm.departure;
export const LeafletDestination = FlightSearchForm.destination;

export default FlightSearchForm;
