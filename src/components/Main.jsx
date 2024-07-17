import React from "react";
import logo from "../assets/svg/1.svg";
import reflencelogo from "../assets/Reflence.png";

const Main = () => {
  return (
    <>
      <div>
        <div className="max-w-[1660px] mx-auto flex flex-col">
          <h1 className="mt-5 px-6">
            <img src={reflencelogo} />
          </h1>
          <div className="flex-grow flex flex-col items-center justify-center px-6">
            <div className="lg:flex justify-between items-center gap-10 w-full">
              <div className="mt-16 flex flex-col justify-center lg:ps-16">
                <h1 className=" text-[25px] sm:text-[30px] xl:text-[50px] font-bold max-w-[600px] max-lg:mx-auto text-center ">
                  Expand your recruitment network and find the perfect fit
                </h1>
                <div className="flex justify-center">
                  <button onClick={() => window.open("https://forms.gle/ChBCZBexSgCLucoa9", "_blank")} className="rounded-full px-10 py-3 mt-8 inline-block bg-[#0d0d43] font-semibold text-white lg:text-[30px] xl:text-[30px]">
                    Let's Start Today
                  </button>
                </div>
              </div>
              <img
                className="max-sm:w-full max-xl:max-w-[547px] max-2xl:max-w-[700px] max-lg:mx-auto lg:pe-10"
                src={logo}
                alt="logo"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#0d0d43] py-5 md:py-10 text-center">
          <h2 className="font-bold text-white  text-2xl md:text-[30px] lg:text-[58px]">
            Hire Better. Faster. Smarter.
          </h2>
          <p className="text-white font-medium text-md lg:text-[27px] mt-5">
            Designed for Partnerships.{" "}
            <span className="text-[#2e92eb]">Built for Empowerment</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Main;
