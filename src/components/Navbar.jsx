import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { MdDeveloperMode } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="max-w-[1240px] py-[12px] flex justify-between items-center mx-auto">
      <div className="text-xl md:text-3xl text-white font-bold">
        ASAD<span className="text-[#28c2ab]"> KHATRI</span>
      </div>
      {toggle ? (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      )}

      <ul className="hidden md:flex text-white items-center gap-10">
        <li className="text-xl">
          <a href="#" className="hover:text-[#12F7D6]">
            <IoMdHome className="inline pb-1 text-[#12F7D6]" /> Home
          </a>
        </li>
        <li className="text-xl">
          <a href="#" className="hover:text-[#12F7D6]">
            <MdDeveloperMode className="inline pb-1 text-[#12F7D6]" /> About
          </a>
        </li>
        <li className="text-xl">
          <a href="#" className="hover:text-[#12F7D6]">
            <MdDesignServices className="inline pb-1 text-[#12F7D6]" /> Services
          </a>
        </li>
        <li className="text-xl">
          <a href="#" className="hover:text-[#12F7D6]">
            <MdContactPage className="inline pb-1 text-[#12F7D6]" /> Contact
          </a>
        </li>
      </ul>
      {/* responsive menu */}
      <ul
        className={`duration-500 md:hidden w-1/2 h-screen text-white fixed bg-[#292F36]  top-[83px] ${
          toggle ? `left-[0]` : `left-[-100%]`
        }`}
      >
        <li className="p-6 text-2xl">
          <a href="#" className="hover:text-[#12F7D6]">
            Home
          </a>
        </li>
        <li className="p-6 text-2xl ">
          <a href="#" className="hover:text-[#12F7D6] ">
            About
          </a>
        </li>
        <li className="p-6 text-2xl ">
          <a href="#" className="hover:text-[#12F7D6] ">
            Services
          </a>
        </li>
        <li className="p-6 text-2xl ">
          <a href="#" className="hover:text-[#12F7D6] ">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
