import React from "react";
import { useNavigate } from "react-router-dom";

const CustomButton = ({ title, icon, width, size, iconw, py, px }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${width} ${px} ${py} bg-gradient-to-r from-[#0263FF] to-[#0E9CFF] rounded-lg text-white flex items-center justify-center text-sm space-x-2 cursor-pointer active:scale-105 transition-all ease-in-out`}
      // onClick={() => navigate("/")}
    >
      <div className={`${iconw ? iconw : "w-4"} `}>{icon}</div>
      <p className={size}>{title}</p>
    </div>
  );
};

export default CustomButton;
