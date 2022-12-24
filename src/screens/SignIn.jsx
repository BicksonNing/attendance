import {
  EyeIcon,
  EyeOffIcon,
  LockClosedIcon,
  LoginIcon,
  MailIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CustomInput, CustomButton } from "../components";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const Eye = () => (
    <div className="cursor-pointer" onClick={togglePassword}>
      {showPassword ? (
        <EyeIcon className="w-4" />
      ) : (
        <EyeOffIcon className="w-4" />
      )}
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  space-y-3 pb-20 bg-[url('./assets/bg.png')] bg-cover bg-center">
      <div>
        <img src={Logo} alt="logo" className="w-36" />
        <p className="text-sm font-semibold">Good to see you again</p>
      </div>
      <div className="bg-white/30 backdrop-blur-sm rounded-lg px-10 py-10 w-full xs:w-[400px] space-y-4">
        <div className="space-y-2">
          <div className="bg-[#d8d8d8] px-5 py-4 rounded-lg flex items-center justify-between">
            <CustomInput
              icon={<MailIcon />}
              inputType="text"
              placeHolder="Your email"
            />
          </div>
          <div className="bg-[#d8d8d8] px-5 py-4 rounded-lg flex items-center justify-between">
            <CustomInput
              icon={<LockClosedIcon />}
              inputType={showPassword ? "text" : "password"}
              placeHolder="Password"
            />
            <Eye />
          </div>
        </div>

        <p className="text-xs font-semibold text-right text-blue-500">
          Forgot password?
        </p>

        <CustomButton py="py-3" title="Sign in" icon={<LoginIcon />} />
      </div>
    </div>
  );
};

export default SignIn;
