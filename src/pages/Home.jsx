import React, { useState, useEffect } from "react";
import Landing from "../components/Landing/Landing";
import News from "../components/News/News";
import Context from "../components/Context/Context";
import AboutHome from "../components/AboutHome/AboutHome";
import Gallery from "../components/Gallery/Gallery";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="landing-bg"
    >
      <Landing />
      <News />
      <Context />
      <AboutHome />
      <Gallery />
    </div>
  );
}
