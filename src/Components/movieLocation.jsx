import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';






const movies = [
  {
    title: 'Chernobyl',
    imageSrc: 'https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_7CA2383A-FE74-4130-8DED-7114D7556C3E_2021-4-6-T11-48-45.jpg?s=160x228',
    filmingLocation: "VILNIUS"
  },
  {
    title: 'Riviera',
    imageSrc: 'https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_22C19AC8-1FB8-4B27-83AA-20C1B09E7C85_2019-4-29-T10-31-52.jpg?s=160x228',
    filmingLocation: "COTE D'AZUR"
  },
  {
    title: 'Billions',
    imageSrc: 'https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_5D035166-ECB5-47B3-A979-75D9D1E4FC4D_2022-12-22-T11-30-21.jpg?s=160x228',
    filmingLocation: 'NEW YORK'
  },
  {
    title: 'Big Little Lies',
    imageSrc: 'https://images.store.sky.com/api/img/asset/en/66D8BB8A-E4E8-4422-9242-603110084545_FE60C03E-3443-4954-BEFE-1CB2B3487DA2_2022-5-16-T9-41-7.jpg?s=160x228',
    filmingLocation: 'MONTEREY'
  }
];


const MovieCards = () => {
  return (
   
    <Row className="justify-content-center align-items-center">
      <Col xs={12} md={2}></Col>
    {movies.map(movie => (
      <Col xs={12} md={2} key={movie.title}>
        <Card>
        <div className="text-center">
          <Card.Img className="mx-auto" variant="top" src={movie.imageSrc} />
          </div>
          <Card.Body>
          <strong><Card.Title className="text-center gradient-text">{movie.title}</Card.Title></strong>
            <Card.Text className="text-center">
              Filming Location: 
            </Card.Text>
            <Card.Text className="text-center">
            <strong>{movie.filmingLocation}</strong>
            </Card.Text>
      
          </Card.Body>
        </Card>
      </Col>
    ))}
    <Col xs={12} md={2}></Col>
  </Row>
  );
};

export default MovieCards;

