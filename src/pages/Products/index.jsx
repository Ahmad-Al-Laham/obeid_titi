import React from 'react'
import ProductsHeader from './components/ProductsHeader'
import ProductsBody from './components/productsBody'
import { useTranslation } from 'react-i18next'
const index = () => {
    const { i18n, t } = useTranslation();
  return (
    <div dir={i18n.language==="en" ? "ltr" : "rtl"} className='max-w-[1920px] font-Bitter'>
      <ProductsHeader/>
      <ProductsBody/>
    </div>
  )
}

export default index
