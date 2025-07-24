<<<<<<< HEAD
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
=======
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext.jsx";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { user, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand fw-bold" to="/">
        🍕 Pizzería Mamma Mia!
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        {/* Menú principal alineado a la izquierda */}
        <ul className="navbar-nav me-auto d-flex gap-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              🏠 Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/pizza/p001">
              🍕 Pizzas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              🛒 Carrito
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/notfound">
              ❌ NotFound
            </Link>
          </li>
          {user?.isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  👤 Perfil
                </Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger btn-sm ms-2" onClick={logout}>
                  🔓 Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  🔐 Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  📝 Registro
                </Link>
              </li>
            </>
          )}
        </ul>

        {/* Total carrito alineado a la derecha */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="btn btn-outline-info btn-sm" to="/cart">
              🛒 Total: {total.toLocaleString("es-CL")}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
>>>>>>> master
