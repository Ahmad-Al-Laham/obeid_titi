import contact from "../../../assets/images/home/contact/contact.png";
import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import Button from "../../../components/UI/Button";
import { useAddFeedbackMutation } from "../../../redux/feedback/feedbackSlice";
import { MdSend } from "react-icons/md";
import logo from "../../../assets/logos/Logo.svg";
import Facebook from "../../../assets/icons/Facebook.svg";
import Instagram from "../../../assets/icons/Instagram.svg";
import Behance from "../../../assets/icons/Behance.svg";
import YouTube from "../../../assets/icons/YouTube.svg";
import CustomInput from "../../../components/Forms/CustomInput";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { showMessage } from "../../../redux/messageAction.slice";

const defaultFormState = {
  email: "",
  message: "",
  phoneNumber: "",
};

const ContactBody = () => {
  const {
    disabled,
    errors,
    setErrors,
    setValues,
    handleSubmit,
    handleChange,
    values,
  } = useForm(submit, defaultFormState);
  const [addFeedback, { isLoading, isSuccess, isError }] =
    useAddFeedbackMutation();
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (isSuccess) {
      dispatch(
        showMessage({
          message: "Thank You For Your Feedback",
          variant: "success",
        })
      );
    }
    if (isError) {
      showMessage({
        message: "Somthing went wrong, please try agian!",
        variant: "error",
      });
    }
  }, [isError, isSuccess]);
  function submit(e) {
    addFeedback({ form: values });
    setValues(defaultFormState);
  }
  return (
    <div>
      <div className="text-black sm:text-huge text-bigger font-semibold pt-[5%] px-[5%] ">
        {t("getInTouch")}
      </div>
      <div className="text-black bg-white m-[5%]  shadow-xl p-[5%] pt-[0] grid  lg:grid-cols-2 grid-cols-1   justify-center items-center">
        <div className=" rounded-md w-full lg:order-1 order-2 p-10 flex flex-col space-y-3">
          <div className="flex flex-row gap-x-2 mt-2">
            <CustomInput
              placeholder={t("email")}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              value={values.email}
              error={errors?.email}
              containerStyle={
                " border-b-black  bg-white text-small mt-[20px] text-black"
              }
              customStyle={"placeholder:text-black"}
            />
          </div>
          <div className="flex  flex-row  gap-x-2 mt-2">
            <CustomInput
              placeholder={t("phoneNumber")}
              type={"phoneNumber"}
              name={"phoneNumber"}
              onChange={handleChange}
              value={values.phoneNumber}
              error={errors?.phoneNumber}
              containerStyle={
                "  border-b-black bg-white text-small my-[20px] text-black"
              }
              customStyle={"placeholder:text-black"}
            />
          </div>
          <CustomInput
            // inputLabel={t("message")}
            placeholder={t("message")}
            name="message"
            value={values.message}
            onChange={handleChange}
            textArea
            textAreaRows={1}
            error={errors?.message}
            containerStyle={
              "  border-b-black bg-transparent  text-small  text-black"
            }
            customStyle={"placeholder:text-black"}
          />
          <div className="flex justify-end items-end ">
            <Button
              bgColor={"!bg-primary"}
              text={isLoading ? t("sending") : t("send")}
              customStyle={`font-semibold group self-end disabled:bg- !rounded-tr-lg !rounded-bl-lg ${
                isLoading && "animate-bounce"
              }`}
              textColor={"text-white disabled:text-fifth text-med"}
              borderRadius={2}
              disabled={disabled}
              w={"210px"}
              h={"50px"}
              onClick={handleSubmit}
              icon={
                !isLoading && (
                  <MdSend
                    className={`${
                      i18n.language == "en"
                        ? "group-hover:translate-x-[50%]"
                        : "group-hover:-translate-x-[50%]"
                    } transition-all duration-500 ${
                      i18n.language == "ar" && "rotate-180"
                    } `}
                    size={25}
                  />
                )
              }
            />
          </div>
        </div>

        <div className="text-center border-r-black lg:order-2 order-1 flex flex-col pb-[5%] justify-center items-center">
          <img
            src={logo}
            alt="LOGO"
            className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:h-[220px] 2xl:w-[220px] "
          />
          <div className=" text-med">O b e i d & T i t i</div>
          <p className="text-smaller ">FOR INTERIOR AND FURNITURE DESIGN</p>

        </div>
      </div>
    </div>
  );
};

export default ContactBody;
