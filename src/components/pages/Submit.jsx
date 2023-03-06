import React, { useState } from "react";

const Submit = () => {
  const [name, setName] = useState("Your Name");
  const [email, setEmail] = useState("Your Email");
  const [message, setMessage] = useState("Type your message");

  function sbtHandler(e) {
    e.preventDefault();
  }
  //   function submitBTN() {}

  // //   console.log(message);

  return (
    <form
      data-aos="zoom-out-right"
      data-aos-easing="ease-in-back"
      data-aos-delay="300"
      data-aos-offset="0"
      data-aos-duration="900"
      onSubmit={sbtHandler}
      className="flex flex-col gap-5"
      action=""
    >
      <div className="flex gap-5">
        <input
          onChange={(e) => setName(e.target.value)}
          className="border-b-[2px] w-1/2 text-slate-400 h-10 border-b-[#db2be2cf]"
          value={name}
          type="text"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="border-b-[2px] w-1/2 text-slate-400 h-10 border-b-[#db2be2cf]"
          value={email}
          type="email"
        />
      </div>
      <input
        onChange={(e) => setMessage(e.target.value)}
        className="border-b-[2px] text-slate-400 h-10 border-b-[#db2be2cf]"
        value={message}
        type="text"
      />
      <div className="">
        <button
          type="submit"
          className="bg-[#db2be2cf] hover:bg-amber-400 text-white px-7 font-font-2 py-3 text-center text-xl rounded-md"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Submit;
