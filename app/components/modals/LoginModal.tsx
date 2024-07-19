"use client";

// import axios from "axios";

//Router
import { useRouter } from "next/navigation";
//Icons
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
//React Hooks
import { useCallback, useState } from "react";

//Form
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import Modal from "./Modal";

//Custom Hook

import useLoginModal from "@/app/hooks/useLoginModal";

//Custom Components
import Heading from "../Heading";
import Input from "../inputs/input";
import Button from "../Button";

//Toast
import { toast } from "react-hot-toast";

//Next Auth
import { signIn } from "next-auth/react";
import useRegisterModal from "@/app/hooks/useRegister";

const LoginModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  //Submit Handler
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Logged In");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  //Toggle Login Signup
  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome back" subtitle="Login to your account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        icon={FcGoogle}
        label="Continue With Google"
        onClick={() => {
          signIn("google");
        }}
      />
      <Button
        outline
        icon={AiFillGithub}
        label="Continue With Github"
        onClick={() => {
          signIn("github");
        }}
      />
      <div className="text-neutral-500 font-light mt-4">
        <div className="flex justify-center gap-2">
          <div>First time using Airbnb?</div>
          <div
            onClick={toggle}
            className="text-neutral-800 cursor-pointer hover:underline"
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Continue"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
