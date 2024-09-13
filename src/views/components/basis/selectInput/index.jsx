import React, { useEffect, useRef, useState, useContext } from "react";
// react-icons
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import ThemeContext from "../../../contexts/themeContext";
// import { COUNTRIES } from "../../../../lib/countries";
import SearchBar from "../../searchBar/index";

const SelectInput = ({ setSelectedCountry, COUNTRIES }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Select a country");
  const selectRef = useRef(null);

  // const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleSelectedOption = (country) => {
    setOption(country.title);

    // setSelectedCountry(country.value);
    // handleClickOutside();
    setIsOpen(false);
  };

  const filterByName = (countryValue) => {
    const filteredCountry = COUNTRIES.filter();
  };

  return (
    <>
      <div
        ref={selectRef}
        // onClick={() => setIsOpen((isOpen) => !isOpen)}
        className={` bg-white absolute transition-all duration-300 delay-75 flex flex-col w-full z-50  ${
          isOpen ? " h-[28em]" : " "
        } justify-between rounded-xl shadow  p-3 max-sm:w-52`}
      >
        <div
          className=" bg-white  cursor-pointer flex justify-between items-center w-full z-50"
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        >
          <span> {option} </span>
          <span>
            {!isOpen ? (
              <BiChevronDown size={16} className=" stroke-0 " />
            ) : (
              <BiChevronUp size={16} className=" stroke-0 " />
            )}
          </span>
        </div>

        {isOpen && <SearchBar filterByName={filterByName} />}

        {isOpen && (
          <div className="  w-full z-10 duration-300 ease-in-out transition-all  ">
            <ul className={` bg-white# h-80 overflow-y-scroll `}>
              {COUNTRIES.map((country, id) => (
                <div
                  className=" flex items-center p-2 hover:bg-slate-200 rounded-lg cursor-pointer space-x-2 "
                  key={id + country.value}
                  onClick={() => handleSelectedOption(country)}
                >
                  <img src="" alt={country.value} />
                  <li className={``}>{country.title}</li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SelectInput;
