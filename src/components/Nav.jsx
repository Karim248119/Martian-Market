import React from "react";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Nav({ dark }) {
  const navigate = useNavigate();
  return (
    <nav
      className="md:px-16 px-5 w-full  md:h-24 h-16 flex justify-between items-center z-50"
      style={{ color: dark ? "black" : "white" }}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" uppercase md:text-3xl text-xl font-serif"
      >
        {/* <span className=" text-primary ">M</span>artian */}
        <img
          src={dark ? "../assets/DLOGO.png" : "../assets/LOGO.png"}
          className="w-32 h-16"
        />
      </button>
      <div className="flex gap-2 text-xl">
        <button
          onClick={() => {
            navigate("/search");
          }}
        >
          <CiSearch />
        </button>
        <button>
          <CiUser />
        </button>
        <button
          onClick={() => {
            navigate("/cart");
          }}
        >
          <PiShoppingCartSimpleThin />
        </button>
      </div>
    </nav>
  );
}
