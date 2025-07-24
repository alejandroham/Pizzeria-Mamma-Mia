// Se crea el context para el carrito de compras
import { createContext,useState } from "react";

//permite exportar el contexto del carrito de compras
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
  // Estado para el carrito de compras
  const [cartItems, setCartItems] = useState([]);


  // Función para agregar un producto al carrito
  const addToCart = (pizza) => {
    const exists = cartItems.find(item => item.id === pizza.id);
    if (exists) {
      setCartItems(cartItems.map(item =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...pizza, count: 1 }]);
    }
  };
  //Funcion para aumentar y dismunuir la cantidad de un producto en el carrito
 const increment = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    ));
  };

  const decrement = (id) => {
    setCartItems(cartItems.map(item =>
      item.id === id && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    ));
  };
  // Función para Borrar  el carrito
    const borrarPizza = (id) => {
  setCartItems(cartItems.filter(item => item.id !== id));
};
  // Función para calcular el total del carrito
  const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);

 return (
    <CartContext.Provider value={{ cartItems, addToCart, increment, decrement, borrarPizza, total }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider