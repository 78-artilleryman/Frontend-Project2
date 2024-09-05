"use client";

import { Button } from "@byeonghyeon/react-components-button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";

function FormField() {
  const handleClickGoogle = (type: string) => {
    try {
      signIn(type, { callbackUrl: "/novel" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex w-[50%] flex-col items-center gap-7">
      <Button
        size="md"
        className="hover:text-whiteAlpha-900 w-[250px] bg-[#f2f2f2] pl-[80px] text-gray-600"
        leftIcon={<Image src="/signIn-Icon/google_logo.svg" alt="구글 로그인" width={15} height={15} priority />}
        onClick={() => handleClickGoogle("google")}>
        Google
      </Button>
      <Button
        size="md"
        color="yellow"
        className="text-blackAlpha-900 w-[250px] bg-[#FDDC3F] pl-[80px]"
        leftIcon={<Image src="/signIn-Icon/kakao_logo.svg" alt="구글 로그인" width={20} height={20} priority />}
        onClick={() => handleClickGoogle("kakao")}>
        Kakao
      </Button>
      <Button
        size="md"
        color="green"
        className="text-whiteAlpha-900 w-[250px] bg-[#36AB36] pl-[85px]"
        leftIcon={<Image src="/signIn-Icon/naver_logo.svg" alt="구글 로그인" width={15} height={15} priority />}
        onClick={() => handleClickGoogle("naver")}>
        Naver
      </Button>
    </form>
  );
}

export default FormField;
