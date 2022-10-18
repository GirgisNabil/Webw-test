import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
function TextHeader(props) {
  return (
    <div className="first lg:w-[45%] text-start ">
      <div className="w-20 bg-[#FF6057] h-1 mt-3"></div>
      <h1 className="text-4xl font-bold pt-3">{props.title}</h1>
      <p className="pt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet
      </p>
      <div className="pt-5 flex items-center justify-between">
        <h3 className="font-semibold text-[#FF6057]">
          Learn About Our Success
        </h3>
        <HiOutlineArrowNarrowRight className="text-[#FF6057] text-2xl" />
      </div>
    </div>
  );
}

export default TextHeader;
