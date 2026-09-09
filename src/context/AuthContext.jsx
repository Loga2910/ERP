import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("erp_user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (role) => {
    const userData = {
      id: 1,

      name:
        role === "TEACHER"
          ? "Teacher"
          : role === "SUPER_ADMIN"
            ? "Super Admin"
            : "School Admin",

      role,

      schoolId: 101,

      schoolName: "Vetri School",
    };

    setUser(userData);

    localStorage.setItem("erp_user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("erp_user");
  };

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
