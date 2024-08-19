"use client";

import React from "react";
import FormField from "@/components/FormField";

function signinPage() {
  return (
    <div className="w-screen h-screen bg-custom-Page-gradient flex items-center justify-center">
      <div className="bg-color-white w-[1000px] flex items-center rounded-[20px] h-[645px]">
        <div className="w-[50%] bg-custom-box-gradient h-full flex flex-col pl-16 rounded-[20px] rounded-r-none pt-[176px]">
          <h1 className="text-7xl font-bold text-blue-900 mb-3">Hello!</h1>
          <h2 className="text-6xl font-bold text-blue-700 mb-4">Welcome to</h2>
          <h2 className="text-6xl font-bold text-blue-700">Pluma</h2>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-11">
          <h3 className="text-4xl font-bold text-blue-600">
            Login <span className="text-blackAlpha-900 text-3xl">&</span> Account
          </h3>
          <FormField />
        </div>
      </div>
    </div>
  );
}

export default signinPage;
