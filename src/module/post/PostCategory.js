import React from "react";
import { Link } from "react-router-dom";

const postCategory = `inline-block px-[10px] py-1 rounded-[10px] text-[#6b6b6b] text-sm font-semibold`;

const PostCategory = ({
  children,
  type = "primary",
  className = "",
  to = "/",
}) => {
  return (
    <div
      className={`${postCategory} ${
        type === "secondary" ? "bg-white" : "bg-[#f3edff]"
      } ${className}`}
    >
      <Link to={to} className="block">
        {children}
      </Link>
    </div>
  );
};

export default PostCategory;
