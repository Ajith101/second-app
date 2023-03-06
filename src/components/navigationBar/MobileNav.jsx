import React from "react";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-scroll";

const datas = [
  {
    logo: "Home",
    to: "home",
  },
  {
    logo: "ABout",
    to: "about",
  },
  {
    logo: "SerVices",
    to: "service",
  },
  {
    logo: "Contact",
    to: "contact",
  },
];

const MobileNav = ({ shoeMenu, setShowMenu }) => {
  let displayLinks = datas.map((item, id) => {
    return (
      <li key={id}>
        <Link
          onClick={() => setShowMenu(!shoeMenu)}
          to={item.to}
          activeClass="bg-[#db2be2cf] text-white rounded-md"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="transition-all hover:cursor-pointer"
        >
          {item.logo}
        </Link>
      </li>
    );
  });

  return (
    <div className="bg-[#2b71e2e3] text-white w-2/3 h-screen fixed z-30 right-0 top-0 flex justify-center items-center md:hidden">
      <div
        onClick={() => setShowMenu(!shoeMenu)}
        className="fixed top-5 right-6 z-30"
      >
        <TfiClose size={"25px"} />
      </div>
      <ul className="flex flex-col gap-5 text-xl">{displayLinks}</ul>
    </div>
  );
};

export { MobileNav, datas };
