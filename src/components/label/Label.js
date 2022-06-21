import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-base text-grayDark cursor-pointer"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
