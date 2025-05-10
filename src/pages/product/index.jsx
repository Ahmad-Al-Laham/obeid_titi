import React from 'react'
import header from './components/header'
import ProductDetails from './components/ProductDetails'
import { useTranslation } from 'react-i18next'
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import { useEffect } from "react";
import { useLazyGetProductByIdQuery } from '../../redux/products/productsSlice';
const index = () => {
    const {i18n , t} = useTranslation()
    const { id } = useParams();
    const [getProductById , { data, isLoading, isFetching, isSuccess, isError}] = useLazyGetProductByIdQuery()
      useEffect(() => {
        if (id) getProductById({id});
      }, [id]);
  return isLoading || isFetching ? (
    <div className="h-screen flex justify-center items-center relative">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center items-center text-center">
      <p className="text-big font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <div>
        <header/>
        <ProductDetails data={data} />

      </div>
    )
  );
}

export default index
