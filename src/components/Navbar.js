import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap bg-nav justify-around items-center fixed h-24 w-full text-white z-50">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="text-lg">
          <ul className="md:flex hidden  gap-x-10 ">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/service">SERVICE</a>
            </li>
            <li>
              <a href="/portfolio">PORTFOLIO</a>
            </li>
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </div>
        <ul
          className={`md:hidden absolute bg-black bg-opacity-20
           rounded-bl-full  w-2/4 h-screen   top-0  shadow-2xl  text-center pt-10 transition-all ease-in duration-500
        ${open ? "right-0" : "right-[-28rem]"}
        
        `}
        >
          <li className="py-5 md:py-0">
            <a href="/">HOME</a>
          </li>
          <li className="py-5 md:py-0">
            <a href="/service">SERVICE</a>
          </li>
          <li className="py-5 md:py-0">
            <a href="/portfolio">PORTFOLIO</a>
          </li>
          <li className="py-5 md:py-0">
            <a href="/contact">CONTACT</a>
          </li>
        </ul>
        <div
          className="md:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
