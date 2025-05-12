import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import Arrow from "../../../assets/icons/Arrow.svg";
import { useGetActiveProductsQuery } from "../../../redux/products/productsSlice";
const Products = () => {
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveProductsQuery({
      limit:itemsPerPage,
    });
  return isLoading || isFetching ? (
    <div className="py-44 flex justify-center items-center relative ">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center itsems-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <div>
        <div className="flex justify-center items-center " >
        <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-l" : "bg-gradient-to-r"}   from-primary/100 flex   w-[20%] h-[4px] `}></div>
          <div className="text-primary sm:text-huge text-[37px] flex justify-center items-center font-bold px-[2%]  ">{t("products")}</div>
          <div className={`bg-black ${i18n.language === "en"? "bg-gradient-to-r" : "bg-gradient-to-l"}   from-primary/100 flex   w-[20%] h-[4px] `}></div>
        </div>
        <div className="flex justify-center items-center text-black sm:text-small text-smaller text-center px-[10%] sm:py-[3%] py-[10%]">
        {t("productsTitle")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  px-[10%]  ">
          <div className="flex flex-col ">
            {data.ids.map((item, index) => {
              if (index >= 0 && index <= 1)
                return (
                  <div onClick={() => {
                    sessionStorage.setItem(
                      "productSlug",
                      data.entities[item].id
                    );
                    navigate(`/product/${data.entities[item].id}`)
                  }} key={index} className="cursor-pointer pt-[4%] ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[500px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-full   bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(${
                            API_BASE_URL + data.entities[item].primaryImage.url
                          })`,
                        }}
                        onClick={() => {
                          sessionStorage.setItem(
                            "productSlug",
                            data.entities[item].id
                          );
                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full border group bg-gradient-to-t from-primary/60 to-transparent opacity-100 hover:opacity-0 transition-all text duration-1000 p-4">
                          <p
                            className={`text-small group-hover:translate-y-[100px] duration-500 ease-in-out text-white font-bold mt-auto flex justify-center items-center ${
                              i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                            }  `}>
                            {i18n.language == "en"
                              ? data.entities[item].nameEn
                              : data.entities[item].nameAr}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="flex flex-col sm:pt-[15%] pt-[20px] ">
            {data.ids.map((item, index) => {
              if (index >= 2 && index <= 3)
                return (
                  <div key={index} className="cursor-pointer pt-[4%] ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[500px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-full   bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(${
                            API_BASE_URL + data.entities[item].primaryImage.url
                          })`,
                        }}
                        onClick={() => {
                          sessionStorage.setItem(
                            "productSlug",
                            data.entities[item].id
                          );

                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full border group bg-gradient-to-t from-primary/60 to-transparent opacity-100 hover:opacity-0 transition-all text duration-1000 p-4">
                          <p
                            className={`text-small text-white group-hover:translate-y-[100px] duration-500 ease-in-out font-bold flex justify-center items-center mt-auto ${
                              i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                            }  `}>
                            {i18n.language == "en"
                              ? data.entities[item].nameEn
                              : data.entities[item].nameAr}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>
          <div className="flex flex-col sm:pt-[30%] pt-[4%] sm:hidden lg:block  ">
            {data.ids.map((item, index) => {
              if (index >= 4 && index <= 5)
                return (
                  <div key={index} className="cursor-pointer pt-[4%] ">
                    <div className="bg-white w-[100%]  lg:w-[95%] h-[500px]    overflow-hidden ">
                      <div
                        className="w-[100%] lg:w-[100%] h-full transition-all duration-300   bg-cover bg-no-repeat bg-center"
                        style={{
                          backgroundImage: `url(${
                            API_BASE_URL + data.entities[item].primaryImage.url
                          })`,
                        }}
                        onClick={() => {
                          sessionStorage.setItem(
                            "productSlug",
                            data.entities[item].id
                          );
                        }}>
                        <div
                          dir={i18n.language == "en" ? "ltr" : "rtl"}
                          className="flex flex-col h-full group bg-gradient-to-t from-primary/60 to-transparent opacity-100 hover:opacity-0 transition-all duration-1000 border p-4">
                          <p
                            className={`text-small text-white group-hover:translate-y-[100px] transition-all duration-500 ease-in-out flex justify-center items-center font-bold mt-auto ${
                              i18n.language == "en" ? "pl-[10px]" : "pr-[10px]"
                            }  `}>
                            {i18n.language == "en"
                              ? data.entities[item].nameEn
                              : data.entities[item].nameAr}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
            })}
          </div>

        </div>
        <div className="flex justify-center items-center">
                  <div
                    className={`flex   justify-center bg-primary items-center max-w-max  my-[30px] rounded-tr-lg rounded-bl-lg cursor-pointer group px-[20px] py-[10px] `}
                    onClick={() => {
                      navigate("/products");
                    }}>
                    <div className="text-smaller pr-[5px]  flex justify-center items-center  ">{t("viewMore")}</div>
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

export default Products;
//<img src={ API_BASE_URL + data.entities[item].primaryImage.url} alt="" />
