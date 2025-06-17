import React from 'react';
import { pizzas } from '../assets/js/pizzas';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <div>
      {/* Encabezado principal */}
      <header className="hero d-flex justify-content-center align-items-center text-white text-center">
        <div className="hero-overlay w-100 h-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold display-5">¡Pizzería Mamma Mia!</h1>
          <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>

      {/* Contenido del cuerpo: las tarjetas */}
      <main className="container">
        <CardPizza pizzas={pizzas} />
      </main>
    </div>
  );
};

export default Home;