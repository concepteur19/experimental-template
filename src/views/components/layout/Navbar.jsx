import React from "react";
import CardTest from "../basis/cardTest";
import { FiSearch } from "react-icons/fi";

const data = [
  {
    title: "Acc. balance",
    amount: "39,554.12",
  },
  {
    title: "Monthly income",
    amount: "9,500.00",
  },
  {
    title: "Interest income",
    amount: "3,554.125",
  },
];

const Navbar = () => {
  return (
    <>
      <header className="flex flex-col  space-y-6 ">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-light text-primary">
            Welcome back, <span className="font-bold">Alex</span>
          </h1>

          <div className="relative text-primary flex items-center border-b border-primary opacity-50">
            <FiSearch className=" absolute left-1" />
            <input
              type="text"
              placeholder="Search"
              className="ml-4 px-2 py-1 font-light text-sm  bg-background border-primary outline-none placeholder-primary"
            />
          </div>
        </div>
        <div className=" flex justify-between space-x-8">
          {data.map((card, id) => {
            return (
              <CardTest title={card.title} amount={card.amount} key={id} />
            );
          })}{" "}
        </div>
      </header>
    </>
  );
};

export default Navbar;
