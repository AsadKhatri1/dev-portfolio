import React from "react";
import prog from "../assets/prog.png";
import react from "../assets/react.png";
import mongo from "../assets/mongo.svg";
import node from "../assets/node.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import css from "../assets/css.jpeg";
import git from "../assets/git.png";
import tailwind from "../assets/tailwind.jpeg";
import github from "../assets/github.png";
import express from "../assets/ex.png";
import wordpress from "../assets/wordpress.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const About = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div
        className="md:h-[90vh] h-auto flex flex-col items-center justify-evenly bg-slate-100 "
        id="about"
      >
        <h1 className="text-2xl md:text-5xl text-[#474b4a] font-bold my-3">
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
              build robust and scalable applications. These projects have
              provided me with hands-on experience in designing database
              schemas, developing RESTful APIs, and implementing responsive and
              intuitive user interfaces using modern frontend technologies. I
              continuously strive to learn and apply best practices in software
              development to deliver high-quality solutions that meet both
              functional and aesthetic requirements.
            </h2>
            <button class="bg-[#12F7D6] hover:bg-[#49ddc7] px-10 mt-10  text-[#474b4a] font-bold py-2 rounded border border-[#12F7D6] ">
              View My Work
            </button>
          </div>
        </div>
      </div>
      <div className="my-20 bg-white mx-10">
        <h1 className="text-2xl md:text-4xl text-center text-[#474b4a] font-bold my-3">
          My <span className="text-[#12F7D6] ">Tech Stack</span>
        </h1>
        <div className="my-10 text-center ">
          <Carousel
            swipeable={true}
            draggable={true}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div className=" flex items-center flex-col justify-center">
              <img src={react} alt="reactjs" className="w-20" />
              <h3 className="font-bold">ReactJS</h3>
            </div>
            <div className=" flex items-center flex-col  justify-center">
              <img src={mongo} alt="mongodb" className="w-20" />
              <h3 className="font-bold">MongoDB</h3>
            </div>
            <div className=" flex items-center flex-col  justify-center">
              <img src={node} alt="nodejs" className="w-20" />
              <h3 className="font-bold">NodeJS</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={js} alt="js" className="w-20" />
              <h3 className="font-bold">JavaScript</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={express} alt="express" className="w-20 h-20" />
              <h3 className="font-bold">ExpressJS</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={html} alt="html" className="w-20 h-20" />
              <h3 className="font-bold">HTML 5</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={css} alt="css" className="w-20 h-20" />
              <h3 className="font-bold">CSS 3</h3>
            </div>
            <div className=" flex items-center flex-col  justify-center">
              <img src={git} alt="express" className="w-20" />
              <h3 className="font-bold">Git</h3>
            </div>
            <div className=" flex items-center flex-col  justify-center">
              <img src={github} alt="express" className="w-20" />
              <h3 className="font-bold">GitHub</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={wordpress} alt="express" className="w-20" />
              <h3 className="font-bold">Wordpress</h3>
            </div>
            <div className=" flex items-center flex-col justify-center">
              <img src={tailwind} alt="express" className="w-20 " />
              <h3 className="font-bold mt-2">TailwindCSS</h3>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default About;
