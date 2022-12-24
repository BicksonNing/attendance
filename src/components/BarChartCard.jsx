import React from "react";

// icons
import { FilterIcon } from "@heroicons/react/outline";

// charts
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

const BarChartCard = ({ title, color }) => {
  ChartJS.register(CategoryScale, LinearScale, BarElement);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"];

  const data = {
    labels,
    datasets: [
      {
        data: [5306, 4208, 9727, 1039, 5959, 6770],
        backgroundColor: color,
        barThickness: 20,
        borderRadius: 4,
      },
    ],
  };

  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-lg py-5 px-8 space-y-3 sm:col-span-2">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm">{title} reports</h1>
        <FilterIcon className="cursor-pointer active:scale-150 ease-in-out transition-all w-4" />
      </div>

      <div className="relative h-36 xs:h-60 md:h-72 flex justify-center items-center">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default BarChartCard;
