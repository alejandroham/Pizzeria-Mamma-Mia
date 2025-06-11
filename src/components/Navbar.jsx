import React from 'react';

const Navbar = () => {
  const token = false; // Cambiar a true para probar el otro estado
  const total = 25000;

  return (
    <nav className="navbar navbar-dark bg-dark border-bottom border-warning px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <span className="text-white fw-bold">Pizzería Mamma Mia!</span>
          <button className="btn btn-sm btn-outline-warning">🍕 Home</button>

          {token ? (
            <>
              <button className="btn btn-sm btn-outline-warning">🔓 Perfil</button>
              <button className="btn btn-sm btn-outline-warning">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-sm btn-outline-warning">🔐 Login</button>
              <button src="/register.jsx" className="btn btn-sm btn-outline-warning">📝 Registro</button>
            </>
          )}
        </div>
        <button className="btn btn-sm btn-outline-info">
          🛒 Total: {total.toLocaleString('es-CL')}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;