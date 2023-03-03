import React from "react";
import { bgimg } from "../../assets/Index";

const Home = () => {
  return (
    <>
      <section className="my-10 md:flex">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
          <div className="flex flex-col gap-4 w-[90%]">
            <h1 className="text-2xl">Hello Im </h1>
            <h1 className="text-7xl text-[#db2be2cf] font-bold font-signature-1 uppercase">
              Preethi Ms
            </h1>
            <h3 className="text-2xl">
              im a professional Freelance Web designer
            </h3>
            <p className="text-xl font-font-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              laborum in saepe. Inventore perferendis voluptatem distinctio
              consequuntur quo. Ipsa cupiditate veniam eligendi obcaecati et
              eius voluptate, consequatur commodi quidem! Ducimus.
            </p>
            <div className="">
              <button className="bg-[#db2be2cf] text-white px-7 font-font-2 py-3 text-center text-xl rounded-md">
                Hire Me
              </button>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center">
          <div className="md:w-[500px] object-cover p-5 shadow-2xl">
            <img
              className="w-full rounded-xl overflow-hidden h-full object-cover"
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