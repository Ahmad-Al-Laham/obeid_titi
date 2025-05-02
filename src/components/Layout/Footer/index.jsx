import React, { useState } from "react";

import logo from "../../../assets/logos/footerLogo.svg"
import Facebook from "../../../assets/icons/Facebook.svg"
import Instagram from "../../../assets/icons/Instagram.svg"
import Behance from "../../../assets/icons/Behance.svg"
import YouTube from "../../../assets/icons/YouTube.svg"
import CircledRight from "../../../assets/icons/CircledRight.svg"
import { useTranslation } from "react-i18next";
const Footer = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const {i18n , t} = useTranslation()

  return (
    <div dir={i18n.language=== "en" ? "ltr" : "rtl"} className="max-w-[1920px] w-full relative space-y-10 flex flex-col justify-center items-center  pt-0">
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2  justify-center items-center font-Bitter   gap-x-5 text-white bg-primary h-[100%]  place-items-center p-[5%] gap-12">
        <div className="">
          <div className={`flex gap-10 justify-start pb-[3%]  max-w-max group `}>
          <div className="text-small sm:text-big md:text-bigger lg:text-huge flex justify-center font-bold max-w-max  cursor-pointer">{t("ContactUs")} </div>
          <div className="pt-[10px] max-w-max "><img src={CircledRight} alt="" className={`transition-all duration-500 cursor-pointer w-[30px] h-[30px] pb-[5px] sm:pb-[0] sm:w-[50px] sm:h-[50px] md:h-[50px] md:w-[50px]  group-hover:rotate-[360deg] ${i18n.language==="ar"?"rotate-[180deg] group-hover:rotate-[540deg]":""} `} /></div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div>
              <div className="text-smaller sm:text-small md:text-small  lg:text-big  font-semibold font-Bitter">{t("Showroom")}</div>
              <div className="text-smaller sm:text-small lg:text-smaller 2xl:text-small pt-[3%] ">
                <p>{t("showroomLocation")}</p>
                <div className="flex flex-col pt-[20px]">
                <a href="tel:+963113311735" >{t("tel")}</a>
                <a href="tel:+963944293093">{t("mob")}</a>
                </div>
              </div>
            </div> 
            <div className="md:pl-[20%]">
              <div className="text-smaller sm:text-small md:text-small   lg:text-big font-semibold font-Bitter pt-[3%] md:pt-[0%] ">{t("Office")}</div>
              <div className="text-smaller sm:text-small lg:text-smaller 2xl:text-small pt-[3%]">
                <p className="">
                 {t("OfficeSyriaLocation")} 
                </p>
                <div>
                  <a href="tel:+963116116013">{t("officeSyriaTel")}</a>
                </div>
                

                <p className=" pt-[20px]">
                  {t("officeLebanonLocation")} 
                </p>
                <div className="flex flex-col pt-[20px]">
                  <a href="tel:+9615437092"> {t("lebanonTel")}</a>
                  <a href="tel:+96176605383">{t("lebanonMob")}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center items-center">
          <img src={logo} alt="LOGO" className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:h-[220px] 2xl:w-[220px] " />
          <div className=" text-med">{t("logoName")}</div>
          <p className={`${i18n.language==="en" ? "text-smaller":"text-small"} `}>{t("underLogo")}</p>
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
