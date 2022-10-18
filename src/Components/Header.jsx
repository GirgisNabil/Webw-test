import React from "react";

function Header() {
  return (
    <nav className="flex    lg:px-72   xl:px-80   2xl:px-96   justify-evenly  items-center bg-transparent absolute z-50 w-screen  mt-4">
      <img src="./imgs/Stdy.png" alt="" />
      <ul className="text-white hidden  md:flex lg:ml-32 items-center min-w-max  ">
        <li>Browser</li>
        <li>Bootcamps</li>
        <li>How it Works</li>
        <li>Testemonial</li>
      </ul>
      <button className="text-white bg-red-400 p-2 px-6 rounded-md  lg:ml-56 text-center min-w-max">
        About us
      </button>
    </nav>
  );
}

export default Header;
