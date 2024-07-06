import React from "react";
import { Globe } from "../../assets";

const Home = () => {
  return (
    <div>
      {/* <section className=" bg-[#f9f9f9] ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex h-[90vh] mx-auto items-center flex-col-reverse  gap-y-12 lg:flex-row lg:gap-x-24">
            <div>
              <img className="w-full mx-auto " src={Globe} alt="" />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-4xl max-w-xs font-bold bhank leading-tight text-[#4d4d4d]  lg:text-5xl ">
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
      </section> */}
      <div className="bg-[#f9f9f9]">
        <section className="">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="lg:h-[100vh]  pt-40 pb-20  lg:py-0  grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <img className="w-64 lg:w-96 mx-auto" src={Globe} alt="" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-[#4d4d4d] bhank text-center lg:text-left lg:text-6xl">
                  <span className="text-[#F09020] bhank"> Nsano UK </span> is
                  your gateway to Africa.
                </h1>

                <p className="mt-6 text-base text-center lg:text-left text-[#6C757D]">
                  We provide expert management advise for your enterprise. Learn
                  how to succeed in Africa. Africa isn’t one country. It’s made
                  up of 54 different countries.
                  <span className="font-bold">
                    {" "}
                    We make you understand Africa. 
                  </span>
                </p>
                <div className="flex justify-center lg:justify-start   w-full">
                  <a
                    href="mailto:info@nsano-uk.com"
                    className=" rounded-full   px-8 py-4 font-semibold text-white transition-all duration-200 bg-[#f09020] mt-8"
                    role="button"
                  >
                    Talk to us today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
