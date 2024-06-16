"use client";
import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  return (
    <Image
      alt="Airbnb Logo"
      className="hidden md:block cursor-pointer"
      height={100}
      width={100}
      src="/images/logo.png"
    />
  );
};
export default Logo;
