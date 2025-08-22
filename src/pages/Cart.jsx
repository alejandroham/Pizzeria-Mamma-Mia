import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cartItems, increment, decrement, borrarPizza, total, clearCart } = useContext(CartContext);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    if (cartItems.length === 0) return;

    // Vacía el carrito
    clearCart();

    // Mostrar mensaje de éxito
    setSuccess(true);
  };

  // Refresca la página 2 segundos después de comprar
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <div className="container mt-4">
      <h5>Detalles del pedido:</h5>

      {cartItems.length === 0 && !success && (
        <div className="alert alert-info mt-3">
          Tu carrito está vacío
        </div>
      )}

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
        <button
          className="btn btn-dark mt-4 mb-4"
          onClick={handlePayment}
          disabled={cartItems.length === 0}
        >
          Pagar
        </button>

        {success && (
          <div className="alert alert-success mt-3" role="alert">
            ✅ ¡Compra realizada con éxito! Gracias por tu compra 🎉
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
