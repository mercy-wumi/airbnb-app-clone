import React, { useState } from 'react'
import logo from '../images/airbnb.svg'
import mobileLogo from '../images/airbnb-logo.png'
import { GlobeAltIcon, MenuIcon, SearchIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
import MenuExtra from './MenuExtra';
import NavTab from './NavTab'


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    const style = {
        iconsClass: 'h-5 w-5',
        search: 'bg-red-600 rounded-full p-2'
    }
    return (
        <>
            <MenuExtra open={open} setOpen={setOpen} />
            <nav className='text-gray-600 bg-white fixed w-full z-20 text-[12px] lg:text-base'>
                <div className='flex justify-between h-20 items-center border-b-[1px] px-16'>
                    <div>
                        <img src={logo} alt='airbnb logo' className='hidden lg:block w-28 h-auto object-contain cursor-pointer' />
                        <img src={mobileLogo} alt='airbnb logo' className='lg:hidden w-12 h-auto object-contain cursor-pointer' />
                    </div>
                    <div className='flex rounded-full items-center border-[1px] shadow-md py-[8px] px-2 hover:shadow-lg lg:ml-32'>
                        <p className='px-4 font-semibold'>Anywhere</p>
                        <p className='px-4 border-y-0 border-x-[1px] font-semibold'>Any week</p>
                        <p className='px-4'>Add guests</p>
                        <div className='rounded-full flex items-center bg-red-500 '><SearchIcon className='h-4 w-4 text-white m-2' /></div>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='font-semibold hover:bg-gray-100 py-2 px-4 rounded-full border-0 cursor-pointer'>Become a Host</span>
                        <div className='hover:bg-gray-100 rounded-full border-0 lg:mr-2 cursor-pointer'><GlobeAltIcon className={`m-3 ${style.iconsClass}`} /></div>
                        <div className='flex rounded-3xl justify-between items-center border-2 p-0.5 hover:shadow-md' onClick={handleOpen}>
                            <MenuIcon className={`mx-2 ${style.iconsClass}`} />
                            <UserCircleIcon className='h-9 w-9' />
                        </div>
                    </div>
                </div>
                {/* <NavTab /> */}
            </nav>
        </>
    )
}
