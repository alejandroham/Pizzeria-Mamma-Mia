// Profile.jsx
import React, { useContext, useEffect, useState } from "react";
import { Card, Button, Image } from "react-bootstrap";
import defaultProfile from "../assets/img/gloton.jpeg";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, logout, getProfile } = useContext(UserContext);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile();
        setProfileData(data);
      } catch (err) {
        console.error("Error al obtener perfil:", err);
      }
    };

    if (user.isAuthenticated) fetchProfile();
  }, [user, getProfile]);

  if (!user.isAuthenticated) {
    return <p className="text-center mt-5">❌ No estás autenticado</p>;
  }

  return (
    <Card className="text-center mt-5 mb-5 mx-auto shadow" style={{ maxWidth: "400px" }}>
      <Card.Body>
        <Image
          src={profileData?.image || defaultProfile}
          width={150}
          height={200}
          className="mb-3"
          alt="Imagen de perfil"
        />
        <Card.Title>Perfil de Usuario</Card.Title>
        <Card.Text>
          <strong>Email:</strong> {profileData?.email || user.email}
        </Card.Text>
        <Button variant="danger" onClick={logout}>
          Cerrar sesión
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Profile;
