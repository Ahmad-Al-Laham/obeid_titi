import React, {useState} from 'react'
import { API_BASE_URL } from "../../../constants";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetActiveProductsQuery } from '../../../redux/products/productsSlice'
import Loader from '../../../components/UI/Loader';
const ProductsBody = () => {

    const {data , isSuccess , isFetching , isLoading , isError} = useGetActiveProductsQuery();
      const navigate = useNavigate();
      const { i18n, t } = useTranslation();
      
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
        <div className={`text-black sm:text-big text-med flex justify-center items-center font-bold pt-[3%] `}>
            {t("ourLuxuryProducts")}
        </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-black px-[5%] py-[3%]`}>
                  
                    {data.ids.map((item, index) => {

                        return (
                          <div  key={index} className="cursor-pointer pt-[4%] ">
                            <div className="bg-white w-[100%]  lg:w-[95%] h-[50vh]    overflow-hidden ">
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
                                  navigate(`/product/${data.entities[item].id}`)
                                }}>
                                <div
                                  dir={i18n.language == "en" ? "ltr" : "rtl"}
                                  className="flex flex-col h-full border group bg-gradient-to-t from-primary/60 to-transparent lg:bg-gradient-to-b lg:from-transparent lg:to-primary/60  lg:opacity-0 hover:opacity-100 transition-all text duration-700 p-4">
                                  <p
                                    className={`text-small lg:translate-y-[100px] lg:group-hover:-translate-y-[100px] duration-500 ease-in-out text-white font-bold mt-auto flex justify-center items-center ${
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
   
  )
)
}

export default ProductsBody
