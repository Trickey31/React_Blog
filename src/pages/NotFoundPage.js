import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <NavLink to={"/"}>
        <img srcSet="/logo.png 2x" alt="blog" className="inline-block mb-10" />
      </NavLink>
      <h1 className="text-[60px] font-bold mb-5">Oops! Page not found</h1>
      <NavLink
        to={"/"}
        className="inline-block px-[30px] py-[15px] text-white bg-primary-gradient rounded-lg"
      >
        Back to home
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
