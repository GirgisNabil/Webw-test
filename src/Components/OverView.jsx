import React from "react";

function OverView() {
  return (
    <section className="px-10 lg:px-72   xl:px-80   2xl:px-96 flex flex-col justify-center items-center gap-5 lg:gap-10 pt-24 ">
      <div className="flex flex-col justify-center items-center mx-auto">
        <h3 className="text-xl">Advanced Customer Service Platform</h3>
        <h1 className="text-5xl text-center py-5">Platform Overview</h1>
        <p className="lg:w-[60%] text-center">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </p>
      </div>
      <img src="./imgs/NoPath.png" alt="" className=" " />
    </section>
  );
}

export default OverView;
