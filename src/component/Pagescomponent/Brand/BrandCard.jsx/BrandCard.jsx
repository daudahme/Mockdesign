import React from 'react'
import carcel from '../../../../assets/carcel.png'
import rector from '../../../../assets/rector.jpg'
import purple from '../../../../assets/purple.png'
import NavBadges from '../../../../UI/Badges/NavBadges'
import { Heart, TrackBrand, TrendArrow } from '../../../../UI/Icons'
const BrandCard = () => {
    return (
        <div className='bg-[#575859] w-full rounded-xl px-3 py-3'>
            <div className='flex justify-between items-center py-2 border-b-2 border-[#D9D9D9]-'>
                <div>
                    Following
                </div>
                <div>
                    <NavBadges text="5,789%" Icon={TrendArrow} selected={true}/>
                </div>

            </div>
            <div className=' mb-4 my-3'>
                <p >5,824  <span className='text-[#D9D9D9]'>Fresh Campaigns from this Brand Group</span></p>
            </div>
            <div className='flex flex-col justify-start items-start gap-5'>
                <div className='flex justify-center items-center gap-5'>
                    <div>
                        <img src={carcel} alt="" height={40} width={40} className='rounded-full'/>
                    </div>
                    <div>
                        <h1>Nectar Sleep</h1>
                        <p> 1,718 new ads</p>
                    </div>
                    <div className='ml-9'>
                        <NavBadges text={"Competitor"} Icon={TrackBrand} selected={true} />
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5 '>
                    <div >
                        <img src={rector} alt="" height={40} width={40}  className='rounded-full'/>
                    </div>
                    <div>
                        <h1> Purple</h1>
                        <p>2,786 new ads</p>

                    </div>
                    <div className='ml-9'>
                        <NavBadges text={"Competitor"} Icon={TrackBrand}  selected={true}/>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-5' >
                    <div>
                        <img src={purple} alt="" height={40} width={40}  className='rounded-full'/>
                    </div>
                    <div>
                        <h1> Casper</h1>
                        <p> 1,320 new ads</p>
                    </div>
                    <div className='ml-9'>
                        <NavBadges text={"Followed"} Icon={Heart}  selected={true}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BrandCard
