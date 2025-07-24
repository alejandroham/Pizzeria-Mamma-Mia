<<<<<<< HEAD
import React, { useState } from "react";

const Register = () => {
=======
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { Navigate } from "react-router-dom";
import fondo from "../assets/img/comparte.jpg";

const Register = () => {
  const { user } = useContext(UserContext);
>>>>>>> master
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nombreError, setNombreError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [matchError, setMatchError] = useState(false);

<<<<<<< HEAD
  const validarInput = (e) => {
    e.preventDefault();

    // Resetear errores
=======
  // Redirige si ya está autenticado
  if (user.isAuthenticated === true) {
    return <Navigate to="/" replace />;
  }

  const validarInput = (e) => {
    e.preventDefault();

>>>>>>> master
    setNombreError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setMatchError(false);

    let hasError = false;

    if (!nombre) {
      setNombreError(true);
      hasError = true;
    }
<<<<<<< HEAD

=======
>>>>>>> master
    if (!email) {
      setEmailError(true);
      hasError = true;
    }
<<<<<<< HEAD

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError(true);
      hasError = true;
    }

=======
    if (!password || password.length < 6) {
      setPasswordError(true);
      hasError = true;
    }
>>>>>>> master
    if (!confirmPassword) {
      setConfirmPasswordError(true);
      hasError = true;
    } else if (password !== confirmPassword) {
      setMatchError(true);
      hasError = true;
    }

    if (!hasError) {
      alert("Formulario enviado con éxito");
<<<<<<< HEAD
      // Aquí podrías hacer algo más, como enviar los datos a una API
=======
>>>>>>> master
    }
  };

  return (
<<<<<<< HEAD
    <form onSubmit={validarInput}>
  <div className="container mt-5">
    <h3 className="text-center mb-4">Formulario de Registro</h3>
    
    <div className="row justify-content-center">
      <div className="col-md-6"> {/* Aquí controlas el tamaño */}
=======
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <form
        onSubmit={validarInput}
        style={{ backgroundColor: "rgba(255,255,255,0.9)", padding: "2rem", borderRadius: "10px", maxWidth: "500px", width: "100%" }}
      >
        <h3 className="text-center mb-4">Formulario de Registro</h3>

>>>>>>> master
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre Apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {nombreError && <p className="error">Debes ingresar tu Nombre</p>}
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">Debes ingresar tu email</p>}
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">Contraseña obligatoria (mínimo 6 caracteres)</p>}
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {confirmPasswordError && <p className="error">Debes confirmar tu contraseña</p>}
          {matchError && <p className="error">Las contraseñas no coinciden</p>}
        </div>

        <div className="text-end mt-2 mb-3">
          <button className="btn btn-dark" type="submit">
            Enviar
          </button>
        </div>
<<<<<<< HEAD
        <div class="span"></div>
      </div>
    </div>
  </div>
</form>

=======
      </form>
    </div>
>>>>>>> master
  );
};

export default Register;
