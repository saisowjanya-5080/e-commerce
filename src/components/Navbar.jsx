import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiHandbagSimpleFill } from "react-icons/pi";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  return (
    <div>
      <div
        className="w-full flex items-center justify-between py-3 px-11 absolute shadow-md
                    bg-gradient-to-bl from-slate-900/90 to-gray-400/90 "
      >
        <Link to={"/"}>
          <img src={logo} alt="" className="ml-5 w-11 cursor-pointer" />
        </Link>
        <div className="flex  items-center gap-1">
          <Link to={"/cart"}>
            <FaCartArrowDown className="text-white cursor-pointer text-2xl" />
          </Link>
          <p className="text-sm text-white font-bold">{cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;