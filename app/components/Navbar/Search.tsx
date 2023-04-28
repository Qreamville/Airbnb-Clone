"use client";

import React from "react";
import styles from "../../../styles/component/home/search.module.scss";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <div className={styles.btn}>
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
