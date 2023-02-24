import React, { useState } from "react";

import MapTitle from "./MapTitle";
import Map from "./Map";

import { Col, Row, Container } from "react-bootstrap";
import FlightSearchForm from "./FlightSearch";
import MovieCards from "./movieLocation";
import Footer from "./Footer";

const DashBoard = ({ logout }) => {
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
        <button
          className="logout-button"
          variant="outlined"
          color="primary"
          onClick={logout}
        >
          LOG OUT
        </button>
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
      <br></br>
      <Row></Row>
      <Container fluid>
        <MovieCards />
        <br></br>
      </Container>
      <br></br>

      <Footer />
    </div>
  );
};

export default DashBoard;
