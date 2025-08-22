import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register"; 
import Login from "./pages/Login";
import Cart from "./pages/Cart"; 
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext";  // 👈 importa el UserProvider

function App() {
  return (
    <UserProvider>  {/* 👈 envolver toda la app con UserProvider */}
      <CartProvider>
        <Navigation />
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
