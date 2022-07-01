import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HeartIcon, StarIcon } from '@heroicons/react/outline'
import { setWishList, setRemove } from '../features/likes/likeSlice'
import ib from '../images/ib.jpg'

const WishList = ({ likes }) => {
    const dispatch = useDispatch()
    const { wishList } = useSelector((store) => store.likes)

    const handleLike = (id) => {
        console.log(wishList)
        if (wishList.includes(id)) {
            console.log(true)
            console.log(dispatch(setRemove(id)))
            console.log(wishList)
        }
        // else {
        //     dispatch(setWishList(id))
        //     console.log(wishList)
        // }
    }
    return (
        <>
            <div className='md:flex w-full text-gray-800 mb-8 text-sm'>
                <img src={likes.img[0]} alt='experience liked' className='rounded-xl md:w-1/3 xl:w-1/4 h-auto' />
                <div className='flex flex-col justify-between md:ml-4 flex-1 mt-8 md:my-4 my-0'>
                    <div className='flex flex-col'>
                        <div className='flex items-center justify-between'>
                            <div className='flex flex-col'>
                                <span>{likes.name}</span>
                                <span className='font-semibold text-sm md:text-lg lg:text-xl'>{likes.designedBy}</span>
                            </div>
                            <HeartIcon className={`${wishList.includes(likes) ? 'text-pink-600' : 'text-gray-700'} w-7 h-7 hover:cursor-pointer`} key={likes.id} onClick={() => handleLike(likes)} />
                        </div>
                        <div className='hidden md:flex mt-6'>
                            <div className='flex'><span className='text-lg'>4 guests</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>2 bedrooms</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>4 beds</span></div>
                            <div className='flex'><span className='px-2'>&middot;</span><span className='text-lg cursor-pointer'>1 baths</span></div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center flex-wrap'>
                        <div className='flex items-center text-[12px] md:text-base'>
                            <div className='flex items-center font-semibold'><StarIcon className='w-5 h-5 text-pink-600' /><span>{likes.rating}</span></div>
                            <span>(67 reviews)</span>
                        </div>
                        <div className='flex items-center'>
                            <span className='md:text-xl lg:text-2xl font-semibold'>{likes.price}</span>
                            <span>night</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishList