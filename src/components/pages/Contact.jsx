import React from "react";
import Submit from "./Submit";

const Contact = () => {
  return (
    <section
      id="contact"
      className="md:flex w-full mb-16 md:justify-center md:items-center"
    >
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl text-[#db2be2cf] font-bold font-font-2 uppercase">
          Contact Me
          <div className="border-[2px] w-[60px] border-[#db2be2cf]"></div>
        </h1>
        <div className="m-5">
          <Submit />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <img
          className="w-[95%] h-[350px] md:h-[500px] rounded-lg overflow-hidden object-cover md:object-contain"
          src="https://images.unsplash.com/photo-1503248947681-3198a7abfcc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt=""
        />
      </div>
    </section>
  );
};

export default Contact;
