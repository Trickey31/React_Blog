import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  name = "",
  type = "text",
  children,
  hasIcon = false,
  control,
  ...props
}) => {
  const { field } = useController({ control, name, defaultValue: "" });
  return (
    <div className="w-full relative">
      <input
        id={name}
        type={type}
        className={`w-full ${
          hasIcon ? "py-5 pr-[60px] pl-5" : "p-5"
        } border border-transparent bg-grayLight rounded-lg transition-all focus:border-primary focus:bg-white placeholder:font-medium placeholder:text-base placeholder:text-[#C4C4C4]`}
        {...field}
        {...props}
      />
      {hasIcon ? (
        children ? (
          <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
            {children}
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default Input;
