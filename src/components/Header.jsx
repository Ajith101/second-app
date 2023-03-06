import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { datas, MobileNav } from "./navigationBar/MobileNav";
import { Link } from "react-scroll";

const Header = () => {
  const [shoeMenu, setShowMenu] = useState(false);
  const isplayLinks = datas.map((item, id) => {
    return (
      <li key={id}>
        <Link
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
    <>
      <div className="flex w-full p-4 text-xl text-white bg-[#000000f2] justify-between items-center">
        <div className="flex text-3xl md:text-6xl gap-1 rounded-lg border-white border-2 bg-black p-2 text-white md:gap-[8px]">
          <span className="name">A</span>
          <span className="name">J</span>
          <span className="name">I</span>
          <span className="name">T</span>
          <span className="name">H</span>
        </div>

        <div className="">
          <ul className="md:flex hidden md:gap-6 md:justify-center md:items-center">
            {isplayLinks}
          </ul>
          <div onClick={() => setShowMenu(!shoeMenu)} className="md:hidden">
            <CgMenuLeft size={"25px"} />
          </div>
        </div>
      </div>
      {shoeMenu ? (
        <MobileNav setShowMenu={setShowMenu} shoeMenu={shoeMenu} />
      ) : null}
    </>
  );
};

export default Header;
