import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-[#292F36] p-4">
      <div className="max-w-[1240px] py-[18px] flex justify-between items-center mx-auto">
        <div className="text-3xl text-white font-bold">
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

        <ul className="hidden md:flex text-white align-middle gap-10">
          <li>
            <a href="#" className="hover:text-[#12F7D6]">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#12F7D6]">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#12F7D6]">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#12F7D6]">
              Contact
            </a>
          </li>
        </ul>
        {/* responsive menu */}
        <ul
          className={`md:hidden w-full h-screen text-white fixed bg-[#292F36]  top-[103px] ${
            toggle ? `left-[0]` : `left-[100%]`
          }`}
        >
          <li className="p-6 text-2xl">
            <a href="#" className="hover:text-[#12F7D6]">
              Home
            </a>
          </li>
          <li className="p-6 text-2xl">
            <a href="#" className="hover:text-[#12F7D6] ">
              About
            </a>
          </li>
          <li className="p-6 text-2xl">
            <a href="#" className="hover:text-[#12F7D6] ">
              Services
            </a>
          </li>
          <li className="p-6 text-2xl">
            <a href="#" className="hover:text-[#12F7D6] ">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
