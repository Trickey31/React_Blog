import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "components/button";
import { Radio } from "components/checkbox";
import { Field, FieldCheckboxes } from "components/field";
import ImageUpload from "components/image/ImageUpload";
import { Input } from "components/input";
import { Label } from "components/label";
import { auth, db } from "firebase-app/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import useFirebaseImage from "hooks/useFirebaseImage";
import DashboardHeading from "module/dashboard/DashboardHeading";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import slugify from "slugify";
import { userRole, userStatus } from "utils/constant";
import * as Yup from "yup";

const schema = Yup.object({
  fullname: Yup.string().required("Please enter your fullname"),
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string()
    .min(8, "Password contain at least 8 characters")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
      "Password contain at least 1 digit, 1 lowercase, 1 uppercase"
    ),
});

const UserAddNew = () => {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      avatar: "",
      status: userStatus.ACTIVE,
      role: userRole.USER,
      createdAt: new Date(),
    },
    resolver: yupResolver(schema),
  });
  const {
    image,
    progress,
    handleDeleteImage,
    handleResetUpload,
    handleSelectImage,
  } = useFirebaseImage(getValues, setValue);
  const handleCreateUser = async (values) => {
    console.log(values);
    if (!isValid) return;
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      await addDoc(collection(db, "users"), {
        fullname: values.fullname,
        username: slugify(values.username || values.fullname, {
          lower: true,
          replacement: " ",
          trim: true,
        }),
        email: values.email,
        password: values.password,
        avatar: image,
        status: Number(values.status),
        role: Number(values.role),
        createdAt: serverTimestamp(),
      });
      toast.success("Create new user successfully!");
      reset({
        fullname: "",
        username: "",
        email: "",
        password: "",
        status: userStatus.ACTIVE,
        role: userRole.USER,
        avatar: "",
        createdAt: new Date(),
      });
      handleResetUpload();
    } catch (error) {
      console.log(error.message);
      toast.error("Cannot create new user");
    }
  };
  const watchStatus = watch("status");
  const watchRole = watch("role");
  useEffect(() => {
    const arrErr = Object.values(errors);
    if (arrErr.length > 0) {
      toast.error(arrErr[0].message, { pauseOnHover: false, delay: 0 });
    }
  }, [errors]);
  return (
    <div>
      <DashboardHeading
        title="New user"
        desc="Add new user to system"
      ></DashboardHeading>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <div className="w-[200px] h-[200px] mx-auto mb-10">
          <ImageUpload
            className="!rounded-full h-full"
            progress={progress}
            handleDeleteImage={handleDeleteImage}
            onChange={handleSelectImage}
            image={image}
          ></ImageUpload>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Fullname</Label>
            <Input
              name="fullname"
              placeholder="Enter your fullname"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label>Username</Label>
            <Input
              name="username"
              placeholder="Enter your username"
              control={control}
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              control={control}
              type="email"
            ></Input>
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              name="password"
              placeholder="Enter your password"
              control={control}
              type="password"
            ></Input>
          </Field>
        </div>
        <div className="form-layout">
          <Field>
            <Label>Status</Label>
            <FieldCheckboxes>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.ACTIVE}
                value={userStatus.ACTIVE}
              >
                Active
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.PENDING}
                value={userStatus.PENDING}
              >
                Pending
              </Radio>
              <Radio
                name="status"
                control={control}
                checked={Number(watchStatus) === userStatus.BAN}
                value={userStatus.BAN}
              >
                Banned
              </Radio>
            </FieldCheckboxes>
          </Field>
          <Field>
            <Label>Role</Label>
            <FieldCheckboxes>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.ADMIN}
                value={userRole.ADMIN}
              >
                Admin
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.MOD}
                value={userRole.MOD}
              >
                Moderator
              </Radio>
              <Radio
                name="role"
                control={control}
                checked={Number(watchRole) === userRole.USER}
                value={userRole.USER}
              >
                User
              </Radio>
            </FieldCheckboxes>
          </Field>
        </div>
        <Button
          type="submit"
          className="mx-auto w-[200px]"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Add new user
        </Button>
      </form>
    </div>
  );
};

export default UserAddNew;
