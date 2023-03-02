import React, { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import MobileNav from "./navigationBar/MobileNav";

const Header = () => {
  const [shoeMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="flex w-full p-4 text-xl text-white bg-red-700 justify-between items-center">
        <div className="">
          <h1 className="text-3xl font-signature-1 font-bold">Thakkis Site</h1>
        </div>
        <div className="">
          <ul className="md:flex hidden md:gap-3 md:justify-center md:items-center">
            <li>Thakki</li>
            <li>Chukki</li>
            <li>THakkali</li>
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
