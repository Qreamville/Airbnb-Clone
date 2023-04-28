import React from "react";
import styles from "../../../styles/component/navbar.module.scss";
import Container from "../Container";

const Navbar = () => {
  return (
    <nav className={styles["nav"]}>
      <div className={styles["nav-container"]}>
        <Container>anything</Container>
      </div>
    </nav>
  );
};

export default Navbar;
