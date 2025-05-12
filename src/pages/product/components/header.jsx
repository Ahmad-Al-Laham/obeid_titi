import React from 'react'
import { useTranslation } from "react-i18next";
import { API_BASE_URL } from '../../../constants';
const Header = ({data}) => {
    const {i18n , t} = useTranslation();
  return (
          <div className=' max-w-[1920px] flex flex-col font-Bitter '>
          <div className='w-full h-[80vh] relative  bg-cover bg-center bg-no-repeat '
            style={{
              backgroundImage: `url(${API_BASE_URL + data.primaryImage.url})`,
            }}
          >
            <div className='sm:ext-[80px] sm:text-huge text-big flex justify-center items-center xl:pt-[17%] xl:pb-[17%] lg:pb-[25%] lg:pt-[25%]  md:pb-[30%] md:pt-[30%]   sm:pb-[37%] sm:pt-[37%] pb-[50%] pt-[50%]  bg-gradient-to-b from-black/80    '>
            <div className='  font-bold'>
            {t("ourProducts")}
            </div>
    
            </div>
          </div>
      </div>
        )
}

export default Header
