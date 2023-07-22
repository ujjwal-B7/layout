import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex flex-wrap bg-nav justify-around items-center fixed h-20 w-full text-white ">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div>
          <ul className="md:flex hidden  gap-x-5 ">
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
          className={`md:hidden absolute bg-transparent rounded-bl-3xl w-2/4 h-[30rem]  top-16  shadow-2xl  text-center pt-10 transition-all ease-in duration-500
        ${open ? "right-0" : "right-[-28rem]"}
        
        `}
        >
          <li className="py-5 md:py-0 ">
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
