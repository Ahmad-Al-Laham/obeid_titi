import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "../../../components/UI/Loader";
import Slider from "react-slick";
import { useGetActiveProductsQuery } from "../../../redux/products/productsSlice";
const Products = () => {
  const [itemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { data, isSuccess, isLoading, isFetching, isError } =
    useGetActiveProductsQuery();
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
        <div className="flex justify-end items-end" >
          <div className="text-black sm:text-bigger text-med  ">{t("products")}</div>
          <div className="w-[41%] h-[3px] bg-black sm:mb-[2%] mb-[10%]"></div>
        </div>
        <div className="flex justify-center items-center text-black text-small text-center sm:py-[3%] py-[10%]">
        {t("productsTitle")}
        </div>
        <div className="grid grid-cols-3">
          {data.ids.map((item, index) => {
            return (
              <div key={index} className="p-[20px]">

                <img
                  src={API_BASE_URL + data.entities[item].primaryImage.url}
                  alt={data.entities[item].nameEn}
                  className="h-[500px] rounded-lg pb-[3px] cursor-pointer w-full "
                />
                
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Products;
//<img src={ API_BASE_URL + data.entities[item].primaryImage.url} alt="" />
