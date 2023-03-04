import React from "react";
import { AiOutlineAntDesign, AiOutlineGlobal } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiChartSquareBar } from "react-icons/hi";
import { GrAppsRounded } from "react-icons/gr";
import { ImStack } from "react-icons/im";

const servicesData = [
  {
    logo: AiOutlineAntDesign,
    title: "Graphic Design",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },

  {
    logo: AiOutlineGlobal,
    title: "Web Design",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    logo: ImStack,
    title: "UI/UX Design",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    logo: BiCodeAlt,
    title: "Frontend Development",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    logo: RiShoppingBag3Fill,
    title: "Business Analysis",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    logo: HiChartSquareBar,
    title: "Digital Marketing",
    descri:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

let serviceCards = servicesData.map((item, id) => {
  return (
    <div
      key={id}
      className="shadow-2xl rounded-xl flex flex-col gap-6 p-4 hover:text-white hover:bg-[#db2be2cf]"
    >
      <div className="text-center">
        <item.logo
          size={"50px"}
          className=" rounded-md bg-[#db2be2cf] text-white"
        />
      </div>
      <h1 className="text-2xl font-font-2 font-bold">{item.title}</h1>
      <h2 className="font-font-2">{item.descri}</h2>
    </div>
  );
});

const Services = () => {
  return (
    <section className="flex flex-col md:my-24 gap-10 justify-center items-center">
      <h1 className="text-4xl text-[#db2be2cf] font-bold font-font-2 uppercase">
        services
        <div className="border-[2px] w-[60px] border-[#db2be2cf]"></div>
      </h1>
      <div className="grid md:w-[80%] w-[95%] sm:grid-cols-2 md:grid-cols-3 gap-10">
        {serviceCards}
      </div>
    </section>
  );
};

export default Services;
