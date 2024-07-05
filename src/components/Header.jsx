import React, { useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
const Header = () => {
  return (
    <div className="bg-[rgb(41,47,54)] p-4 h-screen bg-gradient-to-r from-[#292F36] to-[#00B8D4]">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
