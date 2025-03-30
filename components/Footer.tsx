import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#232536] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Navbar du footer */}
        <div className="w-full h-[80px] my-14 ">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            {/* Logo */}
            <div>
              <Link href="/">
                <h2 className="text-white font-semibold tracking-widest text-2xl leading-none">
                  Finsweet
                </h2>
              </Link>
            </div>

            {/* Liens (en colonne sur mobile) */}
            <ul className="flex flex-col sm:flex-row sm:space-x-7 mt-4 sm:mt-0 text-center">
              <Link href="/">
                <li className="text-white hover:text-gray-400 cursor-pointer">Home</li>
              </Link>
              <Link href="/blog">
                <li className="text-white hover:text-gray-400 cursor-pointer">Blog</li>
              </Link>
              <Link href="/about">
                <li className="text-white hover:text-gray-400 cursor-pointer">About Us</li>
              </Link>
              <Link href="/contact">
                <li className="text-white hover:text-gray-400 cursor-pointer">Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Section Newsletter */}
        <div className="bg-[#1E1E1E] py-8 px-6 md:px-10 rounded-lg flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-center md:text-left mb-4 md:mb-0">
            Subscribe to our newsletter to get latest updates and news
          </h2>
          <div className="flex flex-col sm:flex-row w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-3 w-full sm:w-60 text-black rounded-t-md sm:rounded-l-md sm:rounded-t-none outline-none"
            />
            <button className="bg-[#FDC221] text-black font-semibold px-6 py-3 rounded-b-md sm:rounded-r-md sm:rounded-b-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* Section Informations & Réseaux sociaux */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm text-center md:text-left">
          <p className="mb-4 md:mb-0">
            Finstreet 118 2561 Fintown <br />
            Hello@finsweet.com | 020 7993 2905
          </p>
          <div className="flex space-x-4">
            <FaFacebookF className="hover:text-white cursor-pointer text-lg" />
            <FaTwitter className="hover:text-white cursor-pointer text-lg" />
            <FaInstagram className="hover:text-white cursor-pointer text-lg" />
            <FaLinkedinIn className="hover:text-white cursor-pointer text-lg" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
