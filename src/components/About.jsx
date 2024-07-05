import React from "react";
import prog from "../assets/prog.png";
const About = () => {
  return (
    <div
      className="md:h-[90vh]  h-auto flex flex-col items-center justify-evenly bg-slate-100 "
      id="about"
    >
      <h1 className="text-3xl md:text-7xl text-[#474b4a] font-bold my-3">
        ABOUT <span className="text-[#12F7D6] "> ME</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="w-[90%] md:w-1/2 py-6 px-3 flex items-center justify-center">
          <img
            src={prog}
            alt="prog"
            className=" w-full md:w-[70%]"
            style={{
              filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.6))", // Adjust values as needed
            }}
          />
        </div>
        <div className=" w-screen md:w-1/2 px-12 text-center py-6">
          <h2 className="text-[#474b4a] text-xl font-semibold ">
            As a MERN stack developer with over two years of experience, I've
            successfully completed 3-4 full-scale projects. My expertise spans
            across MongoDB, Express.js, React.js, and Node.js, allowing me to
            build robust and scalable applications. These projects have provided
            me with hands-on experience in designing database schemas,
            developing RESTful APIs, and implementing responsive and intuitive
            user interfaces using modern frontend technologies. I continuously
            strive to learn and apply best practices in software development to
            deliver high-quality solutions that meet both functional and
            aesthetic requirements.
          </h2>
          <button class="bg-[#12F7D6] hover:bg-[#49ddc7] px-10 mt-10  text-[#474b4a] font-bold py-2 rounded border border-[#12F7D6] ">
            CONTACT
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
