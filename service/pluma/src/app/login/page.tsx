"use client";

import React from "react";
import { Box } from "@byeonghyeon/react-components-layout";
import { Input } from "@byeonghyeon/react-components-input";
import { Button } from "@byeonghyeon/react-components-button";

function Loginpage() {
  return (
    <div className="w-screen h-screen bg-custom-Page-gradient flex items-center justify-center">
      <Box className="bg-color-white w-[1000px] flex items-center rounded-[20px] h-[645px]">
        <div className="w-[50%] bg-custom-box-gradient h-full flex flex-col pl-16 rounded-[20px] rounded-r-none pt-[176px]">
          <h1 className="text-7xl font-bold text-blue-900 mb-3">Pluma</h1>
          <h2 className="text-6xl font-bold text-blue-700">Login Page</h2>
        </div>
        <div className="w-[50%] flex flex-col items-center gap-11">
          <h3 className="text-4xl font-bold text-blackAlpha-900">
            User <span className="text-blue-600">Login</span>
          </h3>
          <form className="w-[50%] flex flex-col items-center gap-7">
            <Input type="text" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Button size="md" color="blue" className="w-[250px] flex justify-center rounded-[20px]">
              Login
            </Button>
          </form>
          <p className="text-lg font-normal text-gray-400">Create Your Account</p>
        </div>
      </Box>
    </div>
  );
}

export default Loginpage;
