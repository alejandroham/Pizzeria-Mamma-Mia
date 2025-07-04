import React from "react";
import { Link } from "react-router-dom";
import cryingPizza from "../assets/img/pizzatriste.png"; 
import { Container, Row, Col, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="display-4 mb-4">404 - Página no encontrada</h1>
          <img
            src={cryingPizza}
            alt="Pizza llorando"
            className="img-fluid mb-4"
            style={{ maxWidth: "300px" }}
          />
          <p className="lead mb-4">
            ¡Oops! Esta pizza no encontró lo que buscaba...
          </p>
          <Link to="/">
            <Button variant="danger">Volver al inicio</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;