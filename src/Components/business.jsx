import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import TextHeader from "./TextHeader";
function Business() {
  return (
    <section className="px-10 lg:px-72   xl:px-80   2xl:px-96 flex flex-col justify-center items-center gap-20 pt-24  lg:flex-row lg:justify-between lg:items-start">
      <TextHeader title="the best business solutions for you" />
      <div className="second lg:w-[55%] lg:flex text-start ">
        <div className="pb-8">
          <div className="bg-[#F1291E] w-20 h-20 rounded-[50%] flex justify-center items-center">
            <img src="./imgs/4.png" alt="" />
          </div>
          <h1 className="text-lg font-semibold pt-3">Scale Your Activity</h1>
          <div className="w-20 bg-[#FF6057] h-1 mt-3"></div>
          <p className="text-sm text-gray-600 pt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
        <div className="pb-8">
          <div className="bg-[#36C5AD] w-20 h-20 rounded-[50%] flex justify-center items-center">
            <img src="./imgs/3.png" alt="" />
          </div>
          <h1 className="text-lg font-semibold pt-3">Scale Your Activity</h1>
          <div className="w-20 bg-[#FF6057] h-1 mt-3"></div>
          <p className="text-sm text-gray-600 pt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
        <div className="pb-8">
          <div className="bg-[#CB4BF8] w-20 h-20 rounded-[50%] flex justify-center items-center">
            <img src="./imgs/2.png" alt="" />
          </div>
          <h1 className="text-lg font-semibold pt-3">Scale Your Activity</h1>
          <div className="w-20 bg-[#FF6057] h-1 mt-3"></div>
          <p className="text-sm text-gray-600 pt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
        <div className="pb-8">
          <div className="bg-[#56E65B] w-20 h-20 rounded-[50%] flex justify-center items-center">
            <img src="./imgs/1.png" alt="" />
          </div>
          <h1 className="text-lg font-semibold pt-3">Scale Your Activity</h1>
          <div className="w-20 bg-[#FF6057] h-1 mt-3"></div>
          <p className="text-sm text-gray-600 pt-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </p>
        </div>
      </div>
    </section>
  );
}

export default Business;
