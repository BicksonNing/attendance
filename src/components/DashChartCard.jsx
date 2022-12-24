import React from "react";
import BarChartCard from "./BarChartCard";
import DonutChartCard from "./DonutChartCard";
import Top10Card from "./Top10Card";

const DashChartCard = ({ title, color }) => {
  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-2xl">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <BarChartCard title={title} color={color} />
        <DonutChartCard title={title} />
        <Top10Card title={title} />
      </div>
    </div>
  );
};

export default DashChartCard;
