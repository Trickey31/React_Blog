import { Button } from "components/button";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icons";
import { Input } from "components/input";
import { Label } from "components/label";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";
import AuthenticationPage from "./AuthenticationPage";
import { NavLink } from "react-router-dom";

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter your valid email")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    document.title = "Sign up to Blog";
  }, []);
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    toast.success("Successfull");
  };
  useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      toast.error(arrErr[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <AuthenticationPage>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="max-w-[800px] mx-auto"
      >
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Please enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            type="email"
            placeholder="Please enter your email address"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">Password</Label>
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
        </Field>
        <div className="mb-5 font-medium">
          Already have an account?{" "}
          <NavLink to={"/sign-in"} className="inline-block text-primary">
            Sign in
          </NavLink>
        </div>
        <Button
          type="submit"
          // className="w-full max-w-[300px] h-[66px] mx-auto flex items-center justify-center text-base text-white bg-primary-gradient rounded-lg font-semibold"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
