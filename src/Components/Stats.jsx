import React from "react";

function Stats() {
  return (
    <section className=" px-10 lg:px-72   xl:px-80   2xl:px-96 flex flex-col justify-center items-center gap-20 pt-24  ">
      <h1 className="text-3xl xl:text-5xl xl:w-[30%] text-center">
        Don't Just Take our Word for it!
      </h1>

      <div className="flex flex-row w-full justify-between xl:pt-16">
        <div className="text-center">
          <h1 className="text-4xl text-[#FF6057] font-bold">570</h1>
          <p className="font-bold pt-2">Download</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-[#FF6057] font-bold">570</h1>
          <p className="font-bold pt-2">Download</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-[#FF6057] font-bold">570</h1>
          <p className="font-bold pt-2">Download</p>
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-[#FF6057] font-bold">570</h1>
          <p className="font-bold pt-2">Download</p>
        </div>
      </div>

      <div className="flex  flex-col  xl:flex-row items-center gap-8 pb-24">
        <div className="xl:w-[50%] px-8 py-14 flex gap-5 avatar">
          <img src="./imgs/avatar.png" alt="" className="w-32 xl:w-full" />
          <img src="./imgs/Group3.png" alt="" className="w-32 xl:w-full" />
        </div>

        <div className="xl:w-[50%]">
          <h1 className="text-5xl pb-4 font-medium">
            Acceleration Process to Grow Your Business
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet
          </p>
          <button className="bg-red-400 font-medium p-2 px-6 rounded-md mt-7">
            About us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Stats;
