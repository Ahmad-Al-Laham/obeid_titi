import React from 'react'
import ProjectsHeader from './components/ProjectsHeader'
import ProjectsBody from './components/ProjectsBody'
import { useTranslation } from "react-i18next";
const index = () => {
      const {i18n} = useTranslation()
  return (
    <div dir={i18n.language==="en" ? "ltr" : "rtl"} className=' font-Bitter max-w-[1920px]'>
      <ProjectsHeader/>
      <ProjectsBody/>
    </div>
  )
}

export default index
