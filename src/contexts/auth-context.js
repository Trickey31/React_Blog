import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { auth } from "firebase-app/firebase-config";

const AuthContext = createContext();

function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === "undefined")
    throw new Error("useAuth must be used within Provider");
  return context;
}
function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({});
  const value = { userInfo, setUserInfo };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUserInfo(user);
    });
  });
  return (
    <AuthContext.Provider value={value} {...props}>
      {props.children}
    </AuthContext.Provider>
  );
}
export { useAuth, AuthProvider };
