import React from "react";
import HomeHeader from "./components/HomeHeader";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import Location from "./components/Location";
import Contact from "./components/Contact";
import ContactTitle from "./components/ContactTitle";
const HomePage = () => {
  return (
    <div className=" font-Bitter max-w-[1920px]">
      <HomeHeader />
      <AboutUs/>
      <Products/>
      <Projects/>
      <ContactTitle/>
      <Contact/>
      <Location/>
    </div>
  );
};

export default HomePage;
