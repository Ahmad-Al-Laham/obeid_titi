import contact from "../../../assets/images/home/contact/contact.png";
import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import Button from "../../../components/UI/Button";
import { useAddFeedbackMutation } from "../../../redux/feedback/feedbackSlice";
import { MdSend } from "react-icons/md";
import logo from "../../../assets/logos/footerLogo.svg";
import Facebook from "../../../assets/icons/Facebook.svg";
import Instagram from "../../../assets/icons/Instagram.svg";
import Behance from "../../../assets/icons/Behance.svg";
import YouTube from "../../../assets/icons/YouTube.svg";
import CustomInput from "../../../components/Forms/CustomInput";
import useForm from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { showMessage } from "../../../redux/messageAction.slice";
const defaultFormState = {
  fullName: "",
  email: "",
  message: "",
  subject: "",
  phoneNumber: "",
};

const Contact = () => {
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
    <div
      className="flex justify-center  "
      dir={i18n.language == "en" ? "ltr" : "rtl"}>
      <div
        className=" h-full  bg-cover bg-no-repeat bg-center w-[80%] rounded-md rounded-t-md "
        style={{
          backgroundImage: `url(${contact})`,
        }}>
        <div className="bg-gradient-to-b from-primary/90 ">
          <div className="col-span-2 grid lg:grid-cols-2 grid-cols-1  justify-center p-0.5 bg-gradiantBorder rounded-md">
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
                    "rounded-lg bg-white text-small mt-[20px] text-black"
                  }
                customStyle={"placeholder:text-black"}
                />
              </div>
              <div className="flex flex-row gap-x-2 mt-2">
                <CustomInput
                  placeholder={t("phoneNumber")}
                  type={"phoneNumber"}
                  name={"phoneNumber"}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  error={errors?.phoneNumber}
                  containerStyle={
                    "rounded-lg bg-white text-small my-[20px] text-black"
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
                textAreaRows={5}
                error={errors?.message}
                containerStyle={
                  " rounded-lg bg-white text-small mb-[20px] text-black"
                }
                customStyle={"placeholder:text-black"}
              />
              <div className="">
                <Button
                  bgColor={"!bg-primary"}
                  text={isLoading ? t("sending") : t("send")}
                  customStyle={`font-semibold group self-end disabled:bg- !rounded-md ${
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
           
              <div className="text-center lg:order-2 order-1 flex flex-col pb-[5%] justify-center items-center">
                <img
                  src={logo}
                  alt="LOGO"
                  className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] lg:h-[220px] 2xl:w-[220px] "
                />
                <div className=" text-med">O b e i d & T i t i</div>
                <p className="text-smaller ">
                  FOR INTERIOR AND FURNITURE DESIGN
                </p>
                <div className="flex gap-10 pt-[20px]">
                  <a href="">
                    <img src={Facebook} alt="facebook" />
                  </a>
                  <a href="">
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a href="">
                    <img src={Behance} alt="Behance" />
                  </a>
                  <a href="">
                    <img src={YouTube} alt="YouTube" />
                  </a>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
