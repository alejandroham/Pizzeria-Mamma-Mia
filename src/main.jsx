import { createRoot } from 'react-dom/client'
import './index.css' 
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </UserProvider>
  </BrowserRouter>
);
