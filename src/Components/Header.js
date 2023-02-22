import React from "react";

import "../Components/css/fonts/sky-medium.woff2";
import "../Components/css/fonts/sky-regular.woff2";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header-style">  
    <Container fluid>  
    <Row>  
      <Col sm={12}><a href="/"><h1 className="gradient-text">GetYourWay</h1></a></Col>  
    </Row>  
  </Container>  
    </div>  


    // <header className="header-style"> 
    //   <div className="row">
    //     <a href="/">
    //       <h1 className="gradient-text">GetYourWay</h1>
    //     </a>
    //   </div>
    // </header>
  );
};

export default Header;
