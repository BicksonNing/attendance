import { DownloadIcon, PaperAirplaneIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { CustomButton, HeadlessListBox } from "../components";
import {
  departments,
  districts,
  dp,
  mode,
  months,
  range,
  top10List,
  years,
} from "../const";

const Notice = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selected, setSelected] = useState([]);
  const [all, setAll] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  useEffect(() => {
    selectAll ? setSelected(top10List.map((li) => li.name)) : setSelected([]);
  }, [selectAll]);

  useEffect(() => {
    all ? setSelectAll(true) : setSelectAll(false);
  }, [all]);

  const toggleSelected = ({ name }) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];

      if (newSelected.includes(name)) {
        return newSelected.filter((item) => item != name);
      } else {
        newSelected.push(name);
        return newSelected;
      }
    });
  };

  return (
    <div className="flex-grow space-y-5">
      <div className="flex flex-wrap">
        <HeadlessListBox lists={districts} />
        <HeadlessListBox lists={departments} />
        <HeadlessListBox lists={years} />
        <HeadlessListBox lists={months} />
        <HeadlessListBox lists={mode} />
        <HeadlessListBox lists={range} />
      </div>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:items-center justify-between">
        <div className="flex space-x-5 items-center">
          <h2 className="font-semibold">6 Employees Found</h2>
          <div className="flex space-x-2">
            <div
              className={`cursor-pointer border w-[14px] h-[14px] rounded-[3px] ${
                selectAll ? "border-blue-500" : "border-black"
              }`}
              onClick={() => handleSelectAll()}
            >
              {selectAll && <CheckIcon className="text-blue-500" />}
            </div>

            <p className="text-xs font-semibold text-blue-500">Select all</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <CustomButton
            title="Download"
            icon={<DownloadIcon />}
            size="text-xs"
            iconw="w-[14px]"
            px="px-3"
            py="py-[6px]"
          />
          <CustomButton
            title="Send SCN"
            size="text-xs"
            iconw="w-[14px]"
            px="px-3"
            py="py-[6px]"
            icon={<PaperAirplaneIcon className="rotate-45" />}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {top10List.map((item) => {
          const isSelected = selected.includes(item.name);

          return (
            <div
              key={item.name}
              className="rounded-lg bg-white/30 backdrop-blur-sm px-6 py-3 flex items-center justify-between "
            >
              <div className="flex items-center space-x-5">
                <div>
                  <div
                    className={`cursor-pointer border w-[14px] h-[14px] rounded-[3px] ${
                      isSelected ? "border-blue-500" : "border-black"
                    }`}
                    onClick={() => toggleSelected({ name: item.name })}
                  >
                    {isSelected && <CheckIcon className="text-blue-500" />}
                  </div>
                </div>

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
          );
        })}
      </div>
    </div>
  );
};

export default Notice;
