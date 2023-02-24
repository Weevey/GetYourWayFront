import React, { useState } from "react";
import data from "../data/airports.json";
import Weather from "./Weather";
import axios from "axios";
import loadingcircle from "../Components/Images/loadingcircle.svg";
import { Row, Col, Form, Button } from "react-bootstrap";
import inspirebtnimage from './Images/inspirebutton.png'

const FlightSearchForm = ({ onDepartChange, onDestinationChange }) => {
  // Search term is updated in handleDestinationSuggestionClick to be the airport.city
  const [searchTerm, setSearchTerm] = useState("");
  // end section.
  const [departureValue, setdepartureValue] = useState("");
  const [destinationValue, setDestinationValue] = useState("");
  const [departureSuggestions, setdepartureSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

  const [flightPrice, setFlightPrice] = useState("");
  const [flightDuration, setFlightDuration] = useState("");

  // States from user interactions and called into the axon request.
  const [flightDate, setFlightDate] = useState("");
  const [flightAdultCount, setFlightAdultCount] = useState("");
  const [flightDepartureCode, setFlightDepartureCode] = useState("");
  const [flightDestinationCode, setFlightDestinationCode] = useState("");
  // end section.

  // state for flight data loading message
  const [isLoading, setIsLoading] = useState();
  //state for flight error catching
  const [flightError, setFlightError] = useState("");

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
    //  These update the values of the states at the top of the page when a user clicks a suggested airport.
    setdepartureValue(airport.name);
    setFlightDepartureCode(airport.code);
    // Comment end

    const departurelat = airport.lat;
    const departurelon = airport.lon;
    const leafletexportlatdeparture = parseFloat(departurelat);
    const leafletexportlondeparture = parseFloat(departurelon);
    const departure = [leafletexportlatdeparture, leafletexportlondeparture];
    onDepartChange(departure); // added JG

    setdepartureSuggestions([]);
  };

  const handleDestinationSuggestionClick = (airport) => {
    //  These update the values of the states at the top of the page when a user clicks a suggested airport.
    setDestinationValue(airport.name);
    setFlightDestinationCode(airport.code);
    //  Comment end
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
    // searchTerm is passed into Weather.jsx underneath form button click.
    setSearchTerm(airport.city);

    setDestinationSuggestions([]);
  };

  const handleDateChange = (event) => {
    //  This updates the values of the states at the top of the page, using 'OnChange' in the form element.
    setFlightDate(event.target.value);
  };

  const handlePassengersChange = (event) => {
    //  This updates the values of the states at the top of the page, using 'OnChange' in the form element.
    setFlightAdultCount(event.target.value);
  };
  const handleClear = () => {
    setFlightDate("");
    setdepartureValue("");
    setDestinationValue("");
    setFlightAdultCount("");
    setSearchTerm("");
    setFlightDuration("");
    setFlightPrice("");
    setFlightError("");
  };

  const handleinspireBLL = () => { 

    setFlightDate("2023-03-25");
    setdepartureValue("London Gatwick Airport");
    setDestinationValue("Monterey Peninsula Airport");
    setFlightAdultCount("1");
    setSearchTerm("Monterey");
  };

  const handleinspireChernobyl = () => { 

    setFlightDate("2023-04-02");
    setdepartureValue("London Gatwick Airport");
    setDestinationValue("Vilnius Airport");
    setFlightAdultCount("1");
    setSearchTerm("Vilnius");
  };

  const handleinspireBillions = () => { 

    setFlightDate("2023-02-28");
    setdepartureValue("London Gatwick Airport");
    setDestinationValue("John F Kennedy International Airport");
    setFlightAdultCount("1");
    setSearchTerm("New York");
  };
  // This is run when the user clicks the for button. It processes the API request.
  const handleSearch = () => {
    // The setIsLoading is set to true and displays message
    setFlightError("");
    setIsLoading(true);
    const token = sessionStorage.getItem("jwt");
    const url = "http://18.132.251.114:9090/flight";

    // This data is taken from the states at the top of the page and submits as a JSON structure.
    const payload = {
      departure: flightDepartureCode,
      destination: flightDestinationCode,
      date: flightDate,
      adults: flightAdultCount,
    };
    // Comment end

    axios
      .post(url, payload, { headers: { Authorization: token } })
      .then((response) => {
        console.log(response.data);
        console.log(response.data.price);
        console.log(response.data.duration);

        setFlightPrice(response.data.price);
        setFlightDuration(response.data.duration);
        // The setIsLoading is set to false and hides the message
        setIsLoading(false);

        console.log(payload);
        // Console log an error if the response is empty.
        if (response.data.length === 0) {
          setFlightError("No Flights Available");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // The return element consists of a user form which updates the relevant states as users interact with it.
  // The submit button beings the API call for flight data.
  return (
    
    <div>
    <div class="container-fluid inspirecontainer">
  <Row className=" align-items-center">
  <Col xs={12} md={4}>
    <button className="inspireme" nClick={handleinspireBLL}><img src={inspirebtnimage} width="50px" /><p>Inspire Me Big</p> <p>Little Lies</p></button>
    </Col>
    <Col xs={12} md={4}>
    <button className="inspireme" onClick={handleinspireChernobyl}><img src={inspirebtnimage} width="50px" /><p>Inspire Me</p><p>Chernobyl</p></button>
    </Col>
    <Col xs={12} md={4}>
    <button className="inspireme" onClick={handleinspireBillions}><img src={inspirebtnimage} width="50px"/><p>Inspire Me</p><p>Billions</p></button>
    </Col>
  </Row>
</div>
      <Form>
        <Row className="justify-content-center">
          <Form.Group as={Col} sm={3} controlId="departure-input">
            <Form.Label>Departure:</Form.Label>
            <Form.Control
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
          </Form.Group>
          <Form.Group as={Col} sm={3} controlId="destination-input">
            <Form.Label>Destination:</Form.Label>
            <Form.Control
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
          </Form.Group>

          <Form.Group as={Col} sm={3} controlId="date-input">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              value={flightDate}
              onChange={handleDateChange}
            />
          </Form.Group>

          <Form.Group as={Col} sm={3} controlId="passengers-input">
            <Form.Label>Passengers:</Form.Label>
            <Form.Control
              type="number"
              min="1"
              max="9"
              value={flightAdultCount}
              onChange={handlePassengersChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <br></br>
          <Col sm={4} className="d-flex my-2"></Col>
          <Col sm={2} className="d-flex mx-2">
            <Button className="mx-2" onClick={handleSearch}>
              Search
            </Button>
          </Col>
          <Col sm={2} className="d-flex mx-2">
            <Button className="mx-2" onClick={handleClear}>
              Clear
            </Button>
          </Col>
          <Col sm={4} className="d-flex my-2"></Col>
        </Row>
      </Form>
      <h2 className="gradient-text">
        <strong>{flightError}</strong>
      </h2>

      {/* Conditional rendering statement.Checks if 'searchTerm' is true or not, if true the component will be rendered passing in 'searchTerm prop'. */}
      <br />

      {isLoading ? (
        <img
          src={loadingcircle}
          alt="Loading..."
          style={{
            display: "block",
            margin: "auto",
            height: "50px",
            width: "50px",
          }}
        />
      ) : (
        flightDuration && (
          <Weather
            searchTerm={searchTerm}
            flightDuration={flightDuration}
            flightPrice={flightPrice}
            flighterror={flightError}
          />
        )
      )}

      {/* {flightDuration && <Weather searchTerm={searchTerm} flightDuration={flightDuration} flightPrice={flightPrice}/>} */}
    </div>
  );
};

export const WeatherCity = FlightSearchForm.WeatherCity;
export let searchCity = FlightSearchForm.searCity;

export default FlightSearchForm;
