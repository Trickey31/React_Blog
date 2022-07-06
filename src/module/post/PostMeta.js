import React from "react";
import { Link } from "react-router-dom";

const postMeta = `flex items-center gap-3 text-sm text-inherit font-semibold`;
const postDot = `inline-block w-1 h-1 rounded-full bg-current`;

const PostMeta = ({
  date = "Mar 23",
  author = "Andiez Le",
  className = "",
  to = "/",
}) => {
  return (
    <div className={`${postMeta} ${className}`}>
      <span>{date}</span>
      <span className={`${postDot}`}></span>
      <Link to={to}>
        <span>{author}</span>
      </Link>
    </div>
  );
};

export default PostMeta;
