import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import "@fontsource/roboto/400.css";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [openAvatarDropdown, setOpenAvatarDropdown] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
    setOpenAvatarDropdown(false);
  };

  const toggleAvatarDropdown = () => {
    setOpenAvatarDropdown(!openAvatarDropdown);
  };

  const navList = () => {
    return (
      <>
        {/* https://bank.uz/upload/iblock/81c/smnv0hygbj60d373zn8fxhma86mkb3ok.webp */}
        <ul className="flex space-x-5 font-light text-base">
          <li className="py-7">
            <div
              onClick={toggleAvatarDropdown}
              className="relative transition-all duration-500"
            >
              <span className="cursor-pointer">Products</span>
              <div
                className={`absolute ${
                  openAvatarDropdown ? "block" : "hidden"
                } bg-slate-300 rounded shadow-md mt-2 space-y-2`}
              >
                <div className="p-4 flex flex-col ">
                  <NavLink to="/profile">Profile</NavLink>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </div>
              </div>
            </div>
          </li>
          <li className="py-7">
            <NavLink
              to="/transfers"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "py-7 border-b-4 border-[#7000ff]" : ""
              }
            >
              Money Transfers
            </NavLink>
          </li>
          <li className="py-7">
            <NavLink
              to="/tariffs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "py-7 border-b-4 border-[#7000ff]" : ""
              }
            >
              Tariffs
            </NavLink>
          </li>
          <li className="py-7">
            <NavLink
              to="/vacancies"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "py-7 border-b-4 border-[#7000ff]" : ""
              }
            >
              Job opening
            </NavLink>
          </li>
          <li className="py-7">
            <NavLink
              to="/tender"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "py-7 border-b-4 border-[#7000ff]" : ""
              }
            >
              Tender
            </NavLink>
          </li>
          <li className="py-7">
            <NavLink
              to=""
            >
              Exchange rates
            </NavLink>
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <div className="bg-white shadow-lg font-DM">
        <div className="container mx-auto md:flex md:items-center justify-start">
          <div className="flex items-center">
            <button
              onClick={toggleNav}
              className="block md:hidden border border-gray-600 p-2 rounded text-gray-600 hover:bg-gray-200 focus:outline-none focus:bg-gray-300"
            >
              <svg
                className={`w-6 h-6 ${openNav ? "hidden" : "block"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${openNav ? "block" : "hidden"}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="w-full flex justify-between items-center">
            <nav className="hidden md:flex space-x-4 ">{navList()}</nav>
            <SearchIcon className="" />
          </div>

          <div
            className={`${
              openNav ? "" : "hidden"
            } mt-4  bg-slate-400 flex flex-col gap-4 p-6  rounded `}
          >
            {navList()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
