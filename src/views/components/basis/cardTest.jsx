import React from "react";

const CardTest = ({title, amount}) => {
  return (
    <div className="bg-white text-primary p-5 rounded-2xl w-1/3 ">
      <p className=" font-semi opacity-85">{title}</p>
      <h2 className="text-2xl font-semibold">${amount}</h2>
    </div>
  );
};

export default CardTest;
