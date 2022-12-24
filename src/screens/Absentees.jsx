import React from "react";
import {
  BarChartCard,
  DonutChartCard,
  HeadlessListBox,
  Top10Card,
} from "../components";

import {
  days,
  departments,
  districts,
  dp,
  months,
  permissions,
  top10List,
  years,
} from "../const";

const Absentees = () => {
  return (
    <div className="flex-grow space-y-5">
      <div className="flex flex-wrap">
        <HeadlessListBox lists={districts} />
        <HeadlessListBox lists={departments} />
        <HeadlessListBox lists={years} />
        <HeadlessListBox lists={months} />
        <HeadlessListBox lists={days} />
        <HeadlessListBox lists={permissions} />
      </div>

      <h2 className="font-semibold">6 Employees Found</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          {top10List.map((item) => (
            <div
              key={item.name}
              className="rounded-lg bg-white/30 backdrop-blur-sm px-6 py-3 flex items-center justify-between "
            >
              <div className="flex items-center space-x-5">
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                >
                  <p className="text-sm font-semibold">{dp(item.name)}</p>
                </div>

                <div className="">
                  <h1 className="font-bold text-sm">{item.name}</h1>
                  <div className="flex space-x-1 items-center -mt-1">
                    <p className="text-[10px] uppercase">{item.districts}</p>
                    <p>•</p>
                    <p className="text-[10px]">{item.department}</p>
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="font-semibold text-sm">{item.days}</h3>
                <p className="text-[10px] uppercase">Days Absent</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <BarChartCard title="Absentees" color="#4CB23B" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 gap-4">
            <DonutChartCard title="Absentees" />
            <Top10Card title="Absentees" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Absentees;
