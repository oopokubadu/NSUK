import React from "react";
import { Logo, Phone } from "../assets";

const NavHeader = () => {
  return (
    <div>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-[#f9f9f9] text-sm py-3">
        <nav
          className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center w-full justify-between">
            <a
              className="flex-none text-xl font-semibold text-white"
              href="/"
              aria-label="Nsano Uk"
            >
              <img className="w-32" src={Logo} alt="" />
            </a>
            <div className="">
              <button
                type="button"
                className="  flex justify-center items-center gap-x-2 py-2 px-3 font-semibold rounded-full border-2 border-[#4d4d4d] text-[#4d4d4d]"
              >
                <img src={Phone} alt="" />
                <p>Contact Us</p>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavHeader;
