import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Field } from "components/field";
import { IconEyeClose, IconEyeOpen } from "components/icons";
import { Input } from "components/input";
import { Label } from "components/label";
import { useAuth } from "contexts/auth-context";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-toastify";
import AuthenticationPage from "./AuthenticationPage";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-app/firebase-config";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter your valid email")
    .required("Please enter your email address"),
  password: yup.string().required("Please enter your password"),
});

const SignInPage = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [showPassword, setShowPassword] = useState(false);
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "Sign in to Blog";
    // if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      toast.error(arrErr[0].message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  return (
    <AuthenticationPage>
      <form
        onSubmit={handleSubmit(handleSignIn)}
        className="max-w-[800px] mx-auto"
      >
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
          Do not have an account?{" "}
          <NavLink to={"/sign-up"} className="inline-block text-primary">
            Sign up
          </NavLink>
        </div>
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          Sign In
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignInPage;
