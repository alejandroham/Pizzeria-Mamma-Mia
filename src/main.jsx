
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

);