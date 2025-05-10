import React from "react";
import HomeHeader from "./components/HomeHeader";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Contact from "./components/Contact";

import { useTranslation } from "react-i18next";
const HomePage = () => {
  const {i18n} = useTranslation()
  return (
    <div dir={i18n.language==="en" ? "ltr" : "rtl"} className=" font-Bitter max-w-[1920px]">
      <HomeHeader />
      <AboutUs/>
      <Products/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default HomePage;
