import React from "react";
import { Logo2 } from "../assets";

const Footer = () => {
  return (
    <div id="footer" className="bg-[#d9d9d9] bg-opacity-50">
      <div className="text-center mx-auto text-base py-8">
        <p>Post code: SW16 3PH</p>
        <p>443 Streatham road London,</p>
        <p>England</p>
        <p className="py-4 text-sm">Copyright - Nsano UK 2023</p>
        <a href="/">
          <img className="mx-auto w-32" src={Logo2} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
