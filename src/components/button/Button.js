import { LoadingSpinner } from "components/loading";
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type   Type of 'button' | 'submit'
 */

const Button = ({
  type = "button",
  children,
  // onClick = () => {},
  ...props
}) => {
  const { isLoading, to } = props;
  const child = !!isLoading ? <LoadingSpinner></LoadingSpinner> : children;
  if (to !== "" && typeof to === "string") {
    return (
      <NavLink to={to}>
        <button type={type} {...props}>
          {child}
        </button>
      </NavLink>
    );
  }
  return (
    <button
      type={type}
      className={`w-full max-w-[300px] h-[66px] mx-auto flex items-center justify-center text-base text-white bg-primary-gradient rounded-lg font-semibold ${
        props.disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      {...props}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["submit", "button"]),
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
