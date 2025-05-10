import React from "react";
import { useEffect } from "react";
import ProjectHeader from "./components/projectHeader";
import ProjectBody from "./components/ProjectBody";
import { useParams } from "react-router-dom";
import Loader from "../../components/UI/Loader";
import { useTranslation } from "react-i18next";
import { useLazyGetProjectByIdQuery } from "../../redux/projects/projectSlice";
const index = () => {
  const { id } = useParams();
  const { i18n, t } = useTranslation();
  const [
    getProjectById,
    { data, isLoading, isFetching, isSuccess, isError},
  ] = useLazyGetProjectByIdQuery();
  useEffect(() => {
    if (id) getProjectById({id});
  }, [id]);
  return isLoading || isFetching ? (
    <div className="h-screen flex justify-center items-center relative font-Bitter">
      <Loader />
    </div>
  ) : isError ? (
    <div className=" py-44 flex justify-center items-center text-center">
      <p className="text-big text-black font-semibold">{t("errorMsg")}</p>
    </div>
  ) : (
    isSuccess && (
      <div>
        <ProjectHeader data={data} />
        <ProjectBody data={data} />
      </div>
    )
  );
};

export default index;
