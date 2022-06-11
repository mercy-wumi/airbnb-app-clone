import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const ImgSlider = ({ img }) => {
    return (
        <Swiper
            //   spaceBetween={50}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {img.map((slideImg, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img src={slideImg} alt='house-pix' className='rounded-xl object-cover w-full h-64' />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}

export default ImgSlider
