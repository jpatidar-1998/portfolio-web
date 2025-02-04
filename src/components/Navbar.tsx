import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-zinc-800 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-cyan-300 text-xl font-bold">
          Jaya Patidar
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-white font-medium">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className={`px-3 py-2 rounded-lg transition ${
                    location.pathname === `/${item.toLowerCase()}`
                      ? "bg-cyan-500 text-zinc-900"
                      : "hover:text-cyan-400"
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-black text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-zinc-900 p-4">
          <ul className="flex flex-col gap-4 text-white text-lg">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item} onClick={() => setMenuOpen(false)}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="block p-2 hover:text-cyan-400 transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
