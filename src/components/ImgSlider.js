import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import imgOne from '../images/imgOne.jpg'
import imgTwo from '../images/imgTwo.jpg'
import imgThree from '../images/imgThree.jpg'
import imgFour from '../images/imgFour.jpg'
import imgFive from '../images/imgFive.jpg'

const ImgSlider = () => {
    const [images] = useState([imgOne, imgTwo, imgThree, imgFour, imgFive])
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
            {images.map((slideImg, index) => {
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
