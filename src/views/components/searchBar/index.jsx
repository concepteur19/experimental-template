import React from "react";
// components
import Input from "../Shared/Input";
// react-icons
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ filterByName }) => {

  return (
    <div
      className={` text-slate-200 flex items-center  max-sm:w-full px-6 py-1 space-x- rounded-lg shadow-inner text-sm text-inputColor my-4`}
    >
      <BiSearch size={24} className=" stroke-[0px]  cursor-pointer mr-3 " />
      <Input
        inputId="searchBar"
        inputType="text"
        placeholder="Search for countries"
        handleChange={(e) => filterByName(e.target.value)}
        inputClass=" font-light bg-elementLight outline-none bg-transparent "
      />
    </div>
  );
};

export default SearchBar;
