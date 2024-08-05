import React from "react";
import Sidebar from "../../components/layout/interface2/Sidebar";
import Navbar from "../../components/layout/interface2/Navbar";
import Main from "../../components/layout/interface2/main/index";

const Interface2 = () => {
  return (
    <div className=" flex justify-center space-x-[2px] bg-[#687795] p-1 w-full ">
      <Sidebar />
      <div className=" flex flex-col space-y-[2px] w-full ">
        <Navbar />
        <Main />
      </div>
    </div>
  );
};

export default Interface2;
