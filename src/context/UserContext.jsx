// context/UserContext.jsx
import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("userData");
    return stored
      ? JSON.parse(stored)
      : { isAuthenticated: false, email: "", token: "" };
  });

  // Guardar cambios en localStorage automáticamente
  useEffect(() => {
    if (user.isAuthenticated) {
      localStorage.setItem("userData", JSON.stringify(user));
    } else {
      localStorage.removeItem("userData");
    }
  }, [user]);

  // Login
  const login = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Error en login");

      const data = await res.json(); // { email: "...", token: "..." }
      setUser({ isAuthenticated: true, email: data.email, token: data.token });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // Register
  const register = async ({ email, password }) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Error en registro");

      const data = await res.json(); // { email: "...", token: "..." }
      setUser({ isAuthenticated: true, email: data.email, token: data.token });
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // Logout
  const logout = () => {
    setUser({ isAuthenticated: false, email: "", token: "" });
  };

  // Obtener perfil
  const getProfile = async () => {
    if (!user.token) throw new Error("No hay token");

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!res.ok) throw new Error("Error al obtener perfil");

      const data = await res.json(); // { email: "...", nombre: "...", ... }
      return data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  return (
    <UserContext.Provider value={{ user, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
