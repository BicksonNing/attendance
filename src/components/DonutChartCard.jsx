import React from "react";

// icons
import { FilterIcon } from "@heroicons/react/outline";

// charts
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

const labels = ["None", "1-5 Days", "6-10 Days", " More than 10 Days"];

const data = {
  labels,
  datasets: [
    {
      labels: "Chart",
      data: ["19", "34", "26", "21"],
      backgroundColor: ["#BF228D", "#104A31", "#FF7723", "#615924"],
      hoverOffset: 5,
      borderRadius: 7,
    },
  ],
};

const DonutChartCard = ({ title }) => {
  return (
    <div className="bg-white/30 backdrop-blur-sm rounded-lg py-5 px-8 space-y-3 col-span-1">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm">{title} statistics</h1>
        <FilterIcon className="cursor-pointer active:scale-150 ease-in-out transition-all w-4" />
      </div>

      <div className="py-5 relative h-60 md:h-72 flex justify-center items-center">
        <Doughnut options={options} data={data} />
      </div>
    </div>
  );
};

export default DonutChartCard;
