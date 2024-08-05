import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const MoneyInOut = () => {
  return (
    <div className="flex space-x-[2px]  ">
      <div className="bg-newBg p-6 pt-4 rounded-2xl flex-1 space-y-8">
        <div>
          <div className="flex justify-between items-center">
            <h2 className=" font-bold">Money In</h2>
            <BsThreeDotsVertical className=" cursor-pointer"/>
          </div>
          <h5 className=" text-sm opacity-40 "> This week</h5>
        </div>

        <p className="text-lg font-bold text-gray-800">€2,250.00</p>
      </div>
      <div className="bg-newBg p-6 pt-4 rounded-2xl flex-1 space-y-8">
        <div>
          <div className="flex justify-between items-center">
            <h2 className=" font-bold">Money Out</h2>
            <BsThreeDotsVertical className=" cursor-pointer" />
          </div>

          <h5 className=" text-sm opacity-40 "> This week</h5>
        </div>
        <p className="text-lg font-bold text-gray-800">€1,660.32</p>
      </div>
    </div>
  );
};

export default MoneyInOut;
