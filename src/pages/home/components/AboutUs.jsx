import React from "react";
import topLeft1 from "../../../assets/images/profile/img1/topLeft.png";
import topRight1 from "../../../assets/images/profile/img1/topRight.png";
import bottomLeft1 from "../../../assets/images/profile/img1/bottomLeft.png";
import bottomRight1 from "../../../assets/images/profile/img1/bottomRight.png";
import Arrow from '../../../assets/icons/Arrow7.svg'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const navigate = useNavigate();
  const {t , i18n} = useTranslation()
   return (
    <div>
      <div className="flex text-primary py-[30px] justify-center items-center">
        <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-l" : "bg-gradient-to-r"}  from-primary/100 flex   w-[20%] h-[4px] `}></div>
        <div className="sm:text-huge text-[37px] flex justify-center items-center font-bold px-[2%]"> {t("AboutUs")}</div>
        <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-r" : "bg-gradient-to-l"}  from-primary/100 flex   w-[20%] h-[4px] `}></div>
      </div>
      <div  className="px-[10%]">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10  overflow-hidden  justify-center    mb-[30px]">
        <div className={`text-black sm:text-small text-smaller order-2 lg:order-1  sm:w-full  ${i18n.language ==="en"? "lg:pr-[20%] xl:pr-[0%]" :"lg:pl-[20%] xl:pl-[0%]"} `}>
          <div className="flex flex-col justify-end items-end ">
          {t("profile1")}
          </div >
          <div className="flex group max-w-max cursor-pointer" onClick={()=>{
            navigate("/profile")
          }}>
          <div className="text-small   text-primary flex flex-col justify-end pt-[10%] group-hover:underline transition-all duration-300">
            {t("learnMore")}
          </div>
          <img src={Arrow} alt="" className={`pt-[10%] pl-[10px]  ${i18n.language==="ar" ? "group-hover:-translate-x-5" : "group-hover:translate-x-5"} transition-all duration-300 ${i18n.language==="ar" ? "rotate-[180deg] mt-[25px]" : ""}`} />
          </div>
        </div>
        <div className=" gap-5 flex flex-col  order-1 lg:order-2  py-[5%] lg:justify-end lg:items-end justify-center items-center  sm:h-full sm:w-full transition-all duration-300 ease-out-in">
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
      </div>
    </div>
  );
};

export default AboutUs;
