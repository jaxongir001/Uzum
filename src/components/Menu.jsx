import { NavLink } from "react-router-dom";
import ExtensionIcon from '@mui/icons-material/Extension';
import { useState, useEffect } from "react";

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrolled = scrollTop > 80;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`w-full sticky top-0  bg-white z-10 ${isScrolled ? 'shadow-md ' : ''}`}>
      <div className="container bg-white mx-auto border-b flex justify-between">
        <ul className="flex space-x-5 items-center h-[100%]">
          <li>
            <img className="w-32" src="https://depozit.uz/image_uploads/banks/55/original/1f135319fd6cc7502052a2a5b74831b5_webp.webp" alt="" />
          </li>
          <li className=" h-[100%]">
            <NavLink
                style={{background: "linear-gradient(180deg,hsla(0,0%,100%,0),rgba(201,184,255,.2))"}}
              className={"py-11 px-2 border-b-4 border-[#7000ff]"}
            >
              For individuals
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/span"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-900" : ""
              }
            >
              For business
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center space-x-5">
          <li>
            <ExtensionIcon />
          </li>
          <li>
            <select className="hover:bg-slate-200 p-3 rounded outline-none duration-200" name="" id="">
              <option value="">English</option>
              <option value="">Rus</option>
              <option value="">Uzbek</option>
            </select>
          </li>
          <li>
            <button className="py-3 px-5 rounded-md bg-[#7000ff] text-white">Sign in to account</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
