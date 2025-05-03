import React from "react";
import header from "../../../assets/images/projects/header.png";
import bg from "../../../assets/images/projects/bg.png";
const ContactHeader = () => {
  return (
    <div className=' h-[80vh] relativ'>
      <img src={header} alt="header" className="w-full h-full " />
      <img src={bg} alt="header" className="w-full absolute -z-50 top-0" />
    </div>
  );
};

export default ContactHeader;
