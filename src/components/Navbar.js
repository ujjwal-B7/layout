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
      <nav className="flex bg-nav justify-between items-center fixed h-20 w-full text-white z-50 lg:px-40 px-7">
        <Link to="/" data-aos="fade-right">
          <img src="./images/logo.png" alt="logo" />
        </Link>
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
          className={`lg:hidden absolute bg-[#e1e1e1]/90 text-nav
          rounded-bl-md w-[60%] h-screen top-0 shadow-2xl text-center pt-20 transition-all ease-in duration-500 z-50 ${
            open ? "right-0" : "right-[-32rem]"
          }
          `}
        >
          <li className="py-3 lg:py-0">
            <Link to="/">HOME</Link>
          </li>
          <li className="py-3 lg:py-0">
            <Link to="/service">SERVICE</Link>
          </li>
          <li className="py-3 lg:py-0">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="py-3 lg:py-0">
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <div
          ref={hamRef}
          className="lg:hidden text-3xl text-white"
          onClick={() => setOpen(!open)}
        >
          <ion-icon name="menu"></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
