"use client";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useLoginModal from "../../hooks/useLogin";
import { signIn } from "next-auth/react";
import Modal from "./Modal";
import Heading from "../Heading";
import styles from "../../../styles/component/modal.module.scss";
import Inputs from "../inputs/Inputs";
import { toast } from "react-hot-toast";
import Button from "../Button";
import { useRouter } from "next/navigation";
import useRegisterModal from "@/app/hooks/useRegister";
import useRentModal from "@/app/hooks/useRent";

const RentModal = () => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const rentModal = useRentModal();
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

  // const bodyContent = (
  //   <div className={styles["register-heading"]}>
  //     <Heading
  //       title="Welcome back to Airbnb"
  //       subtitle="Login to your account!"
  //       center
  //     />
  //     <Inputs
  //       register={register}
  //       errors={errors}
  //       id="email"
  //       label="Email"
  //       disabled={isLoading}
  //       required
  //     />
  //     <Inputs
  //       register={register}
  //       errors={errors}
  //       id="password"
  //       label="Password"
  //       disabled={isLoading}
  //       required
  //     />
  //   </div>
  // );

  // const footerContent = (
  //   <div className={styles["register-footer"]}>
  //     <Button
  //       outline
  //       label="Continue with Google"
  //       icon={FcGoogle}
  //       onClick={() => signIn("google")}
  //     />
  //     <Button
  //       outline
  //       label="Continue with Github"
  //       icon={AiFillGithub}
  //       onClick={() => signIn("github")}
  //     />
  //     <div>
  //       <div className={styles["have-account"]}>
  //         <div>First time using Airbnb?</div>
  //         <div onClick={toggle}>Create an account</div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <Modal
      disabled={isLoading}
      isOpen={rentModal.isOpen}
      title="Airbnb your home"
      actionLabel="Submit"
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
      // body={bodyContent}
      // footer={footerContent}
    />
  );
};

export default RentModal;
