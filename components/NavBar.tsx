"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false); // Gérer l'affichage du menu utilisateur
  const pathname = usePathname();
  const [user, setUser] = useState<{ email: string } | null>(null);
  const router = useRouter();

  const handleEmailClick = () => {
    router.push('/author');
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("/api/session");
        const data = await response.json();
        if (data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    fetchSession();
  }, []);

  // Fonction pour se déconnecter
  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    setUserMenuOpen(false); 
    router.push('/login');

  };

  return (
    <nav className="w-full h-[80px] bg-[#232536] relative">
      <div className="flex justify-between items-center h-full w-full px-16">
        {/* Logo */}
        <div>
          <Link href="/">
            <h2 className="text-white font-semibold tracking-widest text-2xl leading-none">
              Finsweet
            </h2>
          </Link>
        </div>

        {/* Menu Desktop */}
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

          {/* Affichage selon la connexion */}
          {user ? (
            <div className="relative">
              {/* Avatar cliquable */}
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="ml-3 w-10 h-10 flex items-center justify-center bg-white text-black rounded-full text-lg font-semibold"
              >
                {user.email.slice(0, 2).toUpperCase()}
              </button>

              {/* Menu déroulant */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
                  <ul className="text-black">
                    <li className="px-4 py-2 border-b cursor-pointer" onClick={handleEmailClick}>{user.email}</li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left hover:bg-gray-200"
                      >
                        Déconnexion
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className="ml-3">
              <button className="px-4 py-2 text-black bg-white">
                Subscribe
              </button>
            </Link>
          )}
        </div>

        {/* Bouton Hamburger (Mobile) */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="sm:hidden absolute top-20 left-0 w-full bg-[#232536] text-white py-5 z-[11]">
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
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg ${
                    pathname === link.path ? "text-gray-400" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Affichage mobile */}
          <div className="flex justify-center mt-4">
            {user ? (
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="w-10 h-10 flex items-center justify-center bg-white text-black rounded-full text-lg font-semibold"
              >
                {user.email.slice(0, 2).toUpperCase()}
              </button>
            ) : (
              <Link href="/login">
                <button className="px-4 py-2 text-black bg-white">
                  Subscribe
                </button>
              </Link>
            )}
          </div>

          {/* Menu déroulant mobile */}
          {user && userMenuOpen && (
            <div className="flex flex-col items-center mt-2 bg-white text-black p-2 rounded-lg shadow-lg">
              <p className="px-4 py-2 border-b">{user.email}</p>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-left hover:bg-gray-200"
              >
                Déconnexion
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
