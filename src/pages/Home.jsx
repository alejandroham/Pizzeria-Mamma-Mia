import CardPizza from "./CardPizza";
import Pizza from "./Pizza";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizza] = useState([]);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
      }
    };

    fetchPizza();
  }, []);

  return (
    <div>
      {/* Encabezado principal */}
      <header className="hero d-flex justify-content-center align-items-center text-white text-center">
        <div className="hero-overlay w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold display-5">¡Pizzería Mamma Mia!</h1>
          <p className="lead">
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
        </div>
      </header>

      {/* Contenido del cuerpo: las tarjetas */}
      <main className="container">
        {/*<CardPizza pizzas={pizzas} />*/}
        <div className="container mt-5">
          <h2 className="mb-4 text-center">Nuestras Pizzas</h2>
          <div className="row">
            {pizzas.map((pizza) => (
              <div className="col-md-4 mb-4" key={pizza.id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={pizza.img}
                    className="card-img-top"
                    alt={pizza.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{pizza.name}</h5>
                    <h5 className="text-danger mb-3">${pizza.price.toLocaleString('es-CL')}</h5>
                    <p className="card-text">
                      {pizza.desc && pizza.desc.slice(0, 100)}...
                    </p>
                    
                    <h6>Ingredientes:</h6>
                    <ul className="list-group list-group-flush mb-3">
                      {pizza.ingredients.map((ing, i) => (
                        <li className="list-group-item" key={i}>
                          {ing}
                        </li>
                      ))}
                    </ul>
                    <button className="btn btn-danger w-100">
                      Añadir al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Pizza />
      </main>
    </div>
  );
};

export default Home;
