import React from 'react';

// CardPizza que resibe un arreglo de pizzas y las muestra
const CardPizza = ({ pizzas }) => {
  if (!pizzas || !Array.isArray(pizzas)) {
    return <p>No hay pizzas para mostrar 🍕</p>;
  }

  return (

    <div className="grid">
      {pizzas.map((pizza) => (
        <div className="card" key={pizza.id}>
          <img src={pizza.img} alt={`Pizza ${pizza.name}`} className="card-img" />
          <h3>{pizza.id} - Pizza {pizza.name}</h3>
          <h4>Descripción:</h4>
          <p>{pizza.desc}</p>
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {/*Mostrar los ingredientes de la pizza*/}
            {pizza.ingredients.map((ing, i) => (
              <li key={i}>🍽️ {ing}</li>
            ))}
          </ul>
          <h4>Precio: ${pizza.price.toLocaleString()}</h4>
          <div className="buttons">
            <button>Ver Más 👀</button>
            <button>Añadir 🛒</button>
          </div>
        </div>
      ))}
    </div>

  );
};

export default CardPizza;