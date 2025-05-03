import React from "react";
import { useTranslation } from "react-i18next";
const ContactTitle = () => {
  const {i18n , t} = useTranslation()
  return (
    <div>
      <div className="flex justify-end items-center pb-[30px] " >
        <div className="text-black sm:text-bigger text-med px-[15px] font-[400] ">{t("ContactUs")}</div>
        <div className="w-[42%] h-[3px] bg-black "></div>
      </div>
    </div>
  );
};

export default ContactTitle;
