import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="">
        <Header />
        <div className="mx-2 md:mx-20 xl:mx-20 lg:mx-40 flex flex-col gap-20">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
