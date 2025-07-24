import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import fondo from "../assets/img/comparte.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useContext(UserContext);
  const navigate = useNavigate();

  // Redirige si ya está autenticado
  if (user.isAuthenticated === true) {
    return <Navigate to="/" replace />;
  }

  const validarInput = (e) => {
    e.preventDefault();
    if (!email || password.length < 6) return;

    login(email, "Usuario"); // Puedes usar un nombre real si lo tienes
    navigate("/");
  };

  return (
  <div
    style={{
      backgroundImage: `url(${fondo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
    }}
    className="d-flex justify-content-center align-items-center"
  >
    <div
      className="card p-4 shadow"
      style={{
        maxWidth: "400px",
        width: "100%",
        backdropFilter: "blur(5px)",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
    >
      <h2 className="mb-4 text-center">Iniciar Sesión</h2>
      <form onSubmit={validarInput}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            id="password"
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Ingresar</button>
      </form>
    </div>
  </div>
);

};

export default Login;