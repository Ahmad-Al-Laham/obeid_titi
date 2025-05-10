import React from 'react'
import { useTranslation } from 'react-i18next'
import { API_BASE_URL } from "../../../constants";
import header from '../../../assets/images/profile/header/header.png'
const ProjectHeader = ({data}) => {

  return (
    <div>
                  <div
              className="w-full h-[80vh] bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${API_BASE_URL+data.id })`,
              }}
            >  </div>
    </div>
  )
}

export default ProjectHeader
