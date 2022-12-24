import React from "react";

const DashboardCard = ({ label, value, color }) => {
  return (
    <div className="relative bg-white/30 backdrop-blur-sm rounded-lg px-6 pt-4 pb-6">
      <div
        className={`absolute left-0 ${color} w-[5px] top-4 h-10 rounded-tr-xl rounded-br-xl`}
      ></div>
      <p className="font-semibold text-xs">{label}</p>
      <h2 className="text-3xl font-extrabold">{value}</h2>
    </div>
  );
};

export default DashboardCard;
