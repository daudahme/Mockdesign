import React from 'react';
import rector from '../../../../assets/rector.jpg';
import NavBadges from '../../../../UI/Badges/NavBadges';
import { Cup, Dropdown, Plus } from '../../../../UI/Icons';
import winnerprovider from '../../../../assets/winnerprovider.png';

const AddLibraryCard = ({
  text = "Necter",
  image = rector,
  link = "www.nectarsleep.com",
  Offer = "Start Your 365 Night Trial",
}) => {
  return (
    <div className="bg-[#575859]  rounded-2xl shadow-md ">
      <div className="flex items-center gap-3 justify-between p-4">
        <div className='flex justify-center items-center gap-4 text-xl font-medium'>
        <img src={image} alt={text} className="rounded-full w-10 h-10" />
       {text}
        </div>
        <NavBadges text="Proven Winner" Icon={Cup}  />
      </div>

    
      <div>
        <img src={winnerprovider} alt="Winner Provider" className="w-full" />

      </div>
      
      <div className='flex justify-between items-center gap-4 p-4 '>
        <div>
        <p className="text-[#D9D9D9] underline cursor-pointer font-medium">{link}</p>
        <p className="text-[#FFFFFF]">{Offer}</p>
        </div>
        <NavBadges text="Show"  />
      </div>
      <div className="p-4 ">
  <div className="flex justify-between items-center gap-3 bg-white px-4 py-4 rounded-3xl text-black">
    <Plus className="w-6 h-6" />  {/* Render as a component */}
    <p className="font-medium">Save to Inspiration</p>
    <Dropdown className="w-6 h-6" />  {/* Render as a component */}
  </div>
</div>

    </div>
  );
};

export default AddLibraryCard;
