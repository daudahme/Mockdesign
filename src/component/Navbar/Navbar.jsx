import React, { useState } from 'react';
import NavBadges from '../../UI/Badges/NavBadges';
import { Saved, Search, Thumbsup, Trends } from '../../UI/Icons';

const Navbar = () => {
  const NavBadgesdata = [
    { text: "Explore", Icon: Search },
    { text: "Trends", Icon: Trends },
    { text: "Recommendations", Icon: Thumbsup },
    { text: "Saved Ads", Icon: Saved },
  ];
  const [selected,setselected] = useState(false)
  const HandleSelected =(id)=>{
     setselected(id)
  }
  

  return (
    <div className="flex gap-3 my-3 bg-main px-5 py-3 rounded-xl">
      {NavBadgesdata.map((value, index) => (
        <NavBadges  onClick={()=>HandleSelected(index)}  selected={selected === index}  key={index} text={value.text} Icon={value.Icon} />
      ))}
    </div>
  );
};

export default Navbar;
