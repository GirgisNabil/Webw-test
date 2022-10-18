import React from "react";

function Footer() {
  return (
    <footer className="bg-[#333333] text-white py-6 px-10 lg:px-72   xl:px-80   2xl:px-96 flex flex-col justify-center items-center lg:flex-row gap-20  text-center ">
      <div className=" flex flex-col items-center gap-10">
        <img src="./imgs/Stdy.png" alt="" />{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          diam at mi sollicitudin
        </p>
      </div>
      <div className="">
        <p className="pb-7">Nos services</p>

        <p>
          Avis clients Mentions légales Plan du site Blog d’Idéematic Le
          dictionnaire du digital ‹ Notre boutique /›
        </p>
      </div>

      <div>
        <h1 className="pb-7">Sign up for Special Offers!</h1>
        <div className="bg-white px-40  flex justify-end text-end rounded-3xl">
          <div className="text-black text-end bg-[#FF6057]  justify-self-end h-full p-3 px-7 rounded-3xl">
            Subscribe
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
