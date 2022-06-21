import { createContext, useContext } from "react";

const AuthContext = createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within Provider");
  return context;
}
function AuthProvider(props) {
  return (
    <AuthContext.Provider {...props}>{props.children}</AuthContext.Provider>
  );
}
export { useAuth, AuthProvider };
