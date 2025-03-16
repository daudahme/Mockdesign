import React, { useEffect, useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { Brands } from "../../UI/Icons";

const SideBarItem = ({
  title = "Some Title",
  Icon = Brands,
  link = "",

}) => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [selected, setselected] = useState(false);
  useEffect(() => {
    setselected(false);
    // Matching Only Slash ROute
    if (link === "/" && pathname === "/") {
      return setselected(true);
    }
    // Matching routes without slash and not have sub routes
    if (link !== "/" && pathname !== "/") {
      if (pathname === link) {
        return setselected(true);
      }
    }
   
  }, [pathname]);
  const handleClick = () => {
    nav(link);
  };
  

  


  return (
    <>
      <div
        onClick={handleClick}
        className={`flex w-[90%] cursor-pointer ${
          selected ? "bg-white" : "bg-transparent"
        }  rounded-[14px]  px-4 py-3 items-center justify-between text-black`}
      >
        <div className="flex justify-center items-center gap-4">
          <Icon color={selected ? "black" : "white"} />
          <span
            className={`${
              selected ? "text-black" : "text-white"
            } font-medium text-base`}
          >
            {title}
          </span>
        </div>
       
      </div>
      
    </>
  );
};

export default SideBarItem;

