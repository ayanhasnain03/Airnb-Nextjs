"use client";
import Image from "next/image";

interface AvataProps {
  src?: string | null;
}
const Avatar: React.FC<AvataProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      src={src || "/images/placeholder.jpg"}
      alt="Avatar"
      width={30}
      height={30}
    />
  );
};
export default Avatar;
