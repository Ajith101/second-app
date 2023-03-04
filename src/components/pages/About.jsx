import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="md:flex-row gap-10 md:gap-0 flex flex-col w-full h-full"
    >
      <div className="md:w-1/2 w-full flex flex-col justify-end items-center order-2 md:order-none">
        <div className="md:w-[500px] flex flex-col justify-end items-center rounded-lg overflow-hidden w-[100%] h-[350px] object-cover md:h-[350px]">
          <img
            className="w-full h-full hover:scale-125 duration-300 ease-in-out object-cover bg-[50%]"
            src="https://images.unsplash.com/photo-1525389999255-82bad487f23c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="md:w-1/2 w-full order-1 md:order-none">
        <div className="md:w-[80%] w-full flex flex-col gap-6">
          <h1 className="text-4xl text-[#db2be2cf] font-bold font-font-2 uppercase">
            About Me
            <div className="border-[2px] w-[60px] border-[#db2be2cf]"></div>
          </h1>

          <h3 className="text-xl font-signature-1 font-semibold">
            Why You Hire Me?
          </h3>
          <p className="font-font-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            debitis voluptatum laborum minus porro? Quia nobis laudantium
            aspernatur, repellendus ex odit harum, mollitia quibusdam ea quam,
            quae veniam aperiam esse.
          </p>
          <div className="">
            <button className="bg-[#db2be2cf] hover:bg-amber-400 text-white px-7 font-font-2 py-3 text-center text-xl rounded-md">
              View My Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
