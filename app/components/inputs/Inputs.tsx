"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import styles from "../../../styles/component/modal.module.scss";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Inputs = ({
  errors,
  id,
  label,
  register,
  disabled,
  formatPrice,
  required,
  type = "text",
}: InputProps) => {
  return (
    <div className={styles["register-input"]}>
      {formatPrice && <BiDollar size={24} />}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        className={`${
          formatPrice ? styles["format-price"] : styles["no-format-price"]
        } ${errors[id] ? styles["errors"] : styles["no-error"]}`}
      />
    </div>
  );
};

export default Inputs;
