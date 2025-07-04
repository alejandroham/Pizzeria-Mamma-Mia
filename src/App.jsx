import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
//import CardPizza from './components/CardPizza';
//import Login from './components/Login';
//import Cart from './components/Cart';

//importa Navigation
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import Cart from "./pages/Cart"; 
import Profile from "./pages/Profile";


function App() {
  return (
    <>
      {/* <Pizza />
     
      <Register />
      <Login />
      <Cart />*/}
  
      <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
          <Footer />
    </>
  );
}

export default App;
