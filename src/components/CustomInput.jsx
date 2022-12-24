import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import React from "react";

const CustomInput = ({ inputType, placeHolder, handleChange, icon }) => {
  return (
    <div className="flex w-full items-center space-x-3">
      {icon && <div className="w-5">{icon}</div>}
      <input
        className="bg-transparent w-full outline-none text-sm text-black placeholder:text-black"
        type={inputType}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default CustomInput;
