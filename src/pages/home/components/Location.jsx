import React from "react";
import { useTranslation } from "react-i18next";
const Location = () => {
  const {i18n , t} = useTranslation()
  return (
    <div>
                <div className="text-black w-full  flex  py-[30px]">
        <div className="bg-black flex  w-[45%] h-[3px] sm:mt-[35px] mt-[20px] ml-[10px]"></div>
          <div className="flex  sm:text-bigger text-med ">
            {t("location")}
          </div>
          
        </div>
      <div className=" grid grid-cols-1  sm:flex my-[5%] px-[5%] sm:px-[0%] " >
        <div className="sm:h-[70vh]  px-[5%] ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2001.7979977042085!2d36.277929756740875!3d33.51443020787605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e0b2fd166793%3A0x1e5a4e39ab5956f3!2z2LPYp9it2Kkg2KfZhNij2YXZiNmK2YrZhg!5e0!3m2!1sar!2sus!4v1745978098657!5m2!1sar!2sus"
            className="h-full sm:h-full w-[100%] sm:w-[400px] lg:w-[600px] xl:w-[800px] rounded-lg border-solid border-primary border-[10px] "></iframe>
        </div>
        <div className="text-primary flex flex-col justify-center ">
          <div className="lg:text-big text-med font-semibold">{t("Office")}</div>
          <div className=" sm:text-smaller  lg:text-small ">
              {t("OfficeSyriaLocation")}
              <br />
              {t("officeLebanonLocation")}
          </div>
          <div className="pt-[10%] lg:text-big text-med font-semibold">{t("Showroom")}</div>
          <div className="sm:text-smaller  lg:text-small">
          {t("showroomLocation")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
