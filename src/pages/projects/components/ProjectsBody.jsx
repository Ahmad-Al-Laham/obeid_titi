import React, { useState,useEffect } from "react";
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
  useEffect(() => {
    if (data?.ids?.length) {
      const defaultProject = data.entities[data.ids[0]];
      setSelectedImg(API_BASE_URL + defaultProject.primaryImage.url);
      setSelectedDisc(
        i18n.language === "en" ? defaultProject.nameEn : defaultProject.nameAr
      );
      setSelectedId(defaultProject.id);
      setSelectedImages(defaultProject.images.map((image) => image.url));
      setOpen(true);
    }
  }, [data]);
  //  const [imagesLength , setImagesLength] =useState("")

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
          <div className="sm:text-huge text-big   font-semibold pb-[30px] ">
            {t("projects")}
          </div>
          <div className="text-center md:text-small text-smaller pb-[30px]">
            {t("ProjectsDisc")}
          </div>

          <SearchBar />

          <div className="text-center md:text-small text-smaller py-[30px]">
            {t("ProjectsDisc2")}
          </div>
        </div>
        <div className={`flex flex-col px-[5%] ${open ? "block" : "hidden"}`}>
          {selectedImg && (
            <div className="w-full lg:h-[100vh] h-[50vh]">
              <img
                src={selectedImg}
                alt="Selected"
                className="w-full h-full rounded-xl"
              />
            </div>
          )}
        </div>
        {selectedImages && (
          <Slider
            slidesToScroll={1}
            accessibility
            slidesToShow={4}
            touchMove={true}
            autoplay={false}
            arrows={true}
            dots={false}
            lazyLoad="progressive"
            className="h-full w-full mt-10  overflow-hidden"
            nextArrow={<SampleNextArrow/>}
            prevArrow={<SamplePrevArrow/>}
            responsive={[
              {
                breakpoint: 2000,
                settings: {
                  slidesToShow: data.count >= 4 ? 4 : data.count,
                },
              },
              {
                breakpoint: 1700,
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
            ]}
            >
              
            {selectedImages.map((imageUrl, index) => (
              <div
                key={index}
                className=" h-full focus:outline-none active:outline-none w-full px-[10px] "
                >
                <img
                  src={API_BASE_URL + imageUrl}
                  className="cursor-pointer  rounded-lg h-[20vh] w-[100vh] sm:h-[50vh] sm:w-[100vw] "
                  onClick={() => setSelectedImg(API_BASE_URL + imageUrl)}
                />
              </div>
            ))}
          </Slider>
        )}
        {selectedImg && (
          <div className="text-black text-bigger pt-[30px]">
            {t("MoreProjects")}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center py-[30px]">
          {data.ids.map((item, index) => {
            return (
              <div key={index} className="px-[20px]">
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
                  }}
                />
                <div
                  className={`text-black text-smaller ${
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
        </div>
      </div>
    )
  );
};

export default ProjectsBody;
