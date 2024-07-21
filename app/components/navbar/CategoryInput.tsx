"use client";

import { IconType } from "react-icons";

interface CategoryInputProps {
  onClick: (value: string) => void;
  selected?: boolean;
  icon: IconType;
  label: string;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
  onClick,
  selected,
  icon: Icon,
  label,
}) => {
  return (
    <div
      onClick={() => onClick(label)}
      className={`flex flex-col gap-3 rounded-xl p-4 border-2 hover:border-black transition cursor-pointer
    ${selected ? "border-black" : "border-neutral-200"}`}
    >
      <Icon />
      <div>{label}</div>
    </div>
  );
};

export default CategoryInput;
