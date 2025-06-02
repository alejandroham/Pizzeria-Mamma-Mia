import React from 'react'

const Navbar = () => {
const total = 25000;
//const token = false;

  return (
      <nav class="navbar navbar-dark bg-dark border-bottom border-warning px-3">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div class="d-flex align-items-center gap-2">
        <span class="text-white fw-bold">Pizzería Mamma Mia!</span>
        <button class="btn btn-sm btn-outline-warning">🏠 Home</button>
        <button class="btn btn-sm btn-outline-warning">🔐 Login</button>
        <button class="btn btn-sm btn-outline-warning">📝 Register</button>
      </div>
      <button class="btn btn-sm btn-outline-info">🛒 Total: {total}</button>
    </div>
  </nav>
  )
}

export default Navbar