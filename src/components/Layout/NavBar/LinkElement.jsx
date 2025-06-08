import { NavLink } from "react-router-dom";
import colors from "../../../settings";
const LinkElement = ({ name, link, styled, onClick }) => {
  return (
    <NavLink
      onClick={onClick}
      style={({ isActive }) => {
        return {
          color:"white",  
          borderBottomColor: isActive ? "white" :"transparent",                                                                                                         
          borderBottomWidth: "2px"
        };
      }}
      to={link}
    >
      <p className={`px-2 py-4 h-full cursor-pointer text-smaller  xl:text-[20px] ${styled}`}>
        {name}
      </p>
    </NavLink>
  );
};

export default LinkElement;
