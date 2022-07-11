import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "firebase-app/firebase-config";
import AuthenticationPage from "./AuthenticationPage";
import { NavLink, useNavigate } from "react-router-dom";
import InputPasswordToggle from "components/input/InputPasswordToggle";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import slugify from "slugify";
import { userRole, userStatus } from "utils/constant";

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
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    document.title = "Sign up to Blog";
  }, []);
  const handleSignUp = async (values) => {
    if (!isValid) return;
    await createUserWithEmailAndPassword(auth, values.email, values.password);
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
      photoURL:
        "https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    });
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
      username: slugify(values.fullname, { lower: true }),
      avatar:
        "https://images.unsplash.com/photo-1657491784312-cf194c7d08fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createdAt: serverTimestamp(),
    });
    toast.success("Successfull");
    navigate("/");
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
          <InputPasswordToggle control={control}></InputPasswordToggle>
        </Field>
        <div className="mb-5 font-medium">
          Already have an account?{" "}
          <NavLink to={"/sign-in"} className="inline-block text-primary">
            Sign in
          </NavLink>
        </div>
        <Button type="submit" isLoading={isSubmitting} disabled={isSubmitting}>
          Sign Up
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignUpPage;
