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
      <div className="flex text-black py-[30px] justify-start items-center">
        <div className="bg-black h-[3px]  w-[42%]  "></div>
        <div className="sm:text-bigger text-small px-[25px] font-[400]"> {t("AboutUs")}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-10  overflow-hidden  justify-center   px-[10%] mb-[30px]">
        <div className="text-black sm:text-small text-smaller order-2 lg:order-1  sm:w-full lg:pr-[20%] xl:pr-[0%] ">
          <div>
          {t("profile1")}
          </div>
          <div className="flex group max-w-max cursor-pointer" onClick={()=>{
            navigate("/profile")
          }}>
          <div className="text-small   text-primary flex flex-col justify-end pt-[10%] group-hover:underline transition-all duration-300">
            {t("learnMore")}
          </div>
          <img src={Arrow} alt="" className={`pt-[10%] pl-[10px]  ${i18n.language==="ar" ? "group-hover:-translate-x-5" : "group-hover:translate-x-5"} transition-all duration-300 ${i18n.language==="ar" ? "rotate-[180deg] mt-[25px]" : ""}`} />
          </div>
        </div>
        <div className=" gap-5 flex flex-col  order-1 lg:order-2  py-10 justify-center items-center  sm:h-full sm:w-full transition-all duration-300 ease-out-in">
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
  );
};

export default AboutUs;
