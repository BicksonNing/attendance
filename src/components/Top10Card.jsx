import { FilterIcon } from "@heroicons/react/outline";
import React from "react";
import { dp, top10List } from "../const";

const Top10Card = ({ title }) => {
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-lg py-5 px-5 space-y-3 col-span-1">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm">Top 10 {title}</h1>
        <FilterIcon className="cursor-pointer active:scale-150 ease-in-out transition-all w-4" />
      </div>

      <div className="py-5 relative h-60 md:h-72 space-y-4 overflow-y-auto scrollbar-hide">
        {top10List.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between pb-3 border border-b border-b-slate-400 last:border-none last:pb-0`}
          >
            <div className="flex items-center space-x-2">
              <div
                style={{ backgroundColor: item.color }}
                className="w-8 h-8 rounded-full flex items-center justify-center"
              >
                <p className="text-sm font-semibold">{dp(item.name)}</p>
              </div>

              <div className="">
                <h1 className="font-bold text-xs">{item.name}</h1>
                <p className="text-xs">{item.department}</p>
              </div>
            </div>

            <h3 className="font-semibold text-xs">{item.days}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Top10Card;
