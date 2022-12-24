import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  ClockIcon,
  CogIcon,
  NewspaperIcon,
  ReceiptRefundIcon,
  SpeakerphoneIcon,
  UserAddIcon,
  ViewGridAddIcon,
} from "@heroicons/react/solid";

import { LogoutIcon } from "@heroicons/react/outline";

import { NavLink } from "react-router-dom";

const SideBar = ({ toggleSideBar }) => {
  const links = [
    {
      title: "Dashboard",
      icon: <ViewGridAddIcon />,
      url: "/",
    },
    {
      title: "Absentees",
      icon: <UserAddIcon />,
      url: "/absentees",
    },
    {
      title: "Leave",
      icon: <NewspaperIcon />,
      url: "/leave",
    },
    {
      title: "Late",
      icon: <ClockIcon />,
      url: "/late",
    },
    {
      title: "Early Exit",
      icon: <ReceiptRefundIcon />,
      url: "/early-exit",
    },
    {
      title: "Notice",
      icon: <SpeakerphoneIcon />,
      url: "/notice",
    },
    {
      title: "Setting",
      icon: <CogIcon />,
      url: "/setting",
    },
  ];

  // const navigate = useNavigate();
  // const [isActive, setIsActive] = useState("/");

  return (
    <div
      className={`bg-white/30 backdrop-blur-md rounded-lg pt-10 pb-5 px-3 w-[200px] flex flex-col justify-between `}
    >
      <div>
        <div className="px-3">
          <img src={Logo} alt="logo" className="w-28" />
        </div>

        <div className="mt-10 space-y-2">
          {links.map((link) => (
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `cursor-pointer px-4 py-[9px] flex items-center space-x-4 ${
                  isActive &&
                  "bg-gradient-to-r from-[#0263FF] to-[#0E9CFF] rounded-lg text-white"
                }`
              }
              key={link.title}
            >
              <div className="w-4">{link.icon}</div>
              <p className="font-semibold text-xs">{link.title}</p>
            </NavLink>
          ))}
        </div>
      </div>

      <div className="cursor-pointer px-4 py-[9px] flex items-center space-x-4 bg-gradient-to-r from-[#BDBDBD] to-[#c2bebe] bg-opacity-50 rounded-lg shadow-sm ">
        <LogoutIcon className="w-4" />
        <p className="font-semibold text-xs">Sign out</p>
      </div>
    </div>
  );
};

export default SideBar;
