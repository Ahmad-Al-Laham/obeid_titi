import React from "react";
import { useTranslation } from "react-i18next";
const ContactTitle = () => {
  const {i18n , t} = useTranslation()
  return (
    <div>
      <div className="flex justify-end items-end pb-[30px]" >
        <div className="text-black sm:text-bigger text-med  ">{t("ContactUs")}</div>
        <div className="w-[41%] h-[3px] bg-black sm:mb-[35px] mb-[20px]"></div>
      </div>
    </div>
  );
};

export default ContactTitle;
