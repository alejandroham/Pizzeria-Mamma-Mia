// /components/Cart.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";



const Cart = () => {
  const { cartItems, increment, decrement,borrarPizza, total } = useContext(CartContext);
    const { user } = useContext(UserContext);

  // Ordenar los items por nombre

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>

      <div className="list-group">
        {cartItems.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between py-2 border-bottom"
          >
            <div className="d-flex align-items-center">
              <img
                src={pizza.img}
                alt={pizza.name}
                className="rounded me-2"
                style={{ width: 60, height: 60, objectFit: "cover" }}
              />
              <div>
                <div className="text-capitalize">{pizza.name}</div>
                <small className="text-muted">
                  ${pizza.price.toLocaleString()}
                </small>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button
                onClick={() => decrement(pizza.id)}
                className="btn btn-outline-danger btn-sm"
              >
                -
              </button>
              <span className="mx-2">{pizza.count}</span>
              <button
                onClick={() => increment(pizza.id)}
                className="btn btn-outline-primary btn-sm"
              >
                +
              </button>
              <button
                className="btn btn-sm btn-outline-secondary ms-2"
                onClick={() => borrarPizza(pizza.id)}
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <h5>
          Total: <strong>${total.toLocaleString()}</strong>
        </h5>
        <button className="btn btn-dark mt-4 mb-4" disabled={!user.isAuthenticated} >Pagar</button>
              {!user.isAuthenticated && (
        <p style={{ color: "red" }}>Debes iniciar sesión para pagar.</p>
      )}
      </div>
    </div>
  );
};

export default Cart;
