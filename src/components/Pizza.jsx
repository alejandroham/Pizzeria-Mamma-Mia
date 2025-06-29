import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas/p001')
        const data = await res.json()
        setPizza(data)
      } catch (error) {
        console.error('Error al obtener la pizza:', error)
      }
    }

    fetchPizza()
  }, [])

  if (!pizza) return <div className="container mt-5"><p>Cargando pizzas...</p></div>

  return (

    
    <div className="container mt-5 mb-5">
        <h1>Detalle de la pizza</h1>
      <div className="card shadow-lg">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h5 className="card-title text-capitalize">{pizza.name}</h5>
          <h5 className="text-danger mb-3">${pizza.price.toLocaleString('es-CL')}</h5>
          <p className="card-text">{pizza.desc}</p>
          <h6>Ingredientes:</h6>
          <ul className="list-group list-group-flush mb-3">
            {pizza.ingredients.map((ing, idx) => (
              <li key={idx} className="list-group-item">{ing}</li>
            ))}
          </ul>
          <button className="btn btn-danger w-100">Añadir al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default Pizza
