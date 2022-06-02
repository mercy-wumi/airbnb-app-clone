import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterMenu from './FooterMenu'
import { StarIcon } from '@heroicons/react/solid'
import { HeartIcon, ClipboardCheckIcon } from '@heroicons/react/outline'

import ib from '../images/ib.jpg'
import benin from '../images/benin.jpg'
import ikeja from '../images/ikeja.jpg'
import ph from '../images/ph.jpg'
import CheckDate from './CheckDate'
import Bedroom from './Bedroom'
import Heading from './Heading'

const Rooms = () => {
    const [fixed, setFixed] = useState(false)
    const style = {
        borderSection: 'py-8 border-0 border-y-[1px] border-gray-300'
    }
    const togglePosition = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 500) {
            setFixed(true)
        } else if (scrolled <= 500) {
            setFixed(false)
        }
    }
    window.addEventListener('scroll', togglePosition)
    return (
        <>
            <Navbar />
            <div className='px-24 relative pt-20'>
                <div className='py-6'>
                    <p className='text-3xl font-semibold'>Villa Vista Mirissa by The Serendipity Collection</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex mt-2 font-semibold'>
                            <div className='flex'><StarIcon className='w-5 h-5' /><span>4.96</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='underline cursor-pointer'>67 reviews</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='underline cursor-pointer'>Mirissa,Southern Province, Sri Lanka</span></div>
                        </div>
                        <div className='flex'>
                            <HeartIcon />
                            <span className='h-5 w-5'>Save</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='w-1/2 mr-2'>
                        <img src={ib} alt='room display' />
                    </div>
                    <div className='w-1/2 lg:grid hidden lg:grid-cols-2 gap-2'>
                        <img src={ph} alt='room display' />
                        <img src={ikeja} alt='room display' />
                        <img src={benin} alt='room display' />
                        <img src={ib} alt='room display' />
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-7/12 py-6 relative'>
                        {/* <p className='text-2xl font-semibold'>Entire Villa hosted by The Serendipity Collection</p> */}
                        <Heading title='Entire Villa hosted by The Serendipity Collection' />
                        <div className='flex mt-2 mb-6'>
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
                            <a href='#' className='underline font-semibold'>Learn more</a>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <p className='py-4'>Modern Clifftop 3 Bedroom villa located at the southern end of Weligama bay with direct access to a semi private bay. Designed by world renowned Pritzker prize winning, Japanese architect Shigeru Ban, features infinity pool, cliff edge summer hut, large 8 acre garden. Very private and stunning views</p>
                            <p className='font-semibold pb-2'>The space...</p>
                            <a href='#' className='underline font-semibold'>Learn more</a>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <Heading title="Where you'll sleep" />
                            <div className='lg:grid grid-cols-3 gap-6 mt-6'>
                                <Bedroom title='Bedroom 1' subtitle='1 king bed' />
                                <Bedroom title='Bedroom 2' subtitle='1 queen bed' />
                                <Bedroom title='Bedroom 3' subtitle='1 queen bed, 1 single bed' />
                            </div>
                        </div>
                        <div className={`${style.borderSection} text-lg`}>
                            <Heading title="what this place offers" />
                            <div className='flex items-center'>
                                <div className='py-6 w-1/2'>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Garden view</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Beach access-Beachfront</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Wifi</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Free parking on premises</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4 line-through'>Carbon monoxide alarm</span></div>
                                </div>
                                <div className='py-6 w-1/2'>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Ocean view</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Kitchen</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Dedicated workspace</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4'>Security cameras on property</span></div>
                                    <div className='flex items-center mb-4'><ClipboardCheckIcon className='h-10 w-10' /><span className='ml-4 line-through'>Smoke alarm</span></div>
                                </div>
                            </div>
                            <button className='border-[1px] border-black px-6 py-3 font-semibold rounded-xl'>Show all 74 amenties</button>
                        </div>
                    </div>
                    <div className='w-5/12'>
                        <CheckDate fixed={fixed} />
                    </div>
                </div>
            </div>
            <FooterMenu />
            <Footer />
        </>
    )
}

export default Rooms