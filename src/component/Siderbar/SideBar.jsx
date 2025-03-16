import React from "react";
import SideBarItem from "./SideBarItem";
import Logo from "../../UI/Logo/Logo";
import { sidebarData } from "../../Data/data";
import  { BellIcon, Dropdown, Sidebarpic } from '../../UI/Icons'
import profilepic from '../../assets/profilepic.png'
const Sidebar = () => {
  return (
    <aside
      className={`fixed top-0 left-0 my-3 mx-3 bg-[#3E3E3E33] w-72 h-screen pl-5 pb-5 pr-3 flex flex-col justify-start gap-5 shadow rounded-xl`}
    >
      <div className="pt-6 pb-[24px] border-b-2 flex justify-between items-center ">
        <Logo />
        <div className="flex justify-center items-center  gap-2" >
          <BellIcon/>
          <img src={profilepic} alt="" height={30} width={30} className="rounded-full"/>
        </div>
      </div>
     
      <div
        id="sidebar-items2"
        className="sidebar-items flex flex-col justify-start overflow-y-scroll  overflow-x-hidden gap-4 transition-all delay-1000  duration-1000 ease-in-out "
      >
        <div className="bg-[#575859] px-4 py-4 rounded-3xl w-[90%] ">
         <div className="flex justify-between items-center gap-4">
          <Sidebarpic color="white"/>
          <p className="text-white">Nadira Sleep</p>
          <Dropdown/>
         </div>
        </div>
        {sidebarData?.map((item, index) => (
          <SideBarItem
            key={index}
            title={item.title}
            link={item.link}
            Icon={item.Icon}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
