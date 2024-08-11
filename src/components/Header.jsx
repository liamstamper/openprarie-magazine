import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-50 sticky top-0 border-b border-gray-200">
      <div className="container flex justify-between items-center h-13 mx-auto px-4">
        <Link
          to="/"
          className="flex items-center text-lg p-2 font-bold tracking-wide uppercase"
        >
          Digital Magazine
        </Link>
        <button
          title="Open menu"
          type="button"
          className="p-4 lg:hidden"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-800"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-16 6h16"
              />
            )}
          </svg>
        </button>
        <div
          className={`absolute w-full bg-white z-20 lg:bg-transparent lg:static lg:flex lg:items-center lg:justify-between lg:w-auto transition-all duration-500 ease-in ${
            isMenuOpen ? "top-14 left-0" : "top-[-490px]"
          }`}
        >
          <ul className="flex flex-col lg:flex-row items-center justify-between min-h-[250px] lg:min-h-0">
            <li className="my-8 lg:my-0 ">
              <Link
                to="/section/Fiction and Non-Fiction"
                className="block py-2 text-center text-sm font-semibold lg:inline-block lg:p-4 hover:text-blue-500"
              >
                Fiction & Non-Fiction
              </Link>
            </li>
            <li className="my-8 lg:my-0">
              <Link
                to="/section/Flash Fiction"
                className="block py-2 text-center text-sm font-semibold lg:inline-block lg:p-4 hover:text-blue-500"
              >
                Flash Fiction
              </Link>
            </li>
            <li className="my-8 font-semibold lg:my-0">
              <Link
                to="/section/Poetry and Experimental"
                className="block py-2 text-center text-sm lg:inline-block lg:p-4 hover:text-blue-500"
              >
                Poetry & Experimental
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/submissions"
            className="text-sm font-semibold hover:text-blue-500 px-4 -mb-1"
          >
            Submissions
          </Link>
          <Link
            to="/newsletter"
            className="px-6 py-1 bg-blue-600 text-white hover:bg-blue-500 text-sm"
          >
            Newsletter
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
