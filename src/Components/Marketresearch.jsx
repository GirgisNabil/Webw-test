import React from "react";
import Points from "./Points";

function Marketresearch() {
  return (
    <section className="px-10 lg:px-72   xl:px-80   2xl:px-96 flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10 pt-24 ">
      <div className=" xl:w-[50%]">
        <h1 className="text-3xl lg:text-5xl pb-4 font-medium">
          Acceleration Process to Grow Your Business
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
        <button className="text-red-400 font-medium bg-white p-2 px-6 rounded-md mt-7">
          About us
        </button>
      </div>
      <div className="xl:w-[50%]">
        <Points />
        <Points />
        <Points />
      </div>
    </section>
  );
}

export default Marketresearch;
