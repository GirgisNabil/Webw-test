import React from "react";
import TextHeader from "./TextHeader";
function Platform() {
  return (
    <section className="text1 md:pr-20 lg:pr-72   xl:pr-80   2xl:pr-96 px-10  flex flex-col justify-center items-center gap-20 pt-24  lg:flex-row lg:justify-between lg:items-center">
      <img src="./imgs/NoPath.png" alt="" className="md:w-2/3 pt-28" />
      <img
        src="./imgs/Rectangle9.png"
        alt=""
        className="absolute left-[-900px] -z-50 w-[1500px] "
      />
      <TextHeader
        title="Best Platform for the 
Technological Era"
      />
    </section>
  );
}

export default Platform;
