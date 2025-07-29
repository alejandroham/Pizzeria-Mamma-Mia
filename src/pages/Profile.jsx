import React from "react";
import { Card, Button, Image } from "react-bootstrap";
import defaultProfile from "../assets/img/gloton.jpeg";

const Profile = ({ userEmail, userImage, onLogout }) => {
  return (
    <Card className="text-center mt-5 mb-5 mx-auto shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Image
          src={userImage || defaultProfile}
          
          width={150}
          height={200}
          className="mb-3"
          alt="Imagen de perfil"
        />
        <Card.Title>Perfil de Usuario</Card.Title>
        <Card.Text>
          <strong>Email: Crazzypizzas@pizzamaniac.cl</strong> {userEmail}
        </Card.Text>
        <Button variant="danger" onClick={onLogout}>
          Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
