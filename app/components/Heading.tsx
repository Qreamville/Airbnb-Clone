"use client";

import styles from "../../styles/component/modal.module.scss";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading = ({ title, center, subtitle }: HeadingProps) => {
  return (
    <div className={center ? styles.center : styles["not-center"]}>
      <div className={styles["register-title"]}>{title}</div>
      <div className={styles["register-subtitle"]}>{subtitle}</div>
    </div>
  );
};

export default Heading;
