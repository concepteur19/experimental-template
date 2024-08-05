import React, { useState } from "react";
import {
  BsCurrencyDollar,
  BsCurrencyEuro,
  BsPlusCircle,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { FaArrowDown, FaPlus, FaArrowUp, FaExchangeAlt } from "react-icons/fa";

const AccountSummary = () => {
  const [isHover, sethover] = useState(false);
  const [isHover$, sethover$] = useState(false);

  return (
    <div className="bg-newBg pt-4 pb-8 px-8 rounded-2xl flex flex-col items-center space-y-4 ">
      <div className="flex justify-between w-full items-center pb-12">
        <h2 className="text-2xl font-bold">Account</h2>
        <div className=" flex items-center space-x-4">
          <div className=" cursor-pointer flex rounded-2xl p-1 bg-gray-950 bg-opacity-5 space-x-4 ">
            <div className=" flex items-center  bg-newTxt bg-opacity-20 border border-newTxt border-opacity-50 rounded-xl p-1 pr-6">
              <span className="text-white bg-newTxt w-10 h-10 p-1 rounded-full flex justify-center items-center mr-3">
                {" "}
                <BsCurrencyEuro size={36} />{" "}
              </span>{" "}
              <span className="text-newTxt font-bold text-lg">EUR</span>
            </div>
            <div
              onMouseLeave={() => sethover(false)}
              onMouseEnter={() => sethover(true)}
              className=" cursor-pointer flex items-center  hover:bg-newTxt hover:bg-opacity-20 border hover:border-newTxt hover:border-opacity-50 border-transparent rounded-xl p-1 pr-6"
            >
              <span
                className={`${
                  isHover && "text-white bg-newTxt"
                } border border-newTxt border-opacity-30 w-10 h-10 p-1 rounded-full flex justify-center items-center mr-3`}
              >
                {" "}
                <BsCurrencyDollar size={36} />{" "}
              </span>{" "}
              <span className="text-newTxt font-bold text-lg">USD</span>
            </div>

                <span className=" border-[0.2px] my-2 border-newTxt border-opacity-30 "></span>

            <div
              onMouseLeave={() => sethover$(false)}
              onMouseEnter={() => sethover$(true)}
              className=" cursor-pointer flex items-center  hover:bg-newTxt hover:bg-opacity-20 border hover:border-newTxt hover:border-opacity-50 border-transparent rounded-xl p-1 pr-6"
            >
              <span
                className={`${
                  isHover$ && "text-white bg-newTxt"
                } border border-newTxt border-opacity-30 w-10 h-10 p-1 rounded-full flex justify-center items-center mr-3`}
              >
                {" "}
                <BsCurrencyDollar size={36} />{" "}
              </span>{" "}
              <span className="text-newTxt font-bold text-lg">UAH</span>
            </div>
          </div>
          <BsPlusCircle size={36} className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col space-x-4 justify-center items-center space-y-6 pb-10">
        <p className="text-5xl font-bold flex items-center ">
          {" "}
          <span className=" text-3xl">€</span>28 903,95
        </p>
        <p className=" opacity-60 "> BE08 9674 4606 3855</p>
      </div>

      <div className="flex space-x-4">
        <button className="flex items-center text-newTxt border-newTxt border-[0.5px] border-opacity-60 font-semibold  px-4 py-2 rounded-lg">
          <FaArrowDown className="mr-4" /> Receive
        </button>
        <button className="flex items-center text-newTxt border-newTxt border-[0.5px] border-opacity-60 font-semibold  px-4 py-2 rounded-lg">
          <FaPlus className="mr-4" /> Add
        </button>
        <button className="flex items-center bg-newTxt text-white px-4 py-2 rounded-lg">
          <FaArrowUp className="mr-4" /> Send
        </button>
        <button className="flex items-center text-newTxt border-newTxt border-[0.5px] border-opacity-60 font-semibold  px-4 py-2 rounded-lg">
          <FaExchangeAlt className="mr-4" /> Convert
        </button>
        <button className="flex items-center text-newTxt border-newTxt border-[0.5px] border-opacity-60 font-semibold  px-4 py-2 rounded-lg">
          <BsThreeDotsVertical className="mr-4" /> More
        </button>
      </div>
    </div>
  );
};

export default AccountSummary;
