"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full h-[80px] bg-[#232536]">
      <div className="flex justify-between items-center h-full w-full px-16">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2 className="text-white font-semibold tracking-widest text-2xl leading-none">
              Finsweet
            </h2>
          </Link>
        </div>

        {/* Menu Desktop (Masqué sur mobile) */}
        <div className="hidden sm:flex items-center">
          <ul className="flex">
            {[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`ml-10 ${
                    pathname === link.path ? "text-gray-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="ml-3">
            <button className="px-4 py-2 text-black bg-white">Subscribe</button>
          </Link>
        </div>

        {/* Bouton Hamburger (Visible sur mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile (affiché si menuOpen est true) */}
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-[#232536] text-white py-5 z-[11] ">
          <ul className="flex flex-col items-center space-y-4">
            {[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)} // Ferme le menu après un clic
                  className={`text-lg ${
                    pathname === link.path ? "text-gray-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
