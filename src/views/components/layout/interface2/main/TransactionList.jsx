import React from "react";
import {
  BsArrowDown,
  BsArrowRepeat,
  BsArrowRight,
  BsArrows,
} from "react-icons/bs";
import { FaMoneyCheckAlt, FaArrowUp, FaArrowDown } from "react-icons/fa";
import { FiArrowDown, FiArrowDownCircle, FiArrowRight } from "react-icons/fi";

const transactions = [
  {
    id: 1,
    icon: (
      <div className="rounded-full border border-newTxt w-12 flex flex-col p-2 items-center justify-center">
        {" "}
        <BsArrowRight size={16} /> <BsArrowRight size={16} />
      </div>
    ),
    description: "CKS Salaries",
    date: "15 Aug, 14:21",
    amount: "€450.00",
  },
  {
    id: 2,
    icon: (
      <div className="rounded-full border border-newTxt bg-newTxt bg-opacity-35 w-12 flex flex-col p-3 items-center justify-center">
        {" "}
        <BsArrowDown size={20} className=" stroke-[0.1px] " />
      </div>
    ),
    description: "PSI Capital LDA",
    date: "15 Aug, 11:07",
    amount: "€1,300.00",
  },
  {
    id: 3,
    icon: (
      <div className="rounded-full border border-newTxt  w-12 flex flex-col p-3 items-center justify-center">
        {" "}
        <BsArrowRight size={20} className=" stroke-[0.1px] " />
      </div>
    ),
    description: "Octopus ltd",
    date: "15 Aug, 09:16",
    amount: "€837.89",
  },
  {
    id: 4,
    icon: (
      <div className="rounded-full border border-newTxt bg-newTxt bg-opacity-35 w-12 flex flex-col p-3 items-center justify-center">
        {" "}
        <BsArrowDown size={20} className=" stroke-[0.1px] " />
      </div>
    ),
    description: "Shell inc",
    date: "14 Aug, 15:41",
    amount: "€2,000.00",
  },
  {
    id: 5,
    icon: (
      <div className="rounded-full border border-newTxt bg-newTxt bg-opacity-35 w-12 flex flex-col p-3 items-center justify-center">
        {" "}
        <BsArrowDown size={20} className=" stroke-[0.1px] " />
      </div>
    ),
    description: "Ricardo Cruz ifor```jsxes",
    date: "14 Aug, 12:03",
    amount: "€150.00",
  },
  {
    id: 6,
    icon: (
      <div className="rounded-full border border-newTxt w-12 flex flex-col p-3 items-center justify-center">
        {" "}
        <BsArrows size={20} className=" stroke-[0.1px] " />
      </div>
    ),
    description: "EUR to UAH",
    date: "14 Aug, 10:30",
    amount: "€500.00",
    transfert: '20 425,93UAH'
  },
];

const TransactionsList = () => {
  return (
    <div className="bg-newBg p-6 rounded-2xl">
      <h2 className="text-2xl font-bold mb-8">Transactions</h2>
      <ul className="space-y-6">
        {transactions.slice(0, 3).map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center">
              {/* <FaMoneyCheckAlt className="text-newTxt" /> */}
              {transaction.icon}
              <div className="ml-4">
                <p className="">{transaction.description}</p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div>
              <p className=" font-bold text-right">{transaction.amount}</p>
              {transaction.transfert && <p className=" text-gray-400">{transaction.transfert}</p>}
              
            </div>
          </li>
        ))}

        <div className=" flex items-center justify-between space-x-2">
          <span className=" rounded-3xl bg-newTxt bg-opacity-10 p-2 text-newTxt text-opacity-60 w-24 text-center"> 14 Aug </span>
          <div className="border border-dashed w-full border-gray-400"> </div>
        </div>

        {transactions.slice(3, 6).map((transaction) => (
          <li
            key={transaction.id}
            className="flex justify-between items-center"
          >
            <div className="flex items-center">
              {/* <FaMoneyCheckAlt className="text-newTxt" /> */}
              {transaction.icon}
              <div className="ml-4">
                <p className="">{transaction.description}</p>
                <p className="text-sm text-gray-400">{transaction.date}</p>
              </div>
            </div>
            <div>
              <p className=" font-bold text-right">{transaction.amount}</p>
              {transaction.transfert && <p className=" text-gray-400">{transaction.transfert}</p>}
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsList;
