import React from 'react'
import ContactHeader from './components/ContactHeader'
import ContactBody from './components/ContactBody'
import { useTranslation } from 'react-i18next'
const index = () => {
    const {t , i18n} = useTranslation()
  return (
    <div dir={i18n.language==="en" ? "ltr" : "rtl"} className=' font-Bitter max-w-[1920px]'>
        <ContactHeader/>
        <ContactBody/>
    </div>
  )
}

export default index
