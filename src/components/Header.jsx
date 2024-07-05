import React, { useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
const Header = () => {
  return (
    <div className="bg-[#292F36] p-4 h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

export default Header;
