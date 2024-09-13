import React from "react";
import ReferAndEarn from "./ReferAndEarn";
import QuickTransfer from "./QuickTransfer";
import StatisticsChart from "./StatisticsChart";

const Main = () => {
  return (
    <main className="flex flex-col space-y-8 ">
      <StatisticsChart />

      <div  className="flex space-x-6">
      <ReferAndEarn />
      <QuickTransfer />
      </div>
      
    </main>
  );
};

export default Main;
