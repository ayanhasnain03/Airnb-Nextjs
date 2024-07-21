"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import Menuitem from "./Menuitem";
import useRegisterModal from "@/app/hooks/useRegister";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
interface UserMenuProps {
  currentUser: SafeUser | null;
}
const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm  font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        <div
          onClick={() => {
            toggleOpen();
          }}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <Menuitem onClick={() => {}} label="My trips" />
                <Menuitem onClick={() => {}} label="My favourite" />
                <Menuitem onClick={() => {}} label="My Reservations" />
                <Menuitem onClick={() => {}} label="My Properties" />
                <Menuitem onClick={() => {}} label="Airbnb my home" />
                <hr />
                <>
                  <Menuitem onClick={() => signOut()} label="logout" />
                </>
              </>
            ) : (
              <>
                <Menuitem
                  onClick={() => {
                    loginModal.onOpen();
                  }}
                  label="Login"
                />
                <Menuitem
                  onClick={() => {
                    registerModal.onOpen();
                  }}
                  label="Register"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
