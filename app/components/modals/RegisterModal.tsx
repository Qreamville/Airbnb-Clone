"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegister";
import Modal from "./Modal";
import Heading from "../Heading";
import styles from "../../../styles/component/modal.module.scss";
import Inputs from "../inputs/Inputs";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLogin";

const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const toggle = useCallback(() => {
    registerModal.onClose();
    loginModal.onOpen();
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post("/api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className={styles["register-heading"]}>
      <Heading title="Welcome to Airbnb" subtitle="Create an account" center />
      <Inputs
        register={register}
        errors={errors}
        id="email"
        label="Email"
        disabled={isLoading}
        required
      />
      <Inputs
        register={register}
        errors={errors}
        id="name"
        label="Name"
        disabled={isLoading}
        required
      />
      <Inputs
        register={register}
        errors={errors}
        id="password"
        label="Password"
        disabled={isLoading}
        required
      />
    </div>
  );

  const footerContent = (
    <div className={styles["register-footer"]}>
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      />
      <div>
        <div className={styles["have-account"]}>
          <div>Already have an account?</div>
          <div onClick={toggle}>Log in</div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
