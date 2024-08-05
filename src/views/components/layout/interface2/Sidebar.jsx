import React from "react";
import { FaHome } from "react-icons/fa";
import { FiBell, FiCreditCard, FiHome, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <aside className="w-[20%] bg-newBg p-6 pt-12 rounded-2xl space-y-16">
      <div className="flex justify-between items-center cursor-pointer">
        <span> <span className="font-bold text-3xl ">b</span> broll</span>
        <span className='text-sm text-gray-400'>business</span>
      </div>
      <div className="flex items-center ">
        <img
          src="profile.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full bg-newTxt bg-opacity-80 cursor-pointer"
        />
        <div className="ml-4">
          <h2 className="text-l font-bold cursor-pointer">GTR Group Ltd</h2>
          <p className="text-s text-gray-600 cursor-pointer">@john090</p>
        </div>
      </div>
      <nav className="space-y-4">
        <a
          href="#1"
          className="flex items-center text-newTxt bg-gray-950 bg-opacity-5 p-3 rounded-xl "
        >
          <FaHome className="text-xl" />
          <span className="ml-2">Home</span>
        </a>
        <a
          href="#2"
          className="flex items-center text-newTxt   hover:bg-gray-950 hover:bg-opacity-5  p-3 rounded-lg"
        >
          <FiCreditCard className="text-xl" />
          <span className="ml-2">Cards</span>
        </a>
        <a
          href="#3"
          className="flex items-center text-newTxt   hover:bg-gray-950 hover:bg-opacity-5  p-3 rounded-lg"
        >
          <FiHome className="text-lg" />
          <span className="ml-2">Hub</span>
        </a>
        <a
          href="#4"
          className="flex items-center text-newTxt   hover:bg-gray-950 hover:bg-opacity-5  p-3 rounded-lg"
        >
          <FiBell className="text-lg" />
          <span className="ml-2">Notifications</span>
        </a>
        <a
          href="#5"
          className="flex items-center text-newTxt   hover:bg-gray-950 hover:bg-opacity-5 p-3 rounded-lg"
        >
          <FiLogOut className="text-xl" />
          <span className="ml-2">Logout</span>
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
