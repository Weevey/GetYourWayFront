import "./App.css";
import SearchBar from "./Components/searchBar";
import Header from "./Components/Header";
import Map from "./Components/Map";
import MapTitle from "./Components/MapTitle";
import Weather from "./Components/Weather";
<<<<<<< HEAD

import { Col, Row, Container } from "react-bootstrap";
=======
import Login from "./Components/Login";
>>>>>>> feature-SecurityWeather

function App() {
  return (
    <>
      <Header />
      <Row>
        <br></br>
      </Row>
      <div className="App-body">
<<<<<<< HEAD
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
            <Row><MapTitle /></Row>
            </Container>
            <Container fluid>
        <Map />
        </Container>
=======
        <div className="search-container">
          {/* <SearchBar labelName="Start Destination" />
          <SearchBar labelName="End Destination" /> */}
        </div>
        <Login />
        {/* <Weather />
        <MapTitle />
        <Map /> */}
>>>>>>> feature-SecurityWeather
      </div>
      <Row>
        <br></br>
      </Row>


    </>
  );
}

export default App;
