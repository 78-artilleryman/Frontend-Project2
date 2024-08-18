import Link from "next/link";
import React from "react";
import FormField from "@/components/FormField";

function SignupPage() {
  return (
    <main className="w-screen h-screen bg-custom-Page-gradient flex items-center justify-center">
      <div className="bg-color-white w-[1000px] flex items-center rounded-[20px] h-[645px]">
        <div className="w-[50%] bg-custom-box-gradient h-full flex flex-col pl-16 rounded-[20px] rounded-r-none pt-[176px]">
          <h1 className="text-7xl font-bold text-blue-900 mb-3">Pluma</h1>
          <h2 className="text-6xl font-bold text-blue-700">SignUp Page</h2>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-11">
          <h3 className="text-4xl font-bold text-blackAlpha-900">
            Create <span className="text-blue-600">Account</span>
          </h3>
          <FormField />
          <Link href="/login" className="text-lg font-normal text-gray-400">
            SIGN IN
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
