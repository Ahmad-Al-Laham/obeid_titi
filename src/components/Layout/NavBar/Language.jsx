import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

import {
  MdLanguage,
  MdRadioButtonChecked,
  MdRadioButtonUnchecked,
} from "react-icons/md";

export default function Dropdown() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="rounded-md">
      <div className="relative">
        <div
          style={{ WebkitTapHighlightColor: "transparent" }}
          className=" m-0 relative flex text-white text-center text-smaller  xl:text-[20px]  p-[5px] rounded-lg cursor-pointer"
         
        >
          
          {i18n.language=== "ar" ? (<div onClick={() =>{changeLanguage("en");}}>English</div>) : (<div onClick={() =>{changeLanguage("ar");}}>العربية</div>)}
          
        </div>


      </div>
    </div>
  );
}




