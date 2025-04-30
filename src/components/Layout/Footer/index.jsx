import React, { useState } from "react";

import logo from "../../../assets/logos/footerLogo.svg"
import Facebook from "../../../assets/icons/Facebook.svg"
import Instagram from "../../../assets/icons/Instagram.svg"
import Behance from "../../../assets/icons/Behance.svg"
import YouTube from "../../../assets/icons/YouTube.svg"
import CircledRight from "../../../assets/icons/CircledRight.svg"
const Footer = () => {
  const [selectedLink, setSelectedLink] = useState("Home");

  return (
    <div className="max-w-[1920px] w-full relative space-y-10 flex flex-col justify-center items-center  pt-0">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2  justify-center items-center font-Bitter   gap-x-5 text-white bg-primary h-[100%]  place-items-center p-[5%] gap-12">
        <div className="">
          <div className="flex gap-10 justify-center pr-[30%] pb-[3%]  max-w-max group">
          <div className="text-small sm:text-big md:text-bigger lg:text-huge flex justify-center font-bold max-w-max  cursor-pointer">ContactUs </div>
          <div className="pt-[10px] max-w-max "><img src={CircledRight} alt="" className="transition-all duration-500 cursor-pointer w-[30px] h-[30px] pb-[5px] sm:pb-[0] sm:w-[50px] sm:h-[50px] md:h-[50px] md:w-[50px]  group-hover:rotate-[360deg] " /></div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <div className="text-smaller sm:text-small md:text-small  lg:text-big  font-semibold font-Bitter">Showroom</div>
              <div className="text-smaller sm:text-small lg:text-smaller 2xl:text-small pt-[3%] ">
                <p>Abu Remaneh, Damascus, Syria</p>
                <div className="flex flex-col pt-[20px]">
                <a href="tel:+963113311735" >Tel +963 113311735</a>
                <a href="tel:+963944293093">Mob +963 944293093</a>
                </div>
              </div>
            </div> 
            <div className="md:pl-[20%]">
              <div className="text-smaller sm:text-small md:text-small   lg:text-big font-semibold font-Bitter pt-[3%] md:pt-[0%] ">Office</div>
              <div className="text-smaller sm:text-small lg:text-smaller 2xl:text-small pt-[3%]">
                <p className="">
                  Mazzeh Highway, Damascus,  SyriaMohafaza Biulding 5 
                </p>
                <div>
                  <a href="tel:+963116116013">Tel +963 116116013</a>
                </div>
                

                <p className=" pt-[20px]">
                  Choueifat Main Street, Beirut, Lebanon 
                </p>
                <div>
                  <a href="tel:+9615437092"> Tel +961 5437092</a>
                  <a href="tel:+96176605383">Mob +961 76605383</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={logo} alt="LOGO" className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:h-[220px] 2xl:w-[220px] " />
          <div className=" text-med">O b e i d & T i t i</div>
          <p className="text-smaller ">FOR INTERIOR AND FURNITURE DESIGN</p>
          <div className="flex gap-10 pt-[20px]">
            <a href=""><img src={Facebook} alt="facebook" /></a>
            <a href=""><img src={Instagram} alt="Instagram" /></a>
            <a href=""><img src={Behance} alt="Behance" /></a>
            <a href=""><img src={YouTube} alt="YouTube" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
