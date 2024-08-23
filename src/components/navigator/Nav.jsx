import React from "react";
import { CiUser } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";

import {
  PiHouseSimpleThin,
  PiShoppingCartSimpleFill,
  PiHouseSimpleFill,
  PiShoppingCartSimpleThin,
} from "react-icons/pi";
import { RiSearchFill } from "react-icons/ri";
import NavLink from "./NavLink";

export default function Nav({ dark, menuBtn, toggleDrawer }) {
  const navigate = useNavigate();

  return (
    <nav
      className={`md:px-16 px-5 w-full  md:h-24 h-16 flex justify-between items-center z-50 ${
        dark ? "text-black/50" : "text-white/50"
      }`}
    >
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" uppercase md:text-3xl text-xl font-serif"
      >
        <img
          src={dark ? "../assets/DLOGO.png" : "../assets/LOGO.png"}
          className="sm:w-24 sm:h-12 w-14 h-7"
        />
      </button>
      <div className="flex gap-2 md:text-xl">
        <NavLink
          to="/search"
          icon={<CiSearch />}
          activeIcon={<RiSearchFill />}
        />
        <NavLink
          to="/cart"
          icon={<PiShoppingCartSimpleThin />}
          activeIcon={<PiShoppingCartSimpleFill />}
        />
        <NavLink to="/auth/login" icon={<CiUser />} />
        <NavLink
          to="/"
          icon={<PiHouseSimpleThin />}
          activeIcon={<PiHouseSimpleFill />}
        />

        {menuBtn && (
          <button className="hover:text-primary" onClick={toggleDrawer}>
            <HiBars3BottomRight />
          </button>
        )}
      </div>
    </nav>
  );
}
