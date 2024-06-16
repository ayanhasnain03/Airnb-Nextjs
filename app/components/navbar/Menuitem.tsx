"use client";
interface MenuitemProps {
  onClick: () => void;
  label: string;
}
const Menuitem: React.FC<MenuitemProps> = ({ onClick, label }) => {
  return (
    <div onClick={onClick}>
      <div className="px-4 py-3 hover:bg-neutral-100 transition font-semibold">
        {label}
      </div>
    </div>
  );
};
export default Menuitem;
