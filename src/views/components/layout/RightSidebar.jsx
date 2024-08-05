import React from "react";
import { BsBell, BsChevronDown, BsThreeDots } from "react-icons/bs";

const TransactionItem = ({ icon, title, date, amount }) => {
  return (
    <li className="flex justify-between">
      <div className=" flex items-center space-x-2">
        <span className={`w-12 h-12 rounded-full flex justify-center items-center ${icon}`}>
        </span>

        <div className=" flex flex-col ">
          {" "}
          <span>{title}</span>{" "}
          <span className="opacity-40 text-xs">{date}</span>
        </div>
      </div>

      <span>{amount}</span>
    </li>
  );
};

const RightSidebar = () => {
  const SiMastercard = (props) => {
    return (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        role="img"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        {...props}
      >
        <title />
        <path d="M11.343 18.031c.058.049.12.098.181.146-1.177.783-2.59 1.238-4.107 1.238C3.32 19.416 0 16.096 0 12c0-4.095 3.32-7.416 7.416-7.416 1.518 0 2.931.456 4.105 1.238-.06.051-.12.098-.165.15C9.6 7.489 8.595 9.688 8.595 12c0 2.311 1.001 4.51 2.748 6.031zm5.241-13.447c-1.52 0-2.931.456-4.105 1.238.06.051.12.098.165.15C14.4 7.489 15.405 9.688 15.405 12c0 2.31-1.001 4.507-2.748 6.031-.058.049-.12.098-.181.146 1.177.783 2.588 1.238 4.107 1.238C20.68 19.416 24 16.096 24 12c0-4.094-3.32-7.416-7.416-7.416zM12 6.174c-.096.075-.189.15-.28.231C10.156 7.764 9.169 9.765 9.169 12c0 2.236.987 4.236 2.551 5.595.09.08.185.158.28.232.096-.074.189-.152.28-.232 1.563-1.359 2.551-3.359 2.551-5.595 0-2.235-.987-4.236-2.551-5.595-.09-.08-.184-.156-.28-.231z" />
      </svg>
    );
  };

  const transactionsData = [
    {
      icon: "bg-accent rounded-full flex justify-center items-center",
      title: "Walmart",
      date: "03 Oct 2021",
      amount: "-$107.40",
    },
    {
      icon: "bg-accent rounded-full flex justify-center items-center",
      title: "Apple music",
      date: "03 Oct 2021",
      amount: "-$60.00",
    },
    {
      icon: "bg-accent rounded-full flex justify-center items-center",
      title: "Figma",
      date: "03 Oct 2021",
      amount: "-$14.99",
    },
    {
      icon: "bg-accent rounded-full flex justify-center items-center",
      title: "Salary",
      date: "03 Oct 2021",
      amount: "+$2500.00",
    },
    {
      icon: "bg-accent rounded-full flex justify-center items-center",
      title: "Amazon",
      date: "02 Oct 2021",
      amount: "-$149.99",
    },
  ];

  return (
    <aside className=" text-primary bg-background p-8 px-6 w-[25%] space-y-8 rounded-e-3xl">
      <div className="flex justify-end items-center space-x-5">
        <div className=" relative flex cursor-pointer">
          <div className="absolute h-4 w-4 rounded-full bg-accent border-2 border-background z-10 -right-[1px] "></div>

          <BsBell size={28} className=" opacity-40 z-0" />
        </div>
        <span className=" w-10 h-10 bg-primary rounded-full cursor-pointer "></span>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center opacity-85">
          <h2 className="text-sm font-semibold  ">My cards</h2>
          <BsThreeDots className=" opacity-60" />
        </div>

        <div className="mt-4">
          <div className=" bg-accent text-white p-4 rounded-2xl flex justify-between items-center">
            <div className=" w-full h-36 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className=" text-sm ">**** 9843</h3>
                <div className="text-white bg-white bg-opacity-10 p-1  rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 10 12 10zM12 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 4 12 4zM12 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2S13.1 16 12 16z"></path>
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-sm">Acc. balance</p>

                <div className="flex justify-between items-end">
                  <h2 className="text-xl font-semibold">$39,554.12</h2>
                  <SiMastercard className={"w-8 h-5"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 py-4">
        <div className=" flex justify-between">
          <h2 className="text-sm font-medium opacity-80">
            Recent transactions
          </h2>

          <div className="flex space-x-1 items-center font-medium opacity-40">
            <span>All</span>
            <BsChevronDown />
          </div>
        </div>

        <ul className=" font-bold text-slate-900 opacity-90">
          <h6 className="text-xs opacity-40 mb-4">Today</h6>
          <div className="space-y-5 font-bold text-slate-900 opacity-90 ">
            {transactionsData.slice(0, 4).map((transaction, index) => (
              <TransactionItem
                key={index}
                icon={transaction.icon}
                title={transaction.title}
                date={transaction.date}
                amount={transaction.amount}
              />
            ))}
          </div>
          <h6 className="text-xs opacity-40 my-6">Yesterday</h6>
          <TransactionItem
            icon="bg-accent rounded-full flex justify-center items-center "
            title="Amazon"
            date="02 Oct 2021"
            amount={transactionsData[4].amount}
          />
        </ul>
      </div>
      <div className=" text-center">
        <button className="bg-accent bg-opacity-90 text-center font-semibold text-white px-4 py-2 rounded-xl">
          Get statement
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
