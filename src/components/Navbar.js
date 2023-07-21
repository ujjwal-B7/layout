import React from "react";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="flex justify-around items-center h-20 w-full bg-slate-200 text-white">
        <div>
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div>
          <ul
            className={`md:flex md:static absolute w-52  md:h-5  h-96 text-center md:gap-x-5 md:bg-inherit bg-blue-500 top-20 rounded-bl-[7rem] transition-all ease-in duration-500  z-[-1]
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
        </div>

        <div
          className="md:hidden text-3xl text-blue-500 "
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
