import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar, SideBar } from "../components";

const Main = () => {
  const [toggleSideBar, setToggleSideBar] = useState(false);

  const handleSideBar = () => {
    setToggleSideBar(!toggleSideBar);
  };

  return (
    <div className="relative flex flex-row">
      {/* Sidebar */}
      <div className="hidden lg:flex w-[280px]">
        <div className="left-4 top-4 bottom-4 fixed z-50 flex ">
          <SideBar />
        </div>
      </div>

      {/* Mobile Sidebar */}

      <div
        className={`z-50 cursor-pointer  flex lg:hidden fixed top-0 bottom-0 left-0 right-0 transition-all duration-500 ease-in-out pl-4 py-4 ${
          !toggleSideBar ? "-translate-x-full" : "translate-x-0"
        }`}
        onClick={handleSideBar}
      >
        <SideBar />
      </div>

      <div className="w-full min-h-[95vh] mt-5 md:mt-8 mx-4 md:mx-8 flex flex-col justify-between">
        <div className="space-y-4">
          <Navbar handleSideBar={handleSideBar} />
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
