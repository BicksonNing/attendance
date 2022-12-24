import React from "react";
import { useNavigate } from "react-router-dom";

import NotFound from "../assets/notfound.svg";
const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-3 pb-20">
      <img src={NotFound} alt="404 page not found" className="w-96" />
      <h2 className="text-xl font-semibold">Page Not Found</h2>
      <button onClick={() => navigate("/")} className="text-xs font-semibold">
        Back to Dashboard
      </button>
    </div>
  );
};

export default PageNotFound;
