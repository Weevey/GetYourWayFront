import React, { useState, useEffect } from "react";
import axios from "axios";
import { SERVER_URL } from "./constants";
import sunny from './Images/sunny.png';
import cloudy from './Images/cloudy.png';
import mist from './Images/mist.png';
import rain from './Images/rain.png';
import thunder from './Images/thunder.png';
import { Col, Card, Row } from 'react-bootstrap';
import snow from './Images/snow.png';


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
    "Thunderstorm": thunder,
    "snow": snow
    }
  }

  return (
  //   <Container className="SearchResultBox">
  //     <row className="SearchResultBox">
  //     <Col xs={12} md={4}> <p>Flight Duration: {flightDuration}</p> </Col>
  //     <Col xs={12} md={4}> <p>Flight Price: ${flightPrice}</p></Col>
  //     <Col xs={12} md={4}> <img src={weatherInfo.object[clouds]} className="weatherIcon"/>
  //       <p>
  //           {temperature}&#xb0;C
  //       </p></Col>
  // </row>
  //   </Container>
  <Row className="SearchResultBox">
  <Col xs={12} md={4}>
        <Card>
        <div className="text-center">
          
          </div>
          <Card.Body>
          <strong><Card.Title className="text-center gradient-text">Destination</Card.Title></strong>
            <Card.Text className="text-center">
            Flight Duration: {flightDuration}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
        <div className="text-center">
          
          </div>
          <Card.Body>
          <strong><Card.Title className="text-center gradient-text">Cheapest Price</Card.Title></strong>
            <Card.Text className="text-center">
            ${flightPrice}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} md={4}>
        <Card>
        <div className="text-center">
          
          </div>
          <Card.Body>
          <strong><Card.Title className="text-center gradient-text">Weather</Card.Title></strong>
            <Card.Text className="text-center">
            {temperature}&#xb0;C
            <img src={weatherInfo.object[clouds]} className="weatherIcon"/>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      </Row>
      
  );
}

export default Weather;