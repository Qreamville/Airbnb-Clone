"use client";

import React from "react";
import { IconType } from "react-icons";
import styles from "../../styles/component/modal.module.scss";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: ButtonProps) => {
  return (
    <button
      className={`${small ? styles["small"] : styles["not-small"]}
      ${outline ? styles["outline"] : styles["no-outline"]} ${styles.btn}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={24} className={styles.icon} />}
      {label}
    </button>
  );
};

export default Button;
