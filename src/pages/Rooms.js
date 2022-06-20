import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import FooterMenu from '../components/FooterMenu'
import { StarIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux';
import { HeartIcon, ClipboardCheckIcon, ChevronLeftIcon } from '@heroicons/react/outline'

import 'swiper/css';

import ib from '../images/ib.jpg'
import benin from '../images/benin.jpg'
import ikeja from '../images/ikeja.jpg'
import ph from '../images/ph.jpg'
import CheckDate from '../components/CheckDate'
import Bedroom from '../components/Bedroom'
import Heading from '../components/Heading'

const Rooms = () => {
    const { room } = useSelector(store => store.home)
    const [fixed, setFixed] = useState(false)
    const [like, setLike] = useState(false)
    const [mobWidth, setMobWidth] = useState(window.innerWidth)
    const mobileBreakPoint = 768
    const style = {
        borderSection: ' py-4 md:py-8 border-0 border-y-[1px] border-gray-300'
    }

    const togglePosition = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 500) {
            setFixed(true)
        } else if (scrolled <= 500) {
            setFixed(false)
        }
    }
    console.log(room.img)
    const handleLike = (data) => {
        setLike(!like)
    }

    useEffect(() => {
        window.addEventListener('resize', () => setMobWidth(window.innerWidth))
        console.log(window.innerWidth)
        return () => window.removeEventListener("resize", () => setMobWidth(window.innerWidth));

    }, [])
    window.addEventListener('scroll', togglePosition)

    return (
        <>
            {mobWidth < mobileBreakPoint ?
                <div className='md:hidden'>
                    <div className='flex justify-between items-center p-4'>
                        <div className='flex items-center'>
                            <Link to='/'><div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center'><ChevronLeftIcon className='h-5 w-5' /></div></Link>
                            <div className='flex ml-4'><span>Homes</span><span className='px-2'>&middot;</span><span className='hover:underline cursor-pointer'>Airbnb</span></div>
                        </div>
                        {/* <HeartIcon className='h-5 w-5 mr-2' /> */}
                        <HeartIcon onClick={() => handleLike()} className={`${like ? 'text-red-700' : 'text-gray-700'} h-5 w-5 mr-2`} />

                    </div>
                    <Swiper
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {room.img.map(rooms =>
                            <SwiperSlide>
                                <img src={rooms} alt='room display' className='object-cover w-full h-auto' />
                            </SwiperSlide>
                        )}

                        {/* <SwiperSlide>
                            <img src={ikeja} alt='house-pix' className='object-cover w-full h-auto' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={ph} alt='house-pix' className='object-cover w-full h-auto' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={benin} alt='house-pix' className='object-cover w-full h-auto' />
                        </SwiperSlide> */}
                    </Swiper>
                </div>
                : <Navbar />
            }
            <div className='px-8 md:px-10 lg:px-16 relative md:pt-20'>
                <div className='py-6'>
                    <p className='text-2xl lg:text-3xl font-semibold'>Villa Vista Mirissa by The Serendipity Collection</p>
                    <div className='md:flex justify-between items-center'>
                        <div className='flex mt-2 font-semibold items-center text-[12px] md:text-base'>
                            <div className='flex items-center'><StarIcon className='w-5 h-5' /><span>4.96</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='underline cursor-pointer'>67 reviews</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='underline cursor-pointer'>Mirissa,Southern Province, Sri Lanka</span></div>
                        </div>
                        <div className='hidden md:flex items-center'>
                            {/* <HeartIcon className='h-5 w-5 mr-2' /> */}
                            <HeartIcon onClick={() => handleLike()} className={`${like ? 'text-red-700' : 'text-gray-700'} h-5 w-5 mr-2`} />
                            <span>Save</span>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex'>
                    <div className='w-1/2 mr-2'>
                        <img src={room.img[0]} alt='room display' />
                    </div>
                    <div className='w-1/2 md:grid hidden md:grid-cols-2 gap-2'>
                        {room.img
                            .slice(1, room.img.length)
                            .map(rooms => { return (<img src={rooms} alt='room display' />) })}
                        {/* <img src={ph} alt='room display' />
                        <img src={ikeja} alt='room display' />
                        <img src={benin} alt='room display' />
                        <img src={ib} alt='room display' /> */}
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-full md:w-7/12  py-2 md:py-6 relative'>
                        <p className='hidden md:block text-2xl font-semibold'>Entire Villa hosted by The Serendipity Collection</p>
                        {/* <Heading title='Entire Villa hosted by The Serendipity Collection' /> */}
                        <div className='hidden md:flex mt-2 mb-6'>
                            <div className='flex'><span className='text-lg'>7 guests</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>3 bedrooms</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>4 beds</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>5 baths</span></div>
                        </div>
                        <div className={style.borderSection}>
                            <div className='flex mb-4'>
                                <ClipboardCheckIcon className='h-10 w-10 mr-4' />
                                <div className='text-lg'>
                                    <p className='font-semibold'>Designed by</p>
                                    <span>Shigeru Ban</span>
                                </div>
                            </div>
                            <div className='flex mb-4'>
                                <ClipboardCheckIcon className='h-10 w-10 mr-4' />
                                <div className='text-lg'>
                                    <p className='font-semibold'>Featured in</p>
                                    <span>Architectural Digest, December 2012</span>
                                </div>
                            </div>
                            <div className='flex'>
                                <ClipboardCheckIcon className='h-10 w-10 mr-4' />
                                <div className='text-lg'>
                                    <p className='font-semibold'>Self check-in</p>
                                    <span>You can check in with the doorman</span>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <div className='font-bold text-4xl text-red-600 cursor-none'>air<span className='text-black'>cover</span></div>
                            <p className='py-4'>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                            <a href='/' className='underline font-semibold'>Learn more</a>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <p className='py-4'>Modern Clifftop 3 Bedroom villa located at the southern end of Weligama bay with direct access to a semi private bay. Designed by world renowned Pritzker prize winning, Japanese architect Shigeru Ban, features infinity pool, cliff edge summer hut, large 8 acre garden. Very private and stunning views</p>
                            <p className='font-semibold pb-2'>The space...</p>
                            <a href='/' className='underline font-semibold'>Learn more</a>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <Heading title="Where you'll sleep" />
                            <div className='hidden md:grid lg:grid-cols-3 md:grid-cols-2 gap-3 lg:gap-6 mt-6'>
                                <Bedroom title='Bedroom 1' subtitle='1 king bed' />
                                <Bedroom title='Bedroom 2' subtitle='1 queen bed' />
                                <Bedroom title='Bedroom 3' subtitle='1 queen bed, 1 single bed' />
                            </div>
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                className='mt-4 md:hidden'
                            >
                                <SwiperSlide>
                                    <Bedroom title='Bedroom 1' subtitle='1 king bed' />                                </SwiperSlide>
                                <SwiperSlide>
                                    <Bedroom title='Bedroom 2' subtitle='1 queen bed' />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Bedroom title='Bedroom 3' subtitle='1 queen bed, 1 single bed' />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <Heading title="what this place offers" />
                            <div className='lg:flex items-center'>
                                <div className='lg:py-6 lg:w-1/2'>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Garden view</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Beach access-Beachfront</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Wifi</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Free parking on premises</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4 line-through'>Carbon monoxide alarm</span></div>
                                </div>
                                <div className='lg:py-6 lg:w-1/2'>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Ocean view</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Kitchen</span></div>
                                    {/* <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Dedicated workspace</span></div>
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4'>Security cameras on property</span></div> */}
                                    <div className='flex items-center lg:mb-4 mb-2 text-gray-600'><ClipboardCheckIcon className='h-auto w-10' /><span className='ml-4 line-through'>Smoke alarm</span></div>
                                </div>
                            </div>
                            <button className='border-[1px] border-black px-6  mt-3 mb-12 lg:mt-0 py-3 font-semibold rounded-xl'>Show all 74 amenties</button>
                        </div>
                    </div>
                    <div className='md:w-5/12'>
                        <CheckDate fixed={fixed} />
                    </div>
                </div>
            </div>
            {/* <FooterMenu /> */}
            <Footer />
        </>
    )
}

export default Rooms