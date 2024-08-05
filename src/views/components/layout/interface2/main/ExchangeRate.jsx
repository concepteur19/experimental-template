

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { BsThreeDots } from "react-icons/bs";

// Enregistrer les éléments nécessaires
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ExchangeRate = () => {
  const data = {
    labels: ["A month ago", "Today"],
    datasets: [
      {
        label: "Exchange Rate",
        data: [0.92, 0.89],
        borderColor: "#2f3954",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "1 USD = 0.888550 EUR",
      },
    },
  };

  return (
    <div className="bg-newBg p-6 rounded-2xl h-full">
      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-3xl font-bold">1 USD = 0.888550 EUR</h2>
        <BsThreeDots size={28} className=" cursor-pointer" />
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default ExchangeRate;
