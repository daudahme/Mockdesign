import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Siderbar/SideBar";
import Navbar from "../Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="flex  h-screen  ">
      <div className="w-72 fixed left-0 top-0 h-full ">
        <SideBar />
      </div>
      <div className="flex flex-col flex-1 ml-80 ">
        <div className="w-full">
          <Navbar />
        </div>
        <div className="p-4 overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
