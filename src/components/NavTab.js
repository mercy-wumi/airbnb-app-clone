import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, A11y } from 'swiper';
import { AdjustmentsIcon } from '@heroicons/react/outline'
import navIcons from '../navIcons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const NavTab = () => {

    const [navIcon] = useState(navIcons);
    return (
        <div className='flex items-center justify-between '>
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                slidesPerView={11}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {navIcon.map((nav, index) => {
                    return (
                        <SwiperSlide key={index} className='hover:border-b-2 border-0 border-gray-500 hover:font-bold'>
                            <img src={nav.icon} alt='nav tab icons' className='h-auto w-1/2 text-gray-600 text-center object-contain' />
                            <p className='py-4'>{nav.title}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className='p-4 rounded-xl flex border-[1px] border-gray-600'>
                <AdjustmentsIcon className='h-5 w-5 text-gray-600' />
                <span className=''>Filter</span>
            </div>
        </div>
    )
}

export default NavTab