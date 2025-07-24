<<<<<<< HEAD

import { createRoot } from 'react-dom/client'
import './index.css' //  lo quite por que me dejaba usar la mitad del ancho de la pantalla
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom';


createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <App />
    </BrowserRouter>

=======
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { CartProvider } from './context/CartContext.jsx';
import 'bootstrap/dist/css/bootstrap.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> master
);