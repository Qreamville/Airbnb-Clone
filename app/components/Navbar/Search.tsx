"use client";

import React from "react";
import styles from "../../../styles/component/home/search.module.scss";
import { BiSearch } from "react-icons/bi";
import useSearchModal from "@/app/hooks/useSearch";

const Search = () => {
  const searchModal = useSearchModal();
  return (
    <div className={styles.btn} onClick={searchModal.onOpen}>
      <div>
        <div>Anywhere</div>
        <div>Anytime</div>
        <div>
          <div>Add Guests</div>
          <div>
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
