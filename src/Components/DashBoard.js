import React from "react";
import Weather from "./Weather";
import MapTitle from "./MapTitle";
import Map from "./Map";
import SearchBar from "./searchBar";
import { Col, Row, Container } from "react-bootstrap";

const DashBoard = () => {
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
              <Weather />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <MapTitle />
          </Row>
        </Container>
        <Container fluid>
          <Map />
        </Container>
      </div>
      <Row>
        <br></br>
      </Row>
    </div>
  );
};

export default DashBoard;
