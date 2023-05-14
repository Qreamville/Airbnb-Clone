"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "../../../styles/component/home/logo.module.scss";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      onClick={() => router.push("/")}
      alt="airbnb logo"
      className={styles.logo}
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
};

export default Logo;
