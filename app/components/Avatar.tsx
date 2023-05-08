"use client";

import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar = ({ src }: AvatarProps) => {
  return (
    <Image
      style={{ borderRadius: "999999px" }}
      height={30}
      width={30}
      alt="user's avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
