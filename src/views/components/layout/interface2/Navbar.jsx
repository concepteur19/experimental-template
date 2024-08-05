import React from 'react';
import { FiPieChart, FiCalendar, FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-newBg p-4 px-6 rounded-2xl text-sm ">
      <div className="flex items-center p-2 rounded border border-newTxt border-opacity-30 ">
        <FiSearch className="text-gray-400 " />
        <input
          type="text"
          placeholder="Search"
          className=" ml-2 outline-none bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-newTxt border-newTxt border-[0.5px] border-opacity-60 font-semibold  px-4 py-2 rounded-lg">
          <FiCalendar className="mr-2" /> Scheduled
        </button>
        <button className="flex items-center bg-newTxt text-white px-4 py-2 rounded-lg">
          <FiPieChart className="mr-2 stroke-4" /> Analytics
        </button>
      </div>
    </header>
  );
};

export default Header;
