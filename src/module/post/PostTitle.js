import React from "react";
import { Link } from "react-router-dom";

const PostTitle = ({ children, className = "", size = "normal", to = "/" }) => {
  return (
    <h3
      className={`font-semibold leading-normal ${
        size === "big" ? "text-[22px]" : "text-[18px]"
      } ${className}`}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </h3>
  );
};

export default PostTitle;
