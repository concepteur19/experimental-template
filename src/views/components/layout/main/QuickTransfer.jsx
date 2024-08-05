// src/components/QuickTransfer.js
import React from "react";
import { BsChevronRight, BsPlusCircleDotted } from "react-icons/bs";

const QuickTransfer = () => {
  return (
    <div className="bg-white p-6 rounded-3xl flex flex-col space-y-8 w-[55%] ">
      <h6 className="text-sm font-semibold opacity-80">Quick transfer</h6>
      <div className="flex items-center justify-between text-xs">
        <div className=" cursor-pointer flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <p>John</p>
        </div>
        <div className="f cursor-pointer lex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <p>Leslie</p>
        </div>
        <div className=" cursor-pointer flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <p>Danny</p>
        </div>
        <div className=" cursor-pointer flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <p>Kristin</p> 
        </div>
        <div className=" cursor-pointer flex flex-col items-center text-primary space-y-2">
          {/* <div className="h-10 w-10 rounded-full border-4 border-dashed border-primary font-semibold opacity-80 flex justify-center items-center text-2xl"> */}
            <BsPlusCircleDotted size={40} />
          {/* </div> */}
          <p>Add new</p>
        </div>

        <BsChevronRight size={24} className=" mb-6 cursor-pointer"/>
      </div>

      <div className=" flex items-end justify-between w-full">
        <div className="text-xs flex flex-col space-y-8 ">
          <label htmlFor=" amount " className="font-semibold opacity-80">
            Add amount
          </label>
          <input
            type="text"
            placeholder="$ 0.00 "
            name="amount"
            className=" placeholder-primary placeholder-opacity-50 text-sm py-2 rounded outline-none border-b"
          />
        </div>

        <button className="ml-4 bg-accent font-semibold text-white px-4 py-2 rounded-xl">
          Send money
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;
