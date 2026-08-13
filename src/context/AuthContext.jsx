import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("carepulse-user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  function login(email) {
    const loggedInUser = {
      id: 1,
      name: "Aravind",
      email,
      role: "Hospital Administrator",
    };

    localStorage.setItem(
      "carepulse-user",
      JSON.stringify(loggedInUser)
    );

    setUser(loggedInUser);
  }

  function logout() {
    localStorage.removeItem("carepulse-user");
    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated: Boolean(user),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}