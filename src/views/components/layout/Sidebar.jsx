// src/components/Sidebar.js
import React from "react";
import {
  FiGrid,
  FiActivity,
  FiClipboard,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="h-full relative p-8  w-[8%] bg-background rounded-s-3xl flex flex-col items-center ">
      <div className="mb-4">
        <div className="h-14 w-14 border-4 border-primary rounded-full bg p-1 cursor-pointer">
          <div className="h-10 w-10 rounded-full bg-primary"></div>
        </div>{" "}
        {/* User Logo */}
      </div>
      <nav className=" absolute top-1/2 -translate-y-1/2 flex flex-col text-accent space-y-8">
        <button className="p-2 bg-hover rounded-md ">
          <FiGrid size={24} className=" stroke-[1.5px] " />
        </button>
        <button className="p-2 hover:bg-hover rounded-md">
          <FiActivity size={24} className=" stroke-[1.5px] " />
        </button>
        <button className="p-2 hover:bg-hover rounded-md">
          <FiClipboard size={24} className=" stroke-[1.5px] " />
        </button>
        <button className="p-2 hover:bg-hover rounded-md">
          <FiUser size={24} className=" stroke-[1.5px] " />
        </button>
        <button className="p-2 hover:bg-hover rounded-md">
          <FiSettings size={24} className=" stroke-[1.5px] " />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
