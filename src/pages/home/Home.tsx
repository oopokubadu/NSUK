import React from "react";
import { Globe } from "../../assets";

const Home = () => {
  return (
    <div>
      <section className="py-10 bg-[#f9f9f9] sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-[85rem]">
          <div className="flex items-center flex-col-reverse  gap-y-12 lg:flex-row lg:gap-x-24">
            <div>
              <img
                className="w-full mx-auto max-w-xs md:max-w-md"
                src={Globe}
                alt=""
              />
            </div>

            <div className="text-center lg:text-left lg:max-w-2xl">
              <h2 className="text-4xl font-bold bhank leading-tight text-[#4d4d4d]  lg:text-6xl">
                <span className="text-[#F09020] bhank">Nsano UK</span> is your
                gateway to Africa.
              </h2>
              <p className="mt-6 text-base text-[#6C757D]">
                We provide expert management advise for your enterprise. Learn
                how to succeed in Africa. Africa isn’t one country. It’s made up
                of 54 different countries.
                <span className="font-bold">
                  {" "}
                  We make you understand Africa. 
                </span>
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
