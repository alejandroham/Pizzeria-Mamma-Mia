import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("userData");
    return storedUser
      ? JSON.parse(storedUser)
      : { isAuthenticated: false, displayName: "", email: "" };
  });

  const login = (email, displayName) => {
    const newUser = {
      isAuthenticated: true,
      email,
      displayName,
    };
    setUser(newUser);
    localStorage.setItem("userData", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser({ isAuthenticated: false, email: "", displayName: "" });
    localStorage.removeItem("userData");
  };

  // Por si quieres actualizar localStorage en caso de cambios
  useEffect(() => {
    if (user.isAuthenticated) {
      localStorage.setItem("userData", JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;