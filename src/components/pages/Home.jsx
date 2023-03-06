import React, { useEffect } from "react";
import { bgimg } from "../../assets/Index";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <section id="home" className="my-10 md:flex">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="md:w-1/2 w-full flex flex-col justify-center items-center"
        >
          <div className="flex flex-col gap-4 w-[90%]">
            <h3 className="text-2xl">
              <Typewriter
                options={{
                  strings: ["Hello World", "Im Professional Coder"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <h1 className="text-7xl text-[#db2be2cf] font-bold font-font-2 uppercase">
              Preethi Ms
            </h1>

            <p className="text-xl font-font-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              laborum in saepe. Inventore perferendis voluptatem distinctio
              consequuntur quo. Ipsa cupiditate veniam eligendi obcaecati et
              eius voluptate, consequatur commodi quidem! Ducimus.
            </p>
            <div className="">
              <button className="bg-[#db2be2cf] hover:bg-amber-400 text-white px-7 font-font-2 py-3 text-center text-xl rounded-md">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="900"
          className="md:w-1/2 w-full flex flex-col justify-center items-center"
        >
          <div className="md:w-[400px] lg:w-[500px] object-cover p-5 shadow-2xl">
            <img
              className="w-full duration-500 ease-in-out hover:scale-110 rounded-xl overflow-hidden h-full object-cover"
              src={bgimg}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
