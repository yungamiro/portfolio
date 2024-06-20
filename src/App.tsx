import React, { useState, useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar";
import i18n from "./types/i18";
import "./App.css";

const App: React.FC = () => {
  const [colorBlindMode, setColorBlindMode] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const browserLanguage = navigator.language.split(/[-_]/)[0];
    i18n.changeLanguage(browserLanguage);

    const handleScroll = (event: WheelEvent) => {
      if (event.deltaY > 0) {
        setPage((prev) => Math.min(prev + 1, 3));
      } else {
        setPage((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return (
    <div className={colorBlindMode ? "color-blind" : ""}>
      <Navbar setColorBlindMode={setColorBlindMode} />
      <div className="pages-container">
        <Home turned={page > 0} active={page === 0} />
        <About turned={page > 1} active={page === 1} />
        <Projects turned={page > 2} active={page === 2} />
        <Contact turned={page > 3} active={page === 3} />
      </div>
    </div>
  );
};

export default App;
