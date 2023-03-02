import React from "react";
import { TfiClose } from "react-icons/tfi";

const MobileNav = ({ shoeMenu, setShowMenu }) => {
  return (
    <div className="bg-indigo-500 text-white w-2/3 h-screen fixed z-30 right-0 top-0 flex justify-center items-center md:hidden">
      <div
        onClick={() => setShowMenu(!shoeMenu)}
        className="fixed top-5 right-6 z-30"
      >
        <TfiClose size={"25px"} />
      </div>
      <ul className="flex flex-col gap-5 text-xl">
        <li>Home</li>
        <li>Contact Thakki</li>
        <li>About Thakkhi</li>
        <li>ETc</li>
      </ul>
    </div>
  );
};

export default MobileNav;
