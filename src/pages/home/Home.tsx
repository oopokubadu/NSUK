import React from "react";
import { Globe } from "../../assets";

const Home = () => {
  return (
    <div>
      <section className="py-10 bg-[#f9f9f9] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[85rem]">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <img className="w-full max-w-md mx-auto" src={Globe} alt="" />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                <span className="text-[#F09020]">Nsano UK</span> is your gateway
                to Africa.
              </h2>
              <p className="mt-6 text-base text-gray-600">
                We provide expert management advise for your enterprise. Learn
                how to succeed in Africa. Africa isn’t one country. It’s made up
                of 54 different countries. We make you understand Africa. 
              </p>

              <a
                href="mailto:info@nsano-uk.com"
               
                className="inline-flex items-center rounded-full  justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-[#f09020] mt-9"
                role="button"
              >
                Talk to us today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
