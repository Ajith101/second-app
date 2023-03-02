import React from "react";

const Header = () => {
  return (
    <div className="flex w-full p-4 text-xl text-white bg-red-700 justify-between items-center">
      <div className="">
        <h1>Thakkis Site</h1>
      </div>
      <div className="">
        <ul className="flex justify-center items-center">
          <li>Thakki</li>
          <li>Chukki</li>
          <li>THakkali</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
