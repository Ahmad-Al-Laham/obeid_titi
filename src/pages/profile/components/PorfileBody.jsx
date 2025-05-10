import React from "react";
import topLeft1 from "../../../assets/images/profile/img1/topLeft.png";
import topRight1 from "../../../assets/images/profile/img1/topRight.png";
import bottomLeft1 from "../../../assets/images/profile/img1/bottomLeft.png";
import bottomRight1 from "../../../assets/images/profile/img1/bottomRight.png";
import topLeft2 from "../../../assets/images/profile/img2/topLeft.png";
import topRight2 from "../../../assets/images/profile/img2/topRight.png";
import bottomLeft2 from "../../../assets/images/profile/img2/bottomLeft.png";
import bottomRight2 from "../../../assets/images/profile/img2/bottomRight.png";
import topLeft3 from "../../../assets/images/profile/img3/topLeft.png";
import topRight3 from "../../../assets/images/profile/img3/topRight.png";
import bottomLeft3 from "../../../assets/images/profile/img3/bottomLeft.png";
import bottomRight3 from "../../../assets/images/profile/img3/bottomRight.png";
import { useTranslation } from "react-i18next";
const PorfileBody = () => {
  const {t,i18n} = useTranslation()
  return (
    <div dir={i18n.language==="en" ? "ltr" : "rtl"} className="max-w-[1920px] font-Bitter flex flex-col ">
      <div dir={i18n.language==="en" ? "ltr" : "rtl"} className="flex text-black pt-[30px]">
        <div className="bg-black h-[3px] sm:w-[150px] w-[100px] sm:mt-[35px] mt-[20px]"></div>
        <div className="sm:text-bigger text-med pl-[25px]"> {t("AboutUs")}</div>
      </div>

      <div className="flex flex-col justify-center items-center px-[10%] pb-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10  overflow-hidden  justify-center mb-[30px]">
        <div className={`text-black sm:text-center lg:text-start sm:text-small text-smaller order-2 lg:order-1  sm:w-full ${i18n.language === "en" ? "lg:pr-[20%] xl:pr-[0%]": "lg:pl-[20%] xl:pl-[0%]"} `}>
          {t("profile1")}
        </div>
        <div className=" gap-5 flex flex-col  order-1 lg:order-2  py-10 lg:justify-end lg:items-end justify-center items-center  sm:h-full sm:w-full transition-all duration-300 ease-out-in">
          <div className="flex gap-5   transition-all duration-300">
            <img
              src={topLeft1}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
            <img
              src={topRight1}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
          </div>
          <div className="flex gap-5  transition-all duration-300">
            <img
              src={bottomLeft1}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
            <img
              src={bottomRight1}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10 overflow-hidden  justify-center ">
        <div className=" gap-5 flex flex-col  lg:justify-start lg:items-start justify-center items-center   sm:h-full sm:w-full transition-all duration-300 ease-out-in">
          <div className="flex gap-5  transition-all duration-300">
            <img
              src={topLeft2}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
            <img
              src={topRight2}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
          </div>
          <div className="flex gap-5  transition-all duration-300">
            <img
              src={bottomLeft2}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
            <img
              src={bottomRight2}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
          </div>
        </div>
        <div className={`text-black sm:text-center lg:text-end sm:text-small text-smaller flex   py-10  ${i18n.language === "en"? "lg:pl-[25%] xl:pl-[0%]": "lg:pr-[20%] xl:pr-[0%]" } `}>
        {t("profile2")}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10 overflow-hidden justify-center">
        <div className={`text-black sm:text-center lg:text-start sm:text-small text-smaller order-2 lg:order-1 py-10  ${i18n.language === "en" ? "lg:pr-[20%] xl:pr-[0%]": "lg:pl-[20%] xl:pl-[0%]"} `}>
        {t("profile3")}
        </div>
        <div className=" gap-5 flex flex-col order-1 lg:order-2 lg:justify-end lg:items-end justify-center items-center  sm:h-full sm:w-full transition-all duration-300 ease-out-in">
          <div className="flex gap-5  transition-all duration-300">
            <img
              src={topLeft3}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
            <img
              src={topRight3}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
          </div>
          <div className="flex gap-5  transition-all duration-300">
            <img
              src={bottomLeft3}
              alt=""
              className="h-[100%] w-[33%] sm:h-full sm:w-full"
            />
            <img
              src={bottomRight3}
              alt=""
              className="h-[100%] w-[66%] sm:h-full sm:w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PorfileBody;
