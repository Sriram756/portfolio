import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { navLogo } from "../utils";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-screen bg-slate-50 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-8 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center text-xl md:text-2xl font-bold text-black"
        >
          <img src={navLogo} alt="Logo" className="h-10 w-10 mr-2" /> Portfolio
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {[
            { name: "Home", to: "home" },
            { name: "About", to: "about" },
            { name: "Projects", to: "projects" },
            { name: "Contact", to: "contact" },
          ].map((item) => (
            <li key={item.to} className="btn">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-gray-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 text-white absolute top-full left-0 w-full h-screen py-4">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Home", to: "home" },
              { name: "About", to: "about" },
              { name: "Projects", to: "projects" },
              { name: "Contact", to: "contact" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer hover:text-gray-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

// import React, { useState } from "react";

// import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { Link } from "react-scroll";
// import { navLogo } from "../utils";
// const NavBar = () => {
//   let Links = [
//     { d: 1, link: "home" },
//     { d: 2, link: "about" },
//     { d: 3, link: "project" },
//     { d: 4, link: "services" },
//     { d: 5, link: "contact" },
//   ];
//   let [open, setOpen] = useState(false);

//   return (
//     <div className=" flex justify-between items-center w-full h-18 px-10 text-black bg-slate-50 py-3 fixed top-0 left-0 z-40">
//       {/* logo section */}
//       <div className="font-bold text-2xl cursor-pointer flex  gap-1">
//         <img src={navLogo} className="w-10 h-10" />
//         <span className="font-signature md:text-4xl text-xl">Sriram.Dev</span>
//       </div>

//       {/* linke items for large screen*/}
//       <ul className="hidden md:flex mr-5">
//         {Links.map(({ d, link }) => (
//           <li key={d} className="md:ml-8 md:my-0 my-7 font-semibold btn">
//             <Link to={link} smooth duration={500}>
//               {link}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       {/* Menu icon */}

//       <div
//         onClick={() => setOpen(!open)}
//         className="cursor-pointer relative z-10  w-7 h-7  md:hidden "
//       >
//         {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
//       </div>
//       {open && (
//         <ul className="flex flex-col justify-center items-center absolute  z-100 top-0  left-0 w-full h-screen bg-gradient-to-b from-slate-500 to-slate-400 text-black text-xl md:text-4xl">
//           {Links.map(({ d, link }) => (
//             <li key={d} className="md:ml-8 md:my-0 my-7 font-semibold ">
//               <Link
//                 to={link}
//                 onClick={() => setOpen(!open)}
//                 smooth
//                 duration={500}
//               >
//                 {link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };
// export default NavBar;
