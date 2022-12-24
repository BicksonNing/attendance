import React, { useState } from "react";
import { DashChartCard, HeadlessListBox } from "../components";
import DashboardCard from "../components/DashboardCard";
import { departments, districts, months, years } from "../const";

const Dashboard = () => {
  const dash = [
    {
      label: "Total Employee",
      value: "890",
      color: "bg-red-500",
    },
    {
      label: "Leave Percentage",
      value: "12%",
      color: "bg-purple-500",
    },
    {
      label: "Absentees Percentage",
      value: "20%",
      color: "bg-red-900",
    },
    {
      label: "Late Percentage",
      value: "22.22%",
      color: "bg-green-500",
    },
    {
      label: "Early Exit Percentage",
      value: "42%",
      color: "bg-yellow-500",
    },
  ];

  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold">
            Today's Report (December 24, 2022)
          </h2>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 justify-between">
            <div className="flex flex-wrap">
              <HeadlessListBox lists={districts} />
              <HeadlessListBox lists={departments} />
            </div>
            <p className="text-xs font-semibold">
              Last updated on 01:27 pm, 23rd Dec 2022
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {dash.map((item) => (
            <DashboardCard
              key={item.label}
              label={item.label}
              color={item.color}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex flex-wrap">
          <HeadlessListBox lists={years} />
          <HeadlessListBox lists={months} />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {dash.map((item) => (
            <DashboardCard
              key={item.label}
              label={item.label}
              color={item.color}
              value={item.value}
            />
          ))}
        </div>
      </div>

      <DashChartCard title="Absentees" color="#4CB23B" />
      <DashChartCard title="Late" color="#0E9CFF" />
      <DashChartCard title="Leave" color="#FF516B" />
      <DashChartCard title="Early Exit" color="#946319" />
    </div>
  );
};

export default Dashboard;
