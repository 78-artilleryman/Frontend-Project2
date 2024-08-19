"use client";

import { Button } from "@byeonghyeon/react-components-button";
import Image from "next/image";
import React from "react";
import googleIcon from "../../public/signIn-Icon/google_logo.svg";
import kakaoIcon from "../../public/signIn-Icon/kakao_logo.svg";
import naverIcon from "../../public/signIn-Icon/naver_logo.svg";

function FormField() {
  return (
    <form className="w-[50%] flex flex-col items-center gap-7">
      <Button
        type="submit"
        size="md"
        className="w-[250px] bg-[#f2f2f2] text-gray-600 pl-[80px]"
        leftIcon={<Image src={googleIcon} alt="구글 로그인" width={15} height={15} priority />}>
        Google
      </Button>
      <Button
        type="submit"
        size="md"
        color="yellow"
        className="w-[250px] bg-[#FDDC3F] text-blackAlpha-900 pl-[80px]"
        leftIcon={<Image src={kakaoIcon} alt="구글 로그인" width={20} height={20} priority />}>
        Kakao
      </Button>
      <Button
        type="submit"
        size="md"
        color="green"
        className="w-[250px] bg-[#36AB36] text-whiteAlpha-900 pl-[85px]"
        leftIcon={<Image src={naverIcon} alt="구글 로그인" width={15} height={15} priority />}>
        Naver
      </Button>
    </form>
  );
}

export default FormField;
