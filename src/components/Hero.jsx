import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div
      className="h-[90%] border mt-6 flex items-center flex-col justify-center "
      id="hero"
    >
      <div className="w-full px-20 flex justify-end items-start my-10"></div>
      <h3 className="text-xl md:text-5xl text-white font-bold">HI, I AM</h3>
      <br />
      <h1 className="text-2xl md:text-7xl text-[#12F7D6] font-bold">ASAD.</h1>
      <br />
      <h3 className="text-xl md:text-5xl text-white font-bold">
        MernStack Developer.
      </h3>
      <br />
      <h2 className="text-xl md:text-3xl text-[#ffffff]  font-bold">
        I PROVIDE
        <ReactTyped
          className=" text-[#12F7D6] pl-2"
          strings={[" WEB DESIGNING ", " WEB DEVELOPMENT ", " WEB GROWTH "]}
          typeSpeed={100}
          backSpeed={60}
          loop={true}
        />
      </h2>
      <br />
      <button class="bg-white-500 hover:bg-[#12F7D6] text-white font-bold py-2 rounded border border-[#12F7D6] px-10">
        LETS TALK!
      </button>
    </div>
  );
};

export default Hero;
