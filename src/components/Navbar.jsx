import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const CustomNavbar = () => {
  const { total } = React.useContext(CartContext); // Total del carrito
  const { token, logout } = React.useContext(UserContext); //  Esto lee el token real

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="border-bottom border-warning px-3"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          Pizzería Mamma Mia!
        </Navbar.Brand>

        <Nav className="d-flex align-items-center gap-2">
          <Link to="/" className="btn btn-sm btn-outline-warning">
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-sm btn-outline-warning">
                🔓 Perfil
              </Link>
              <button
                onClick={logout}
                className="btn btn-sm btn-outline-warning"
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm btn-outline-warning">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-outline-warning">
                📝 Registro
              </Link>
            </>
          )}

          <Link to="/pizza/p001" className="btn btn-sm btn-outline-warning">
            🍕 Pizza
          </Link>
          <Link to="/cart" className="btn btn-sm btn-outline-warning">
            🛒 Carrito
          </Link>
          <Link to="/notfound" className="btn btn-sm btn-outline-warning">
            ❌ NotFound
          </Link>
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
