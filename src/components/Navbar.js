import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const hamRef = useRef();
  useEffect(() => {
    let handle = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  });
  return (
    <header>
      <nav className="flex flex-wrap bg-nav justify-around items-center fixed h-24 w-full text-white z-50">
        <div data-aos="fade-right">
          <img src="./images/logo.png" alt="logo" />
        </div>
        <div className="text-lg">
          <ul className="lg:flex hidden  gap-x-10 ">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/service">SERVICE</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <ul
          ref={menuRef}
          className={`lg:hidden absolute bg-black bg-opacity-30
          rounded-bl-full w-2/4 h-screen top-0  shadow-2xl text-2xl text-center pt-20 transition-all ease-in duration-500
          ${open ? "right-0" : "right-[-32rem]"}
          `}
        >
          <li className="py-5 lg:py-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/service">SERVICE</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="py-5 lg:py-0">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
