import React from 'react'
import { useTranslation } from 'react-i18next'
import Arrow from '../../../assets/icons/Arrow7.svg'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const {i18n , t } = useTranslation()
    const navigate = useNavigate();
  return (
    <div className={`flex justify-center  items-center py-[5%] px-[10%]`}>
      <div className={`bg-primary  flex flex-col justify-center items-center text-center p-[5%] rounded-tr-[100px] rounded-bl-[100px] `} >
        <div className='sm:text-med text-smaller  '>
            {t("contactTitle")}
        </div>
        <div className='sm:text-med text-smaller '>
        {t("homeContact")}
        </div>
          <div
            className={`flex   bg-white  my-[30px] rounded-lg  cursor-pointer group px-[20px] py-[10px] `}
            onClick={() => {
              navigate("/contact");
            }}>
            <div className="text-smaller pr-[5px] text-primary  ">{t("ContactUs")}</div>
            <img
              src={Arrow}
              alt=""
              className={`h-[25px] w-[25px] ${
                i18n.language === "ar"
                  ? "group-hover:-translate-x-2"
                  : "group-hover:translate-x-2"
              } ${
                i18n.language === "ar" ? "rotate-[180deg]" : ""
              } transition-all duration-300`}
            />
          </div>
      </div>
    </div>
  )
}

export default Contact
