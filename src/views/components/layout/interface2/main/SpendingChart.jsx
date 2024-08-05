// src/components/SpendingChart.js
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SpendingChart = () => {

  const data = {
    labels: [
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
    ],
    datasets: [
      {
        label: "Spending",
        data: [
          3732.0, 1620.35, 2012.0, 3000.0, 4500.0, 2600.0, 3200.0, 2900.0,
          2300.0, 3500.0, 4000.0, 4400.0,
        ],
        backgroundColor: "#2f3954",
      },
      {
        label: "Savings",
        data: [
          2000.0, 1500.0, 1800.0, 2200.0, 2500.0, 2000.0, 2300.0, 2100.0,
          1900.0, 2400.0, 2600.0, 2800.0,
        ],
        backgroundColor: "#8B9FBC",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Spending",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
          maxTiksLimit: 5,
        },
      },
      y: {
        display: false,
        grid: {
          display: true,
        },
        beginAtZero: true,
      },
    },
    barPercentage: 0.7,
    categoryPercentage: 0.4,
    barThickness: 5,
    borderRadius: 10,
  };

  return (
    <div className=" h-full text-newTxt">
      <div className="bg-newBg p-6 rounded-2xl h-full flex  flex-col items-center w-full ">
        <div className="w-full h-[200px] ">
          <div className="flex justify-between w-full items-center pb-12">
            <h2 className="text-2xl font-bold">Spending</h2>
            <div className=" flex items-center space-x-6">
              <div className="  cursor-pointer flex items-center space-x-3 rounded-lg bg-gray-950 bg-opacity-5 py-2 px-2 ">
                <FiChevronLeft size={20} />
                <span className="text-newTxt font-bold text-xs">2023</span>
                <FiChevronRight size={20} />
              </div>

              <div className=" cursor-pointer flex rounded-lg p-1 bg-gray-950 bg-opacity-5 space-x-4 ">
                <div className=" cursor-pointer flex items-center  hover:bg-newTxt hover:bg-opacity-20 border hover:border-newTxt hover:border-opacity-50 border-transparent rounded-lg py-1 px-4 ">
                  <span className="text-newTxt font-bold text-sm">Year</span>
                </div>
                <div className=" flex items-center justify-center  bg-newTxt bg-opacity-20 border border-newTxt border-opacity-50 rounded-lg py-1 px-4 ">
                  <span className="text-newTxt font-bold text-sm">Month</span>
                </div>
                <div className=" cursor-pointer flex items-center  hover:bg-newTxt hover:bg-opacity-20 border hover:border-newTxt hover:border-opacity-50 border-transparent rounded-lg py-1 px-4 ">
                  <span className="text-newTxt font-bold text-sm">Week</span>
                </div>

                <span className=" border-[0.2px] my-2 border-newTxt border-opacity-30 "></span>

                <div className=" cursor-pointer flex items-center  hover:bg-newTxt hover:bg-opacity-20 border hover:border-newTxt hover:border-opacity-50 border-transparent rounded-lg py-1 px-4">
                  <span className="text-newTxt font-bold text-sm">Day</span>
                </div>
              </div>
            </div>
          </div>
          <Bar data={data} options={options} className=" w-full" />
        </div>
        <div className=" flex items-center mt-28 justify-between w-full" >
          <div className="flex space-x-12">
            <div>
              <h4 className="text-sm font-bold">€8,732.00</h4>
              <h5 className=" text-sm opacity-40 "> Received this month</h5>
            </div>
            <div>
              <h4 className="text-sm font-bold">€5,620.35</h4>
              <h5 className=" text-sm opacity-40 "> Avg monthly spend</h5>
            </div>
            <div>
              <h4 className="text-sm font-bold">€4,012.00</h4>
              <h5 className=" text-sm opacity-40 "> Spent this month</h5>
            </div>
          </div>

          <button className="flex items-center text-sm text-newTxt border-newTxt border-[0.5px] border-opacity-50 font-semibold  px-4 py-2 rounded-lg">
            Detailed
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpendingChart;
