import React, { useContext } from "react";
import { Card, Button, Image } from "react-bootstrap";
import { UserContext } from "../context/UserContext"; // para cerrar sesión
import { useNavigate } from "react-router-dom"; // para redirigir
import defaultProfile from "../assets/img/gloton.jpeg";


const Profile = () => {
  const { logout } = useContext(UserContext); // accede a logout del contexto
  const navigate = useNavigate(); // para redirigir

  const handleLogout = () => {
    logout(); // cambia el token a false
    navigate("/"); // redirige al Home
  };

 return (
    <Card className="text-center mt-5 mb-5 mx-auto shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Image
          src={defaultProfile}
          width={150}
          height={200}
          className="mb-3"
          alt="Imagen de perfil"
        />
        <Card.Title>Perfil de Usuario</Card.Title>
        <Card.Text>
          <strong>Email: Crazzypizzas@pizzamaniac.cl</strong>
        </Card.Text>
        <Button variant="danger" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;