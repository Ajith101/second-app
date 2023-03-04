import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrServices, GrContact } from "react-icons/gr";
import { RiBarChart2Fill } from "react-icons/ri";
import { Link } from "react-scroll";

const FixedNavigationBar = () => {
  const datas = [
    {
      logo: AiOutlineHome,
      to: "home",
    },
    {
      logo: CgProfile,
      to: "about",
    },
    {
      logo: RiBarChart2Fill,
      to: "service",
    },
    {
      logo: GrContact,
      to: "contact",
    },
  ];

  let displayLogos = datas.map((itemes, id) => {
    return (
      <Link
        key={id}
        to={itemes.to}
        activeClass="bg-[#db2be2cf] text-white rounded-md"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="transition-all hover:cursor-pointer"
      >
        <itemes.logo size={"30px"} />
      </Link>
    );
  });

  return (
    <div className="fixed md:hidden z-50 left-1/2 p-2 transform -translate-x-1/2 bottom-6 flex justify-between gap-5 items-center bg-white rounded-xl shadow-2xl">
      {displayLogos}
    </div>
  );
};

export default FixedNavigationBar;
