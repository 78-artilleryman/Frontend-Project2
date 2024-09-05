import React from "react";
import FormField from "@/components/signin/Signin-Form";

function signinPage() {
  return (
    <div className="bg-custom-Page-gradient flex h-screen w-screen items-center justify-center">
      <div className="bg-color-white flex h-[645px] w-[1000px] items-center rounded-[20px]">
        <div className="bg-custom-box-gradient flex h-full w-[50%] flex-col rounded-[20px] rounded-r-none pl-16 pt-[176px]">
          <h1 className="mb-3 text-7xl font-bold text-blue-900">Hello!</h1>
          <h2 className="mb-4 text-6xl font-bold text-blue-700">Welcome to</h2>
          <h2 className="text-6xl font-bold text-blue-700">Pluma</h2>
        </div>
        <div className="flex w-[50%] flex-col items-center gap-11">
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
