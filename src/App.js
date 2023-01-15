import React, { useEffect, useState } from "react";
import About from "./components/about/About";
import Footer from "./components/footer/Fotter";
import Skills from "./components/skills/Skills";
import ScrollUp from "./components/scrollup/ScrollUp";
import "./App.css";

function App() {
  /*============= Change Background header ============= */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*============= Toggle Menu ============= */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  /*============= Dark mode ============= */
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const data = window.localStorage.getItem("darkmode1");
    if (data !== null) setDark(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("darkmode1", JSON.stringify(dark));
  }, [dark]);

  return (
    <>
      <main className="main">
        {/* <Home mode={dark} /> */}
        <About mode={dark} />
        <Skills mode={dark} />
        {/* <Portfolio mode={dark} /> */}
        {/* <Contact mode={dark} /> */}
      </main>

      <Footer mode={dark} />
      <ScrollUp mode={dark} />
    </>
  );
}

export default App;
