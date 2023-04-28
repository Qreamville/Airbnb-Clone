"use client";

import React from "react";
import styles from "../../../styles/component/home/menu-item.module.scss";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem = ({ onClick, label }: MenuItemProps) => {
  return (
    <div onClick={onClick} className={styles.item}>
      {label}
    </div>
  );
};

export default MenuItem;
