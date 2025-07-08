import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext"; // llama al CartContext

const Navigation = () => {
  const token = false; // Cambiar a true para probar estado logueado y ver los enlaces de perfil y logout saluditos :D
    const {total} = React.useContext(CartContext); // Obtiene el total del carrito desde el contexto

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="border-bottom border-warning px-3">
      <Container fluid className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
            Pizzería Mamma Mia!
          </Navbar.Brand>

          <Button variant="outline-warning" size="sm" as={Link} to="/">
            🍕 Home
          </Button>

          {token ? (
            <>
              <Button variant="outline-warning" size="sm" as={Link} to="/Profile">
                🔓 Perfil
              </Button>
              <Button variant="outline-warning" size="sm">
                🔒 Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline-warning" size="sm" as={Link} to="/login">
                🔐 Login
              </Button>
              <Button variant="outline-warning" size="sm" as={Link} to="/Register">
                📝 Registro
              </Button>
            </>
          )}

          {/* Enlaces adicionales (opcional) */}
          <Button variant="outline-warning" size="sm" as={Link} to="/pizza/p001">
            🍕 Pizza
          </Button>
          <Button variant="outline-warning" size="sm" as={Link} to="/Cart">
            🛒 Carrito
          </Button>
          <Button variant="outline-warning" size="sm" as={Link} to="/NotFound">
            ❌ NotFound
          </Button>
        </div>

        <Button variant="outline-info" size="sm" as={Link} to="/Cart">
          🛒 Total: {total.toLocaleString("es-CL")}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Navigation;
