import { useState } from "react";
import { SideBar, Navbar, Footer } from "./components";
import {
  Dashboard,
  Absentees,
  Leave,
  Late,
  EarlyExit,
  Notice,
  Setting,
  SignIn,
  PageNotFound,
} from "./screens";

import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Main from "./layout/Main";
function App() {
  const location = useLocation();

  return (
    <div className=" bg-[#CDDDDD] min-h-screen min-w-[375px]">
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/absentees" element={<Absentees />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/late" element={<Late />} />
          <Route path="/early-exit" element={<EarlyExit />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/setting" element={<Setting />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
