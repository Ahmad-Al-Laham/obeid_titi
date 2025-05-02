import React, { useState } from "react";
import { useGetActiveProjectsQuery } from "../../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import { API_BASE_URL } from "../../../constants";
import Arrow from '../../../assets/icons/Arrow.svg'

const Projects = () => {
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetActiveProjectsQuery();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedDisc, setSelctedDisc] = useState("");
  const [selectedId, setSelectedId] = useState("");

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
      <div >
        <div className="text-black w-full  flex  my-[30px]">
        <div className="bg-black flex  w-[45%] h-[3px] sm:mt-[35px] mt-[20px] ml-[10px]"></div>
          <div className="flex  sm:text-bigger text-med ">
            {t("projects")}
          </div>
          
        </div>
        <div className="flex flex-col justify-center items-center">
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 px-[5%] ${
              open ? "block" : "hidden"
            }`}>
            {selectedImg && (
              <div>
                <img
                  src={selectedImg}
                  alt="Selected"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            )}
            {selectedDisc && (
              <div className="text-black justify-center flex flex-col items-center">
                {selectedDisc}
              </div>
            )}
          </div>

          {/* Carousel */}
          <Slider
            slidesToScroll={1}
            accessibility
            slidesToShow={1}
            touchMove={true}
            autoplay={false}
            arrows={false}
            dots={false}
            lazyLoad="progressive"
            className="h-full w-full mt-10"
            responsive={[
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: data.count >= 4 ? 4 : data.count,
                },
              },
              {
                breakpoint: 1300,
                settings: {
                  slidesToShow: data.count >= 3 ? 3 : data.count,
                },
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: data.count >= 2 ? 2 : data.count,
                },
              },
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}>
            {data.ids.map((item, index) => {
              return (
                <div key={index} className="pl-[20px]">
                  <img
                    src={API_BASE_URL + data.entities[item].primaryImage.url}
                    alt={data.entities[item].nameEn}
                    className={`cursor-pointer rounded-lg ${
                      selectedId === data.entities[item].id
                        ? "border-solid border-primary border-[10px]"
                        : "border-white"
                    }`}
                    onClick={() => {
                      // Set the selected image and open the div
                      setSelectedImg(
                        API_BASE_URL + data.entities[item].primaryImage.url
                      );
                      setSelctedDisc(
                        i18n.language === "en"
                          ? data.entities[item].nameEn
                          : data.entities[item].nameAr
                      );
                      setSelectedId(data.entities[item].id);

                      setOpen(true);
                    }}
                  />
                  <div className={`text-black text-smaller ${
                      selectedId === data.entities[item].id
                        ? "text-primary"
                        : "text-black"
                    }`}>
                    {i18n.language === "en"
                      ? data.entities[item].nameEn
                      : data.entities[item].nameAr}
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="flex bg-primary px-[12px] my-[30px] rounded-tr-lg rounded-bl-lg cursor-pointer group "  onClick={()=>{
            navigate("/projects")
          }} >
            <div className="text-smaller pr-[5px]  ">
                {t("viewMore")}
            </div>
            <img src={Arrow} alt="" className={`h-[25px] w-[25px] ${i18n.language==="ar"? "group-hover:-translate-x-2":"group-hover:translate-x-2"} ${i18n.language==="ar"? "rotate-[180deg]":""} transition-all duration-300`}/>
          </div>
        </div>
      </div>
    )
  );
};

export default Projects;
