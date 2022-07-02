import React from "react";

const postMeta = `flex items-center gap-3 text-sm text-inherit font-semibold`;
const postDot = `inline-block w-1 h-1 rounded-full bg-current`;

const PostMeta = ({
  date = "Mar 23",
  author = "Andiez Le",
  className = "",
}) => {
  return (
    <div className={`${postMeta} ${className}`}>
      <span>{date}</span>
      <span className={`${postDot}`}></span>
      <span>{author}</span>
    </div>
  );
};

export default PostMeta;
