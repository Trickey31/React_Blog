import React from "react";
import { NavLink } from "react-router-dom";

const AuthenticationPage = ({ children }) => {
  return (
    <div className="min-h-screen p-10">
      <div className="container">
        <div className="text-center">
          <NavLink to={"/"}>
            <img srcSet="./logo.png 2x" alt="logo" className="mx-auto mb-5" />
          </NavLink>
        </div>
        <h1 className="text-primary text-[40px] text-center  font-semibold mb-[60px]">
          Monkey Blogging
        </h1>
        {children}
      </div>
    </div>
  );
};

export default AuthenticationPage;
