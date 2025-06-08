import React, { useState, useEffect } from "react";
import { useGetActiveProjectsQuery } from "../../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import { API_BASE_URL } from "../../../constants";
import Arrow from "../../../assets/icons/Arrow.svg";
import SearchBar from "./SearchBar";
import LazyImage from "../../../components/UI/LazyImage/index";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/UI/SliderArrows";
const ProjectsBody = () => {
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetActiveProjectsQuery();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedDisc, setSelectedDisc] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedImages, setSelectedImages] = useState("");
  const [isClicked , setIsClicked] = useState(false)


  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className="py-44 flex justify-center items-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <div className="flex flex-col justify-center items-center text-black">
        <div className="flex flex-col justify-center items-center px-[10%]">

          <div className="text-center md:text-small text-smaller py-[4%]">
            {t("ProjectsDisc")}
          </div>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center pb-[30px]">
          {data.ids.map((item, index) => {
            return (
              <div key={index} className="px-[10px] py-[10px] md:w-[33vw] text-white sm:w-[50vw] w-[100vw] h-[50vh]"
              onClick={() => {
                navigate(`/project/${data.entities[item].id}`)
              }}
              >
                <div
                  className={` bg-cover bg-no-repeat bg-center w-full h-full  cursor-pointer  ${
                    selectedId === data.entities[item].id
                      ? ""
                      : ""
                  }`}
                  style={{
                    backgroundImage: `url(${
                      API_BASE_URL + data.entities[item].primaryImage.url
                    })`,
                  }}
                  onClick={() => {
                    // Set the selected image and open the div
                    setSelectedImg(
                      API_BASE_URL + data.entities[item].primaryImage.url
                    );
                    setSelectedDisc(
                      i18n.language === "en"
                        ? data.entities[item].nameEn
                        : data.entities[item].nameAr
                    );
                    setSelectedId(data.entities[item].id);
                    setSelectedImages(
                      data.entities[item].images.map((image) => image.url)
                    );

                    setOpen(true);
                  }}>
                  <div
                    dir={i18n.language == "en" ? "ltr" : "rtl"}
                    className={`flex flex-col h-full border group  bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-b lg:from-transparent lg:to-primary/60  lg:opacity-0 hover:opacity-100     transition-all  duration-1000 p-4`}
                    onClick={()=>{
                      setIsClicked(true)
                      setSelectedId(data.entities[item].id);
                    }}
                    >
                    <p
                      className={` group-hover:opacity-100 lg:opacity-0 opacity-100 duration-500 ease-in-out  text-small text-white font-bold pt-[30%] flex justify-center items-center ${
                        i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                      }  `}
                      
                      onClick={() =>{
                        setSelectedId(data.entities[item].id);
                      }}>
                      {i18n.language == "en"
                        ? data.entities[item].nameEn
                        : data.entities[item].nameAr}
                    </p>
                  </div>
                </div>
                ;
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default ProjectsBody;
