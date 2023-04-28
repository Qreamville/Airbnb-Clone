import React from "react";
import styles from "../../../styles/component/home/navbar.module.scss";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <div>
        <Container>
          <div className={styles["container"]}>
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
