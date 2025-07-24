<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { useNavigate, Navigate } from "react-router-dom";
import fondo from "../assets/img/comparte.jpg";
>>>>>>> master

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
<<<<<<< HEAD

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [matchError, setMatchError] = useState(false);

  const validarInput = (e) => {
    e.preventDefault();

    // Resetear errores
    setEmailError(false);
    setPasswordError(false);
    setMatchError(false);

    let hasError = false;



    if (!email) {
      setEmailError(true);
      hasError = true;
    }

    if (!password) {
      setPasswordError(true);
      hasError = true;
    } else if (password.length < 6) {
      setPasswordError(true);
      hasError = true;
    }

    if (!hasError) {
      alert("Formulario enviado con éxito");
      // Aquí podrías hacer algo más, como enviar los datos a una API
    }
  };

  return (
    <form onSubmit={validarInput}>
  <div className="container mt-5">
    <h3 className="text mb-4">Login</h3>
    
    <div className="row justify-content-center">
      <div className="col-md-6"> 
    
        <div className="mb-3">
          <input
=======
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
>>>>>>> master
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
<<<<<<< HEAD
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">Debes ingresar tu email</p>}
        </div>

        <div className="mb-3">
          <input
=======
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input
            id="password"
>>>>>>> master
            type="password"
            className="form-control"
            placeholder="Contraseña"
            value={password}
<<<<<<< HEAD
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">Contraseña obligatoria (mínimo 6 caracteres)</p>}
          {matchError && <p className="error">La contraseña no coincide, Reintenta</p>}
        </div>

        <div className="text-end mt-2 mb-3">
          <button className="btn btn-dark" type="submit">
            Enviar
          </button>
        </div>
        <div class="span"></div>
      </div>
    </div>
  </div>
</form>

  );
};

export default Login;
=======
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
>>>>>>> master
