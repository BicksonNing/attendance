import { MenuAlt4Icon } from "@heroicons/react/solid";
import React from "react";

import { useLocation } from "react-router-dom";
import User from "../assets/user.jpg";

const Navbar = ({ handleSideBar }) => {
  const location = useLocation();

  const title =
    location.pathname === "/"
      ? "Overview"
      : location.pathname === "/absentees"
      ? "Absentees"
      : location.pathname === "/leave"
      ? "Leave"
      : location.pathname === "/late"
      ? "Late"
      : location.pathname === "/early-exit"
      ? "Early Exit"
      : location.pathname === "/notice"
      ? "Show Cause Notice"
      : location.pathname === "/404"
      ? "Page not found"
      : location.pathname === "/setting" && "Setting";

  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-4 lg:space-x-0 items-center">
        <div
          className="block lg:hidden bg-white bg-opacity-50 p-[5px] rounded-md cursor-pointer active:scale-110"
          onClick={handleSideBar}
        >
          <MenuAlt4Icon className="w-6" />
        </div>
        <div>
          <h3 className="font-bold text-2xl mb-1">{title}</h3>
          <p className="text-xs">Good Morning Bickson 👋</p>
        </div>
      </div>

      <div className="flex items-center space-x-0 sm:space-x-2">
        <div className="h-9 w-9">
          <img src={User} alt="user" className="rounded-full" />
        </div>
        <div className="hidden sm:block">
          <h4 className="font-semibold text-sm">Bickson</h4>
          <p className="text-[11px]">bicksonmeitei2@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
