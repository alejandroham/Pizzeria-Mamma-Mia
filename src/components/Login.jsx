import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
