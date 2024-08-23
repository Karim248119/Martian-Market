import { createContext, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  //state
  const [user, setUser] = useState(null);

  //hooks

  const signUp = useCallback(
    (user, navigate) => {
      localStorage.setItem("auth", JSON.stringify(user));
      setUser(user);
      navigate("/");
    },
    [user]
  );

  const logOut = useCallback(
    (navigate) => {
      localStorage.removeItem("auth");
      setUser(null);
      navigate("/");
    },
    [user]
  );
  useEffect(() => {
    const authUser = localStorage.getItem("auth");
    if (authUser) {
      setUser(JSON.parse(authUser));
    }
  }, []);

  const value = {
    user,
    signUp,
    logOut,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
