import React from "react";
import manage from "../assets/manage.jpg";
import threads from "../assets/threads.png";
import ecommerce from "../assets/ecommerce.jpg";
const Portfolio = () => {
  return (
    <div
      id="services"
      className="bg-[rgb(41,47,54)] p-4 h-auto  md:h-screen bg-gradient-to-r from-[#292F36] to-[#3f454d] py-20 "
    >
      <h1 className="text-2xl md:text-5xl text-center text-[#ffffff] font-bold mt-3 mb-10">
        RECENT <span className="text-[#12F7D6] "> WORK</span>
      </h1>

      <div className="flex md:flex-row flex-col  items-center justify-center md:w-full w-auto md:px-20 my-5 ">
        {/* 1st card */}
        <a href="https://directory--sigma.vercel.app/" target="_blank">
          <div className="md:max-w-sm w-auto  rounded overflow-hidden shadow-lg bg-[#292F36] m-5">
            <img
              className="w-full max-h-[225px]"
              src={manage}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#12F7D6] ">
                Directory Management System
              </div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-[#1faa95]  rounded-full px-3 py-1 text-sm font-semibold text-[#ffffff]  mr-2 mb-2">
                #mernstack
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #reactjs
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #fullstack
              </span>
            </div>
          </div>
        </a>
        {/* 1st card */}
        <a href="https://stock-client-kohl.vercel.app/" target="_blank">
          <div className="max-w-sm  rounded overflow-hidden shadow-lg  bg-[#292F36] m-5">
            <img
              className="w-full  max-h-[225px]"
              src={threads}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#12F7D6] ">
                Threads & Fabrics Management
              </div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-[#1faa95]  rounded-full px-3 py-1 text-sm font-semibold text-[#ffffff]  mr-2 mb-2">
                #mernstack
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #reactjs
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #fullstack
              </span>
            </div>
          </div>
        </a>
        {/* 1st card */}
        <a
          href="https://ecommerce-client-bay.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="max-w-sm rounded overflow-hidden shadow-lg  bg-[#292F36] m-5 ">
            <img
              className="w-full h-[225px]"
              src={ecommerce}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-[#12F7D6] ">
                ECommerce Store
              </div>
              <p className="text-white text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-[#1faa95]  rounded-full px-3 py-1 text-sm font-semibold text-[#ffffff]  mr-2 mb-2">
                #mernstack
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #reactjs
              </span>
              <span className="inline-block bg-[#1faa95] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                #fullstack
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
