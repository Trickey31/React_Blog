import { LoadingSpinner } from "components/loading";
import React from "react";

const Button = ({
  type = "button",
  children,
  onClick = () => {},
  ...props
}) => {
  const { isLoading } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  return (
    <button
      type={type}
      className={`${
        props.height || "h-[66px]"
      } w-full max-w-[350px] mx-auto text-base text-white px-[120px] bg-primary-gradient rounded-lg ${
        props.disabled ? "opacity-50 pointer-events-none" : ""
      } flex items-center justify-center`}
    >
      {child}
    </button>
  );
};

export default Button;
