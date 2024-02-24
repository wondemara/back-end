import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="bg-white">
      <nav className="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
          >
            Real Estate
          </Link>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0">
          <Link href="/" className="text-sm text-gray-800 hover:text-blue-400">
            Home
          </Link>
          <Link
            href="/properties"
            className="text-sm text-gray-800 hover:text-blue-400"
          >
            Properties
          </Link>
          <Link
            href="/single-property"
            className="text-sm text-gray-800 hover:text-blue-400"
          >
            Single Properties
          </Link>
          <Link
            href="/contact-us"
            className="text-sm text-gray-800 hover:text-blue-400"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
