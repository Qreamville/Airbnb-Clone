"use client";

import React, { ReactNode } from "react";
import styles from "../../styles/component/component.module.scss";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
