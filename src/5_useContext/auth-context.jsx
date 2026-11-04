import { createContext, useContext } from "react";

const AuthContext = createContext({
    name: "Anuj Kumar",
});

export const AuthProvider = ({ children, value }) => {
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuthContext = () => {
  const context =  useContext(AuthContext);

  if(!context.user) throw new Error("User is not here")

  return context;
}