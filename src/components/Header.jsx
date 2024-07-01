import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 border-solid border-b border-grey-50">
      <div className="container flex justify-between h-13 mx-auto">
        <ul
          className={`items-stretch space-x-3 lg:flex ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <li className="flex">
            <Link
              to="/section/fiction"
              className="text-xs flex items-center font-semibold hover:underline px-4 -mb-1"
            >
              Fiction
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/section/poetry"
              className="text-xs flex items-center font-semibold hover:underline px-4 -mb-1"
            >
              Poetry
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/section/nonfiction"
              className="text-xs flex items-center font-semibold hover:underline px-4 -mb-1"
            >
              Nonfiction
            </Link>
          </li>
        </ul>
        <Link to="/" className="flex items-center p-2 font-bold">
          Digital Magazine
        </Link>
        <div className="lg:flex items-center hidden md:space-x-4">
          <li className="flex">
            <a
              href="#"
              className="text-xs flex items-center font-semibold hover:underline px-4 -mb-1"
            >
              Link
            </a>
          </li>
          <li className="flex">
            <button
              type="button"
              className="hidden px-6 py-1 text-xs lg:block bg-blue-500 text-white"
            >
              Log in
            </button>
          </li>
          <li className="flex">
            <a href="#">
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 dark:text-gray-800"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </a>
          </li>
        </div>
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
