import React from "react";

const Contact = () => {
  return (
    <>
      <h1 className="text-2xl md:text-5xl text-[#474b4a] font-bold my-6 text-center">
        CONTACT <span className="text-[#12F7D6] "> ME</span>
      </h1>
      <div
        className="md:h-screen border h-auto py-6 flex items-center justify-center flex-wrap"
        id="contact"
      >
        <div className="flex items-center justify-center w-full md:w-1/2 border">
          <form action="POST">
            <input
              type="text"
              placeholder="Full Name"
              className="border border-separate"
            />
            <br />
            <input type="email" placeholder="Email Address" /> <br />
            <input type="tel" placeholder="Phone Number" /> <br />
            <textarea name="message" id="message"></textarea>
          </form>
        </div>
        <div className="flex items-left flex-col justify-center w-full md:w-1/2 border px-10 my-10">
          <h2 className="text-[#1faa95] text-xl font-bold">
            Email:{" "}
            <a className="text-black" href="mailto:asadkhatri2410@gmail.com">
              asadkhatri2410@gmail.com
            </a>
          </h2>{" "}
          <h2 className="text-[#1faa95] text-xl font-bold">
            Phone: <span className="text-black">+92-303-8905556</span>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
