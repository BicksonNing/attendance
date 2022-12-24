import React from "react";
import Power from "../assets/power.png";

const Footer = () => {
  return (
    <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row items-center justify-between pt-10 pb-8">
      <p className="text-xs text-center sm:text-left">
        Copyright © 2022-23 <br className="flex sm:hidden" />
        <span className="font-bold">Secretariat Attendance</span> All Rights
        Reserved.
      </p>
      <div>
        <img src={Power} alt="powere by globizs" className="w-36" />
      </div>
    </div>
  );
};

export default Footer;
