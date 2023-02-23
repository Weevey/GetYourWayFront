import React, { useState } from "react";
import Weather from "./Weather";
import MapTitle from "./MapTitle";
import Map from "./Map";
import SearchBar from "./searchBar";
import { Col, Row, Container } from "react-bootstrap";
import FlightSearchForm from "./FlightSearch";

const DashBoard = () => {

  return (
    <div>
      <Row>
        <br></br>
      </Row>
      <div className="App-body">
        <Container fluid>
          <Row>
            <Col md={12}>
            <FlightSearchForm
             //passing down onchange
          />
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <MapTitle />
          </Row>
        </Container>
        <Container fluid>
          
          
        </Container>
      </div>
      <Row>
        <br />
      </Row>
    </div>
  );
};

export default DashBoard;
