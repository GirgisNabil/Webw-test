import React from "react";

function Landing() {
  return (
    <section className="Landing md:pl-20 lg:pl-72   xl:pl-80   2xl:pl-96    ">
      <div className="flex flex-col-reverse justify-evenly md:flex-row   items-center z-50 h-[95vh] ">
        <div className="landing-text flex flex-col justify-center items-center text-center space-y-5 md:w-1/3 ">
          <h1 className="text-xl">Advanced Platform</h1>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold">
            Take Your team to the next level
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            qui,deleniti
          </p>
          <button className="text-red-400 font-medium bg-white p-2 px-6 rounded-md mt-7">
            About us
          </button>
        </div>

        <img src="./imgs/NoPath.png" alt="" className="md:w-2/3 pt-28" />
      </div>
      <div className="brands grid justify-center items-center ">
        <img src="./imgs/client-1.png" alt="" />

        <img src="./imgs/client-2.png" alt="" />
        <img src="./imgs/client-3.png" alt="" />
        <img src="./imgs/client-4.png" alt="" />
        <img src="./imgs/client-5.png" alt="" />
      </div>
    </section>
  );
}

export default Landing;
