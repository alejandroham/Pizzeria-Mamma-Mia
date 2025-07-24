import Home from "./pages/Home";
import Footer from "./components/Footer";
import Pizza from "./pages/Pizza";
//importa Navigation
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext.jsx";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            {/* Ruta protegida */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/pizza/:id" element={<Pizza />} />
          </Routes>
        </div>
        <Footer />
      </CartProvider>
    </UserProvider>
  );
}

export default App;
