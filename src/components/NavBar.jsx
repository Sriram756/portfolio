import React, { useState } from "react";

import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";
import { navLogo } from "../utils";
const NavBar = () => {
  let Links = [
    { d: 1, link: "home" },
    { d: 2, link: "about" },
    { d: 3, link: "project" },
    { d: 4, link: "services" },
    { d: 5, link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow flex justify-between items-center w-full h-18 px-4 text-black bg-slate-50 py-3 fixed top-0 left-0 z-40">
      {/* logo section */}
      <div className="font-bold text-2xl cursor-pointer flex  gap-1">
        <img src={navLogo} className="w-10 h-10" />
        <span className="font-signature text-4xl">Sriram.Dev</span>
      </div>

      {/* linke items for large screen*/}
      <ul className="hidden md:flex mr-5">
        {Links.map(({ d, link }) => (
          <li key={d} className="md:ml-8 md:my-0 my-7 font-semibold btn">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      {/* Menu icon */}

      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer z-10  w-7 h-7 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
      {open && (
        <ul className="flex flex-col justify-center items-center absolute  z-100 top-0  left-0 w-full h-screen bg-gradient-to-b from-slate-500 to-slate-400 text-black text-4xl">
          {Links.map(({ d, link }) => (
            <li key={d} className="md:ml-8 md:my-0 my-7 font-semibold ">
              <Link
                to={link}
                onClick={() => setOpen(!open)}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default NavBar;
