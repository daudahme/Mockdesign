import React, { useState } from 'react'
import Foryou from '../component/Pagescomponent/Brand/Foryou';
import Addlibrary from '../component/Pagescomponent/Addllibrary/Addlibrary';

const Brands = () => {
    const tabs = ["For you", "Adlibrary"];
    const [selectedTab, setselectedTab] = useState("For you");

  return (
    <div >
        <div  className="flex justify-start items-center gap-4 pb-7  ">
                   {tabs.map((item) => (
              <Tab
                key={item}
                text={item}
                selected={selectedTab === item}
                onClick={() => setselectedTab(item)}
              />
            ))}
          </div>
          {selectedTab === "For you" ? (
            <Foryou/>
          ) : (
            <Addlibrary/>
          )}
    </div>
  )
}

export default Brands
const Tab = ({ text = "Ride List", selected, onClick }) => {
    return (
      <div onClick={onClick} className="cursor-pointer">
        {selected ? (
          <>
            <h1 className="text-white  border-b-2 border-white ">{text}</h1>
           
          </>
        ) : (
          <>
            <h1 className="text-[#808080]  font-medium ">{text}</h1>
          </>
        )}
      </div>
    );
  };
