"use client";

import React from "react";
import styles from "../../../styles/component/home/navbar.module.scss";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: NavbarProps) => {
  console.log(currentUser);
  return (
    <nav className={styles["nav"]}>
      <div>
        <Container>
          <div className={styles["container"]}>
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
