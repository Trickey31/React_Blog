import { createContext, useContext } from "react";

const DropdownContext = createContext();
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within Provider");
  return context;
}
function DropdownProvider(props) {
  return (
    <DropdownContext.Provider value={props}>
      {props.children}
    </DropdownContext.Provider>
  );
}

export { useDropdown, DropdownProvider };
