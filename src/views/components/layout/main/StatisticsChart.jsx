// import React from "react";
// import { BsChevronDown } from "react-icons/bs";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   { name: "04", Income: 3000, Expenses: 2400 },
//   { name: "08", Income: 2000, Expenses: 1398 },
//   { name: "12", Income: 2780, Expenses: 3908 },
//   { name: "16", Income: 1890, Expenses: 4800 },
//   { name: "20", Income: 2390, Expenses: 3800 },
//   { name: "24", Income: 3490, Expenses: 4300 },
//   { name: "28", Income: 4000, Expenses: 2400 },
// ];

// const StatisticsChart = () => {
//   return (
//     <div className="bg-white p-6 rounded-3xl ">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg">Statistics</h2>
//         <div className="flex items-center space-x-6 text-sm ">
//           <span>Income</span>
//           <span>Expenses</span>
//           <div className=" flex items-center space-x-1 rounded-lg p-1 bg-hover">
//             <span>Last month</span>
//             <BsChevronDown></BsChevronDown>
//           </div>
//         </div>
//       </div>

//       <div className="h-64 rounded">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="Income" stroke="#FF6F61" activeDot={{ r: 8 }} />
//             <Line type="monotone" dataKey="Expenses" stroke="#C69C6D" />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default StatisticsChart;

import React from "react";
import { BsChevronDown, BsDot } from "react-icons/bs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ZAxis,
} from "recharts";

const data = [
  { date: "04", Income: 1500, Expenses: 6000 },
  { date: "08", Income: 3200, Expenses: 3000 },
  { date: "12", Income: 2500, Expenses: 6000 },
  { date: "14", Income: 4000, Expenses: 4500 },
  { date: "16", Income: 7000, Expenses: 9000 },
  { date: "20", Income: 5000, Expenses: 7000 },
  { date: "24", Income: 8000, Expenses: 6000 },
  { date: "28", Income: 7000, Expenses: 5000 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow-lg text-xs">
        <p>{`Date: ${label}`}</p>
        <p>{`Income: ${payload[0].value}`}</p>
        <p>{`Expenses: ${payload[1].value}`}</p>
      </div>
    );
  }

  return null;
};

const StatisticsChart = () => {
  return (
    <div className="bg-white p-6  text-primary rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg">Statistics</h2>
        <div className="flex items-center space-x-6 text-sm">
          <span className=" flex items-center relative">
            <BsDot size={32} className="text-[#FF6F61] absolute top-1/2 -translate-y-1/2 -left-6"/>
            Income
          </span>
          <span className="  relative">
            <BsDot className="text-[#C69C6D] absolute top-1/2 -translate-y-1/2 -left-6" size={32}/>
            Expenses
          </span>
          <div className="flex items-center space-x-1 rounded-lg p-1 bg-[#FFE8E4]">
            <span className="text-[#FF6F61]">Last month</span>
            <BsChevronDown className="text-[#FF6F61] " />
          </div>
        </div>
      </div>

      <div className="h-64 rounded">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
            <XAxis
              dataKey="date"
              className=" opacity-30"
              tick={{ fill: "#8B8B8B" }}
            />
            <YAxis className=" opacity-30" tick={{ fill: "#8B8B8B" }} />
            <Tooltip content={<CustomTooltip />} />
            {/* <Legend /> */}
            <Line
              type="monotone"
              dataKey="Income"
              stroke="#FF6F61"
              strokeWidth={8}
              // dot={{ fill: "#FF6F61", r: 5 }}
              // activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="Expenses"
              stroke="#C69C6D"
              strokeWidth={8}
              // dot={{ fill: "#C69C6D", r: 5 }}
              // activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsChart;
