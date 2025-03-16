import React from 'react';

const NavBadges = ({ Icon, text, selected = false, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className={`${
          selected ? 'bg-white' : 'bg-gray-400'
        } px-8 py-3 text-[#101010] font-medium text-base rounded-full w-full flex justify-start items-center gap-2`}
      >
        {Icon && <Icon color={selected ? "#000" : "black"} />}
        <div>{text}</div>
      </div>
    </div>
  );
};

export default NavBadges;
