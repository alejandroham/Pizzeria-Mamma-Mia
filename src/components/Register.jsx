import React, { useState } from "react";

const Register = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nombreError, setNombreError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [matchError, setMatchError] = useState(false);

  const validarInput = (e) => {
    e.preventDefault();

    // Resetear errores
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

    if (!confirmPassword) {
      setConfirmPasswordError(true);
      hasError = true;
    } else if (password !== confirmPassword) {
      setMatchError(true);
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
    <h3 className="text-center mb-4">Formulario de Registro</h3>
    
    <div className="row justify-content-center">
      <div className="col-md-6"> {/* Aquí controlas el tamaño */}
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
        <div class="span"></div>
      </div>
    </div>
  </div>
</form>

  );
};

export default Register;
