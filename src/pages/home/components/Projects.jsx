import React, { useState, useEffect } from "react";
import { useGetActiveProjectsQuery } from "../../../redux/projects/projectSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import { API_BASE_URL } from "../../../constants";
import Arrow from "../../../assets/icons/Arrow.svg";
import { useParams } from "react-router-dom";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../components/UI/SliderArrows";

const Projects = () => {
  const {id} = useParams()
  const [carouselSize ] = useState(4)
  const { data, isSuccess, isFetching, isLoading, isError } =
    useGetActiveProjectsQuery({
      limit:carouselSize,
    });
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const [selectedId, setSelectedId] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

const handleSelectProject = (itemId) => {
  const selectedItem = data.entities[itemId];
  setSelectedImages(selectedItem.images);
}

  //useEffect(() => {
  //  if (isSuccess && data?.ids?.length) {
   //   const defaultItem = data.entities[data.ids[0]];
    //  setSelectedId(defaultItem.id);
  //  }
 // }, [data, isSuccess, i18n.language]);

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
      <div>
        <div className="text-primary w-full max-w-[1920px]  flex justify-center items-center my-[30px]">

          <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-l" : "bg-gradient-to-r"}  from-primary/100 flex  w-[20%] h-[4px] `}></div>

          <div className="flex  sm:text-huge text-[37px] px-[2%]   font-bold">
            {t("projects")}
          </div>
          <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-r" : "bg-gradient-to-l"}  from-primary/100 flex  w-[20%] h-[4px] `}></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          

            {/* {selectedDisc && (
              <div className="text-black justify-center flex flex-col items-center sm:text-small text-smaller  ">
                {selectedDisc}
              </div>
            )} */}
          

          {/* Carousel */}
          <Slider
            slidesToScroll={1}
            accessibility
            slidesToShow={1}
            touchMove={true}
            autoplay={false}
            arrows={true}
            dots={false}
            lazyLoad="progressive"
            className="h-full w-[77vw] mt-10"
            nextArrow={<SampleNextArrow />}
            prevArrow={<SamplePrevArrow />}
            responsive={[
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: data.count >= 4 ? 1 : data.count,
                },
              },
              {
                breakpoint: 1300,
                settings: {
                  slidesToShow: data.count >= 3 ? 1 : data.count,
                },
              },
              {
                breakpoint: 1000,
                settings: {
                  slidesToShow: data.count >= 2 ? 1 : data.count,
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
                <div
                onClick={()=>{
                  sessionStorage.setItem(
                    "projectSlug",
                    data.entities[item].id
                  );
                  navigate(`/project/${data.entities[item].id}`);
                  
                }}  
                key={index}
                  className=" focus:outline-none relative active:outline-none cursor-pointer">
                  <img
                    src={API_BASE_URL + data.entities[item].primaryImage.url}
                    alt={data.entities[item].nameEn}
                    className={`cursor-pointer rounded-lg md:h-[90vh] sm:h-[70vh] h-[50vh] w-full rounded-lg${
                      selectedId === data.entities[item].id
                        ? " shadow-xl shadow-primary "
                        : ""
                    }`}

                  />
                  <div className="h-full w-full bg-black/60 rounded-lg  absolute top-0"/>
                  <div
                    className={`text-white text-big absolute  left-1/2   ${i18n.language === "en" ? "lg:-translate-x-[50%] -translate-x-[50%] ": "lg:-translate-x-[50%] -translate-x-[50%]" }  -translate-y-6  top-1/2 bottom-1/2 ${
                      selectedId === data.entities[item].id
                        ? "text-white"
                        : "text-white"
                    }`}>
                    {i18n.language === "en"
                      ? data.entities[item].nameEn
                      : data.entities[item].nameAr}
                  </div>
                </div>
              );
            })}
          </Slider>
          <div
            className={`flex   bg-primary  my-[30px] rounded-tr-lg rounded-bl-lg cursor-pointer group px-[20px] py-[10px] `}
            onClick={() => {
              navigate("/projects");
            }}>
            <div className="text-smaller px-[5px]  ">{t("viewMore")}</div>
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
  );
};

export default Projects;


