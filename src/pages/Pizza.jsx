import { useParams, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pizza, setPizza] = useState(null)
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    // Obtener todas las pizzas para el selector
    const fetchPizzas = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/pizzas')
        const data = await res.json()
        setPizzas(data)
      } catch (error) {
        console.error('Error al obtener las pizzas:', error)
      }
    }
    fetchPizzas()
  }, [])

  useEffect(() => {
    // Obtener la pizza seleccionada
    const fetchPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
        const data = await res.json()
        setPizza(data)
      } catch (error) {
        console.error('Error al obtener la pizza:', error)
      }
    }
    if (id) fetchPizza()
  }, [id])

  const handleSelect = (e) => {
    navigate(`/pizza/${e.target.value}`)
  }

  return (
    <div className="container mt-5 mb-5">
      <h1>Detalle de la pizza</h1>
      <div className="mb-4">
        <label htmlFor="pizza-select" className="form-label">Selecciona una pizza:</label>
        <select
          id="pizza-select"
          className="form-select"
          value={id || ''}
          onChange={handleSelect}
        >
          <option value="">Elige una pizza...</option>
          {pizzas.map((pz) => (
            <option key={pz.id} value={pz.id}>{pz.name}</option>
          ))}
        </select>
      </div>
      {!pizza ? (
        <p>Cargando pizzas...</p>
      ) : (
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
      )}
    </div>
  )
}

export default Pizza
