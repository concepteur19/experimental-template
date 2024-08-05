import React from "react";
import AccountSummary from "./AccountSummary";
import MoneyInOut from "./MoneyInOut";
import SpendingChart from "./SpendingChart";
import TransactionsList from "./TransactionList";
import ExchangeRate from "./ExchangeRate"

const Main = () => {
  return (
    <main className=" flex space-x-[2px] w-full ">
      <div className="flex flex-col space-y-[2px] w-2/3 ">
        <AccountSummary />
        <MoneyInOut />
        <SpendingChart />
      </div>
      <div className="flex flex-col space-y-[2px] w-1/3 ">
        <TransactionsList />
        <ExchangeRate />
      </div>
    </main>
  );
};

export default Main;