import React from "react";
import WhiteBtn from "./buttons/WhiteBtn";

export default function HomeCard({ title, text, onClick, bg }) {
  return (
    <div
      className={` w-full h-full bg-cover bg-center text-start md:p-5 p-1 flex flex-col justify-center md:gap-5 gap-2 ${bg}`}
    >
      <h2 className=" text-white text-shadow-lg font-bold">{title}</h2>
      <p className="text-white/50 md:text-base text-[8px] leading-3">{text}</p>
      <WhiteBtn
        onClick={onClick}
        className=" md:text-base text-[7px] w-2/3 md:w-1/3"
      />
    </div>
  );
}
