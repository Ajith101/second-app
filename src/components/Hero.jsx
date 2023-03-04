import React from "react";
import FixedNavigationBar from "./navigationBar/FixedNavigationBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";

const Hero = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Contact />
      <FixedNavigationBar />
    </>
  );
};

export default Hero;
