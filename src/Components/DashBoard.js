import React, { useState } from "react";
import Weather from "./Weather";
import MapTitle from "./MapTitle";
import Map from "./Map";
import SearchBar from "./searchBar";
import { Col, Row, Container } from "react-bootstrap";
import FlightSearchForm from "./FlightSearch";
import MovieCards from "./movieLocation";

const DashBoard = () => {
  const [departValue, setDepartValue] = useState([55.4, 0.2]); // default
  const [destinationValue, setDestinationValue] = useState([55.4, 0.2]); // default

  const onDepartChange = (value) => {
    //oninput change function
    console.log("On Input Change called");
    setDepartValue(value); // setinput value
  };

  const onDestinationChange = (value) => {
    //oninput change function
    console.log("On Input Change called");
    setDestinationValue(value); // setinput value
  };

  return (
    <div>
      <Row>
        <br></br>
      </Row>
      <div className="App-body">
        <Container fluid>
          <Row>
            
            <FlightSearchForm
            onDepartChange={onDepartChange}
            onDestinationChange={onDestinationChange} //passing down onchange
          />
            
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <MapTitle />
          </Row>
        </Container>
        <Container fluid>
          <Map departValue={departValue} destinationValue={destinationValue} />
          
        </Container>
      </div>
      <Row>
        <br /> <br />
      </Row>
      <Container fluid>
      <MovieCards />
      </Container>
     
    </div>
  );
};

export default DashBoard;
