"use client";

import { Button } from "@byeonghyeon/react-components-button";
import { Input } from "@byeonghyeon/react-components-input";
import React from "react";
import { handleSubmit } from "@/app/signup/signupAction";

function FormField() {
  return (
    <form action={handleSubmit} className="w-[50%] flex flex-col items-center gap-7">
      <Input type="email" placeholder="Email" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <Input type="text" placeholder="name" name="name" />
      <Button type="submit" size="md" color="blue" className="w-[250px] flex justify-center rounded-[20px]">
        SIGN UP
      </Button>
    </form>
  );
}

export default FormField;
