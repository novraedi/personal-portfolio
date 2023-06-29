import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <header className="py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <img src={Logo} alt="Logo" className="w-11 md:w-15" />
        </div>
        <ul
          className={`flex flex-col md:flex md:flex-row md:items-center md:pb-0 px-5 absolute md:static bg-white md:z-auto z-[100] left-0 w-full md:w-auto md:pl-0 top-16
          transition-all duration-500 ease-in ${
            showMenu ? "top-20" : "hidden"
          }`}
        >
          <li className="inline-block md:inline-block px-4 md:px-8 p-3 md:p-1">
            <a href="#">Home</a>
          </li>
          <li className="inline-block md:inline-block px-4 md:px-8 p-3 md:p-1">
            <a href="#">About</a>
          </li>
          <li className="inline-block md:inline-block px-4 md:px-8 p-3 md:p-1">
            <a href="#">Portofolio</a>
          </li>
        </ul>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer md:hidden"
        >
          {showMenu ? (
            <AiOutlineClose size={30} />
          ) : (
            <GiHamburgerMenu size={30} />
          )}
        </div>
        <div className="hidden md:block">
          <button className=" bg-black hover:bg-slate-800 text-white px-4 py-2 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
