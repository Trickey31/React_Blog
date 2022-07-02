import { IconEyeClose, IconEyeOpen } from "components/icons";
import React from "react";
import { useState } from "react";
import Input from "./Input";

const InputPasswordToggle = ({ control }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Please enter your password"
        control={control}
        hasIcon
      >
        {showPassword ? (
          <IconEyeOpen
            onClick={() => setShowPassword(!showPassword)}
          ></IconEyeOpen>
        ) : (
          <IconEyeClose
            onClick={() => setShowPassword(!showPassword)}
          ></IconEyeClose>
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;
