import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(UserContext);
  const navigate = useNavigate(); // Para redirigir después del registro
  const [form, setForm] = useState({
    nombre: "",
    fechaNacimiento: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await register(form); // Llama al contexto
      alert("✅ Registro exitoso");
      navigate("/profile"); // Redirige automáticamente a Profile
    } catch (err) {
      console.error("Register error:", err);
      const msg = err?.message || "Error al registrar usuario";
      setError(`❌ ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Crear Cuenta</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fechaNacimiento" className="form-label">Fecha de nacimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={form.fechaNacimiento}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="ejemplo@correo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Crea una contraseña segura"
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-success" disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span className="ms-2">Registrando...</span>
                      </>
                    ) : (
                      "Registrar"
                    )}
                  </button>
                </div>
              </form>
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
