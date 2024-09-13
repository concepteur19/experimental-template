// import "../src/styles/App.css";
// import React, { useState, useMemo } from "react";
// import Navbar from "./views/components/layout/Navbar";
// import Sidebar from "./views/components/layout/Sidebar";
// import RightSidebar from "./views/components/layout/RightSidebar";
// import Main from "./views/components/layout/main";
// import Interface2 from "./views/pages/interface2/index";
// import { COUNTRIES } from "./lib/countries";
// import SelectInput from "./views/components/basis/selectInput";
// import { FaSpinner } from "react-icons/fa";
// import { PiSpinnerThin } from "react-icons/pi";

// function App() {
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const optionsCar = [
//     "car1",
//     "car2",
//     "car3",
//     "car4",
//     "car5",
//     "car6",
//     "car7",
//     "car8",
//     "car9",
//     "car10",
//     "car11",
//   ];
//   const [formStep, setFormStep] = useState(1);
//   const steps = 5
//   const [completionPercentage, setCompPercentage] = useState(0);
//   const [isLoading, setLoading] = useState(false);

//   // let completionPercentage = 100 - 100 / steps;
//   // const width = `w-[${completionPercentage}]`;

//   const handleNext = () => {
//     setLoading(true);
//     const loadingTime = 3000;
//     setTimeout(() => {
//       setLoading(false);

//       setFormStep(formStep + 1);
//       setCompPercentage(completionPercentage + 100/steps )
//     }, loadingTime);
//   };

//   return (
//     <div className="App app-container py-8 w-full h-fit px-20 flex flex-col space-y-16">
//       {/* <h1 className="text-6xl">Experimental Template</h1>
//       <Button addclass=" bg-red-600" /> */}
//       {/* <Card
//         borderColor="border-gray-300"
//         title="Titre test"
//         subTitle="Sous titre test"
//         content="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
//       /> */}
//       <div className=" w-[50%] flex flex-col px-36">
//         <h1 className=" text-2xl font-semibold">SEACH VEHICLE PART</h1>
//         <div className=" bg-blue-400 w-full p-4 space-y-5">
//           <div className=" rounded-md bg-white w-full h-5 text-white">
//             <div
//               className={`bg-blue-700 ${
//                 completionPercentage > 0 ? `  p-[2px]` : " w-0 p-0"
//               } ${
//                 completionPercentage === 100 ? "rounded-md" : ""
//               }  text-xs rounded-l-md text-center`}
//               style={{ width: `${completionPercentage}%` }}
//             >
//               {completionPercentage}%
//             </div>
//           </div>

//           {/* step 1 */}
//           {formStep === 1 && (
//             <div className=" space-y-2">
//               <label htmlFor="country">Select a vehicle</label>
//               <select
//                 name="country"
//                 id="country"
//                 className=" rounded-lg w-full h-9 pl-2 outline-none "
//               >
//                 {/* <option value="">---</option> */}
//                 {optionsCar.map((option, id) => (
//                   <option value={option} key={id}>
//                     {" "}
//                     {option}{" "}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           )}

//           {/* step 2 */}
//           {formStep === 2 && (
//             <div className=" space-y-2">
//               <label htmlFor="country">Enter vehicle Year</label>
//               <input
//                 type="number"
//                 name="country"
//                 id="country"
//                 placeholder="Placeholder..."
//                 className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//               />
//             </div>
//           )}

//           {/* step 3 */}
//           {formStep === 3 && (
//             <div className=" space-y-2">
//               <label htmlFor="country">Enter vehicle Model</label>
//               <input
//                 type="text"
//                 name="country"
//                 id="country"
//                 placeholder="Placeholder..."
//                 className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//               />
//             </div>
//           )}

//           {/* step 4 */}
//           {formStep === 4 && (
//             <div className=" space-y-2">
//               <label htmlFor="country">Enter vehicle part</label>
//               <input
//                 type="text"
//                 name="country"
//                 id="country"
//                 placeholder="Placeholder..."
//                 className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//               />
//             </div>
//           )}

//           {/* step 5 */}
//           {formStep === 5 && (
// <div className=" space-y-4">
//   <div className=" space-y-2">
//     <label htmlFor="country">Email*</label>
//     <input
//       type="email"
//       name="country"
//       id="country"
//       placeholder="Placeholder..."
//       className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//     />
//   </div>

//   <div className=" space-y-2">
//     <label htmlFor="country">Instagram handle*</label>
//     <input
//       type="text"
//       name="country"
//       id="country"
//       placeholder="Placeholder..."
//       className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//     />
//   </div>

//   <div className=" space-y-2">
//     <label htmlFor="country">Phone Number*</label>
//     <input
//       type="text"
//       name="country"
//       id="country"
//       placeholder="Placeholder..."
//       className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
//     />
//   </div>

//   <div className=" space-y-2 relative w-full">
//     <label htmlFor="countries">Country*</label>
//     <SelectInput setSelectedCountry COUNTRIES={COUNTRIES} />
//   </div>
// </div>
//           )}

//           <div
//             className={`flex items-center ${
//               completionPercentage > 0 ? "justify-between" : "justify-end"
//             } ${formStep === 5 ? " pt-16" : "pt-2"} `}
//           >
//             {completionPercentage > 0 && (
//               <button className=" shadow-md bg-blue-600 hover:bg-blue-700 rounded-lg p-2 px-4 text-white transition-all duration-300 delay-75">
//                 PREVIOUS
//               </button>
//             )}
//             <button
//               onClick={() => handleNext()}
//               className="flex items-center space-x-2 shadow-md bg-blue-600 hover:bg-blue-700  rounded-lg p-2 px-4 text-white transition-all duration-300 delay-75"
//             >
//               {" "}
//               <span>NEXT</span>
//               {isLoading && <FaSpinner className=" animate-spin" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className=" w-full flex justify-center  text-primary">
//         <div className="flex space-x-[2px] w-full justify-center ">
//           <Sidebar></Sidebar>
//           <div className="p-8 bg-background w-[50%] space-y-8">
//             <Navbar></Navbar>
//             <Main />
//           </div>
//           <RightSidebar></RightSidebar>
//         </div>
//       </div>

//       <div className=" w-[90%] flex justify-center text-newTxt  ">
//         <Interface2></Interface2>
//       </div>
//     </div>
//   );
// }

// export default App;

import "../src/styles/App.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SelectInput from "./views/components/basis/selectInput";
import { FaSpinner } from "react-icons/fa";
import { COUNTRIES } from "./lib/countries";

function App() {
  const [formStep, setFormStep] = useState(1);
  const [completionPercentage, setCompPercentage] = useState(0);
  const [isLoading, setLoading] = useState(false);

  const optionsCar = [
    "car1",
    "car2",
    "car3",
    "car4",
    "car5",
    "car6",
    "car7",
    "car8",
    "car9",
    "car10",
    "car11",
  ];
  const steps = 5;

  const handleNext = () => {
    setLoading(true);
    const loadingTime = 500;
    setTimeout(() => {
      setLoading(false);
      setFormStep(formStep + 1);
      setCompPercentage(completionPercentage + 100 / steps);
    }, loadingTime);
  };

  const handlePrevious = () => {
    setFormStep(formStep - 1);
    setCompPercentage(completionPercentage - 100 / steps);
  };

  // Animation variants
  const inputVariants = {
    hidden: { scale: 0.8, opacity: 0, x: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
        delay: 0,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="App app-container py-8 w-full h-fit px-20 flex flex-col space-y-16 transition-all duration-300">
      <div className=" w-[50%] flex flex-col px-36 space-y-8">
        <h1 className=" text-2xl font-semibold">SEARCH VEHICLE PART</h1>
        <div className=" bg-blue-400 w-full p-4 space-y-5 rounded-lg ">
          <div className=" rounded-md bg-white w-full h-5 text-white">
            <div
              className={`bg-blue-700 transition-all duration-500 ${
                completionPercentage > 0 ? `  p-[2px]` : " w-0 p-0"
              } ${
                completionPercentage === 100 ? "rounded-md" : ""
              }  text-xs rounded-l-md text-center`}
              style={{ width: `${completionPercentage}%` }}
            >
              {completionPercentage}%
            </div>
          </div>

          {/* Form Steps */}
          {formStep === 1 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              className="space-y-2"
            >
              <label htmlFor="country">Select a vehicle</label>
              <select
                name="country"
                id="country"
                className=" rounded-lg w-full h-9 pl-2 outline-none "
              >
                {optionsCar.map((option, id) => (
                  <option value={option} key={id}>
                    {option}
                  </option>
                ))}
              </select>
            </motion.div>
          )}

          {formStep === 2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              className="space-y-2"
            >
              <label htmlFor="year">Enter vehicle Year</label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="Enter year..."
                className="border-1 rounded-lg w-full h-9 pl-2 outline-none"
              />
            </motion.div>
          )}

          {formStep === 3 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              className="space-y-2"
            >
              <label htmlFor="model">Enter vehicle Model</label>
              <input
                type="text"
                name="model"
                id="model"
                placeholder="Enter model..."
                className="border-1 rounded-lg w-full h-9 pl-2 outline-none"
              />
            </motion.div>
          )}

          {formStep === 4 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              className="space-y-2"
            >
              <label htmlFor="part">Enter vehicle part</label>
              <input
                type="text"
                name="part"
                id="part"
                placeholder="Enter part..."
                className="border-1 rounded-lg w-full h-9 pl-2 outline-none"
              />
            </motion.div>
          )}

          {formStep === 5 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={inputVariants}
              className="space-y-4"
            >
              {/* <div className=" space-y-4"> */}
              <div className=" space-y-2">
                <label htmlFor="country">Email*</label>
                <input
                  type="email"
                  name="country"
                  id="country"
                  placeholder="Placeholder..."
                  className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
                />
              </div>

              <div className=" space-y-2">
                <label htmlFor="country">Instagram handle*</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Placeholder..."
                  className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
                />
              </div>

              <div className=" space-y-2">
                <label htmlFor="country">Phone Number*</label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  placeholder="Placeholder..."
                  className="border-1 rounded-lg w-full h-9 pl-2 outline-none "
                />
              </div>

              <div className=" space-y-2 relative w-full">
                <label htmlFor="countries">Country*</label>
                <SelectInput setSelectedCountry COUNTRIES={COUNTRIES} />
              </div>
              {/* </div> */}
            </motion.div>
          )}

          {completionPercentage !== 100 ? (
            <div
              className={`flex items-center ${
                completionPercentage > 0 ? "justify-between" : "justify-end"
              } ${formStep === 5 ? " pt-16" : "pt-2"}`}
            >
              {completionPercentage > 0 && (
                <button
                  onClick={() => handlePrevious()}
                  className="shadow-md bg-blue-600 hover:bg-blue-700 rounded-lg p-2 px-4 text-white transition-all duration-300 delay-75"
                >
                  PREVIOUS
                </button>
              )}
              <button
                onClick={() => handleNext()}
                className="flex items-center space-x-2 shadow-md bg-blue-600 hover:bg-blue-700 rounded-lg p-2 px-4 text-white transition-all duration-300 delay-75"
              >
                <span>NEXT</span>
                {isLoading && <FaSpinner className="animate-spin" />}
              </button>
            </div>
          ) : (
            <div className=" text-center">
              <button className=" shadow-md bg-blue-600 hover:bg-blue-700 rounded-lg p-2 px-4 text-white transition-all duration-300 delay-75" onClick={() => window.location.reload()}>
                {" "}
                Submit form{" "}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
