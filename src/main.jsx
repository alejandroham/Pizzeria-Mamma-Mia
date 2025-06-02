import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css' //  lo quite por que me dejaba usar la mitad del ancho de la pantalla
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
