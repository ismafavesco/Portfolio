import { React, useState, useEffect } from "react";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navigation from "./Navigation";
import Social from "./Social";
import Work from "./Works";
import Footer from "./Footer";
import Skills from "./Skills";



import { FaLightbulb, FaMoon } from "react-icons/fa";

//Change light/dark mode


const Main = () => {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    const body = document.querySelector("body");
    if (mode) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  }, [mode]);

  const modeHandle = () => {
    setMode(!mode);
  };

  return (
    <div className={`transition duration-500 ease-in-out ${mode ? "light" : "dark"}`}>
      <div
        className="fixed top-5 right-3 sm:right-6 cursor-pointer transition duration-500 ease-in-out"
        onClick={modeHandle}
      >
        <div className="relative w-8 h-8 ">
          <FaMoon className={`absolute top-0 left-0 text-3xl sm:text-4x ${mode ? "opacity-100" : "opacity-0"}`} />
          <FaLightbulb className={`absolute top-0 left-0 text-3xl sm:text-4x ${mode ? "opacity-0" : "opacity-100"} ${mode ? "" : "dark:text-slate-100"} text-slate-900}`} />
        </div>
      </div>

      <Navigation />
      <Social />
      <Home />
      <About />
      <Skills/>
      <Work />
      <Contact />
      <Footer />
    </div>
  )
};

export default Main;

