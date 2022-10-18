import React from "react";
import TextHeader from "./TextHeader";

function Era() {
  return (
    <section className="md:pl-20 lg:pl-72   xl:pl-80   2xl:pl-96 px-10  flex flex-col justify-center items-center gap-3 xl:gap-20 pt-10  lg:flex-row lg:justify-between lg:items-center">
      <TextHeader
        title="Best Platform for the 
Technological Era"
      />
      <img src="./imgs/NoPath.png" alt="" className="md:w-2/3 xl:pt-28" />
      <img
        src="./imgs/background.png"
        alt=""
        className="absolute right-[-900px] -z-50 w-[1500px] "
      />
    </section>
  );
}

export default Era;
