import React from 'react'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'
import ib from '../images/ib.jpg'

const WishList = () => {
    return (
        <div className='flex w-full text-gray-800 mb-8'>
            <img src={ib} alt='experience liked' className='rounded-xl w-1/4 h-auto' />
            <div className='flex flex-col justify-between ml-4 flex-1'>
                <div className='flex flex-col'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <span>Tiny home in Lac-Beauport</span>
                            <span className='font-semibold text-xl'>Le MICA (Chalets Micro-Element) CITQ 303134</span>
                        </div>
                        <HeartIcon className='w-7 h-7 text-pink-600' />
                    </div>
                    <div className='hidden md:flex mt-6'>
                        <div className='flex'><span className='text-lg'>4 guests</span></div>
                        <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>2 bedrooms</span></div>
                        <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>4 beds</span></div>
                        <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>1 baths</span></div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center text-[12px] md:text-base'>
                        <div className='flex items-center font-semibold'><StarIcon className='w-5 h-5 text-pink-600' /><span>4.96</span></div>
                        <span>(67 reviews)</span>
                    </div>
                    <div className='flex items-center'>
                        <span className='text-2xl font-semibold'>$249</span>
                        <span>night</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList