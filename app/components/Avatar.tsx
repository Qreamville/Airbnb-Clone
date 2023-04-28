"use client";

import React from "react";
import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      style={{ borderRadius: "999999px" }}
      height={30}
      width={30}
      alt="user's avatar"
      src="/images/placeholder.jpg"
    />
  );
};

export default Avatar;
