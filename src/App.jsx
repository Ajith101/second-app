import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="">
      <Header />
      <div className="mx-2 md:mx-40 flex flex-col gap-20">
        <Hero />
      </div>
    </div>
  );
}

export default App;
