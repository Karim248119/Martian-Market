import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function WhiteBtn({ title, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`md:py-2  w-1/2 md:border-2 border-[0.5px] uppercase flex justify-center items-center md:gap-5 gap-2 text-white text-sm ${className}`}
    >
      {"take a look" || title} <FaArrowRightLong />
    </button>
  );
}
