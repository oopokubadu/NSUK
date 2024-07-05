import React from "react";
import { Logo2 } from "../assets";

const Footer = () => {
  return (
    <div className="bg-[#d9d9d9]">
      <div className="text-center mx-auto text-base py-5">
       <p >Post code: SW16 3PH</p> 
        <p >443 Streatham road London,</p>
        <p >England</p>
        <p className="py-4 text-sm">Copyright - Nsano UK 2023</p>
        <img className="mx-auto w-32" src={Logo2} alt=""/>
      </div>

    </div>
  );
};

export default Footer;
