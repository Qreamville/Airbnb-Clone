"use client";

import React, { useCallback, useState } from "react";
import styles from "../../../styles/component/home/userMenu.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegister";
import useLoginModal from "@/app/hooks/useLogin";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.menu}>
      <div>
        <div onClick={() => console.log(9)}>Airbnb your home</div>
        <div onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className={styles.avatar}>
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className={styles.menubar}>
          <div>
            <>
              <MenuItem
                onClick={() => {
                  loginModal.onOpen();
                  setIsOpen(false);
                }}
                label="Login"
              />
              <MenuItem
                onClick={() => {
                  registerModal.onOpen();
                  setIsOpen(false);
                }}
                label="Sign up"
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
