import React from "react";

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="text-base text-grayDark cursor-pointer font-semibold"
      {...props}
    >
      {children}
    </label>
  );
};

export default Label;
