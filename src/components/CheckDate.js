import React from 'react'
import { StarIcon } from '@heroicons/react/solid'

const CheckDate = ({ fixed }) => {
    return (
        <div className={`${fixed ? 'checkDate' : ''} hidden md:block w-10/12 ml-auto p-6 my-6 shadow-2xl rounded-xl`}>
            <div className='text-lg flex flex-wrap justify-between items-center font-semibold mb-4'>
                <div className='flex'>
                    <span className='text-2xl mr-2'>$600</span>
                    <span className='font-normal'>night</span>
                </div>
                <div className='flex'>
                    <div className='flex items-center'><StarIcon className='w-5 h-5' /><span>4.96</span></div>
                    <div className='flex'><span className='px-2'>&middot;</span><span className='underline cursor-pointer'>67 reviews</span></div>
                </div>
            </div>
            <div className='my-2'>
                <div className='flex border-[1px] rounded-xl rounded-b-none'>
                    <div className='flex flex-col p-2 w-1/2'>
                        <span className='text-gray-600 font-semibold'>check-in</span>
                        <input type='date' placeholder='Add date' className='outline-0' />
                    </div>
                    <div className='flex w-1/2 flex-col p-2 border-0 border-l-[1px]'>
                        <span className='text-gray-600 font-semibold'>check-in</span>
                        <input type='date' placeholder='Add date' className='outline-0' />
                    </div>
                </div>
                <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-t-none'>
                    <span className='text-gray-600 font-semibold'>Guests</span>
                    <select className='outline-0'>
                        <option>1 guest</option>
                        <option>2 guest</option>
                        <option>3 guest</option>
                    </select>                </div>
                <button className='w-full text-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-red-600 font-bold py-3 text-white my-3'>Check availability</button>
            </div>
        </div>
    )
}

export default CheckDate