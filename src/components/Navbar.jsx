import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartContext } from "../context/CartContext"; // llama al CartContext


const CustomNavbar = () => {
  const token = false; // Cambiar a true para simular login
  const {total} = React.useContext(CartContext); // Obtiene el total del carrito desde el contexto

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-warning px-3">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-2">
          <Link to="/" className="btn btn-sm btn-outline-warning">🍕 Home</Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-sm btn-outline-warning">🔓 Perfil</Link>
              <Link to="/logout" className="btn btn-sm btn-outline-warning">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm btn-outline-warning">🔐 Login</Link>
              <Link to="/register" className="btn btn-sm btn-outline-warning">📝 Registro</Link>
            </>
          )}

          <Link to="/pizza/p001" className="btn btn-sm btn-outline-warning">🍕 Pizza</Link>
          <Link to="/cart" className="btn btn-sm btn-outline-warning">🛒 Carrito</Link>
          <Link to="/notfound" className="btn btn-sm btn-outline-warning">❌ NotFound</Link>
        </Nav>

        <Nav>
          <Link to="/cart" className="btn btn-sm btn-outline-info">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
