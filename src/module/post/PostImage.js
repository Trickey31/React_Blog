import React from "react";
import { Link } from "react-router-dom";

const PostImage = ({ url = "", className = "", alt = "image", to = null }) => {
  if (to)
    return (
      <Link to={to} className="block">
        <div className={`block ${className}`}>
          <img
            src={url}
            alt={alt}
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </Link>
    );
  return (
    <div className={`block ${className}`}>
      <img
        src={url}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>
  );
};

export default PostImage;
