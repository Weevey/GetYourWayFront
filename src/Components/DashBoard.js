import React, { useState } from "react";
import Weather from "./Weather";
import MapTitle from "./MapTitle";
import Map from "./Map";
import SearchBar from "./searchBar";
import { Col, Row, Container } from "react-bootstrap";
import FlightSearchForm from "./FlightSearch";

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
        {/* <div className="search-container">
          <Container fluid>
            <Row>
              <Col md={4}>
                <SearchBar labelName="Start Destination" />
              </Col>
              <Col md={4}>
                <SearchBar labelName="End Destination" />
              </Col>
              <Col md={4}>
                <SearchBar labelName="End Destination" />
              </Col>
            </Row>
          </Container>
        </div> */}

        <Container fluid>
          <Row>


            <Col md={12}>
            <FlightSearchForm />
            </Col>

          </Row>
        </Container>

        <Container fluid>
          <Row>
            <MapTitle />
          </Row>
        </Container>
        <Container fluid>

          <Map departValue={departValue} destinationValue={destinationValue} />
          <br />
          <FlightSearchForm
            onDepartChange={onDepartChange}
            onDestinationChange={onDestinationChange} //passing down onchange
          />

         
          

        </Container>
      </div>
      <Row>
        <br />
      </Row>
    </div>
  );
};

export default DashBoard;
