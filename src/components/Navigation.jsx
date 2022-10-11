import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-around p-3 md:p-4 md:px-6 items-center shadow-md relative z-20 w-screen overflow-hidden bg-white">
      <button>
        <span className="material-symbols-outlined translate-y-1 md:hidden">
          menu
        </span>
      </button>
      <Link
        to="/"
        className="inline-block m-auto md:m-0 translate-x-4 md:translate-x-0"
      >
        <img
          className="w-22 min-w-[80px]"
          src="/assets/logo-udemy.svg"
          alt="udemy.com"
        />
      </Link>
      <button className="text-sm hover:text-primary mx-3 hidden md:inline-block">
        Categories
      </button>

      <form
        action="/"
        id="search"
        className="grow shrink min-w-[150px] bg-[#f7f9fa] border border-black py-2 rounded-full hidden md:flex items-center mx-2"
      >
        <button type="submit" className="pl-3 translate-y-1 text-gray-500">
          <span className="material-symbols-outlined">search</span>
        </button>
        <input
          type="text"
          id="searchbar"
          name="searchbar"
          className="grow mx-4 bg-transparent focus:outline-none w-10/12"
          placeholder="Search for anything"
        />
      </form>

      <button className="text-sm hover:text-primary mx-3 hidden xl:inline-block whitespace-nowrap">
        Udemy Business
      </button>
      <button className="text-sm hover:text-primary mx-3 hidden lg:inline-block whitespace-nowrap">
        Teach on Udemy
      </button>

      <button type="submit" className="translate-y-1 mx-2 md:hidden">
        <span className="material-symbols-outlined">search</span>
      </button>
      <button className="hover:text-primary mx-3 translate-y-1">
        <span className="material-symbols-outlined">shopping_cart</span>
      </button>

      <div className="md:flex hidden">
        <Link
          to="/"
          className="border border-black px-5 py-2 font-bold mx-1 hover:bg-gray-100 whitespace-nowrap text-center"
        >
          Log in
        </Link>
        <Link
          to="/"
          className="border border-black px-5 py-2 font-bold bg-black text-white mx-1 whitespace-nowrap text-center"
        >
          Sign up
        </Link>
        <button className="border border-black flex justify-center items-center px-2 hover:bg-gray-100">
          <span className="material-symbols-outlined">language</span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
