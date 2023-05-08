"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "../../hooks/useLogin";
import useRegisterModal from "../../hooks/useRegister";
import { signIn } from "next-auth/react";
import Modal from "./Modal";
import Heading from "../Heading";
import styles from "../../../styles/component/modal.module.scss";
import Inputs from "../inputs/Inputs";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";

const LoginModal = () => {
  const router = useRouter();
  const registerModal = useLoginModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        loginModal.onClose;
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const bodyContent = (
    <div className={styles["register-heading"]}>
      <Heading
        title="Welcome back to Airbnb"
        subtitle="Login to your account!"
        center
      />
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
          <div onClick={registerModal.onClose}>Log in</div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Log In"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
