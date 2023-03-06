import React, { createContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosMain = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <>{children}</>;
};

export default AosMain;
