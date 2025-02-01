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
