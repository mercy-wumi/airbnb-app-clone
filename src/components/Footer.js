import { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import FooterMenu from './FooterMenu'
import { openBio } from '../features/modal/modalSlice'
import { ChevronUpIcon, GlobeAltIcon, SearchIcon, HeartIcon, UserCircleIcon } from '@heroicons/react/outline'

const Footer = () => {
    const dispatch = useDispatch()
    // const { active, setActive } = useSelector((store) => store.home)
    const [openFooterMenu, setOpenFooterMenu] = useState(false)
    const [active, setActive] = useState('main')

    const handleOpenLogin = () => {
        dispatch(openBio())
    }

    const handleExplore = () => {
        setActive('main')
        if (active === 'main') {
            <Navigate to="/" replace={true} />
        }
    }
    const handleWishlist = () => {
        setActive('wishlist')
        console.log(active)
    }
    const style = {
        activeMenu: 'text-pink-600'
    }

    const handleOpen = () => {
        setOpenFooterMenu(true)
    }
    return (
        <div className='w-full'>
            <footer className={`${openFooterMenu ? 'hidden' : 'none'} hidden md:flex justify-between items-center w-full md:px-10 lg:px-16 fixed bottom-0 border-t-[1px] h-12 z-20 bg-white text-gray-600 text-[12px] lg:text-[14.5px]`}>
                <div className='flex items-center flex-wrap w-1/2'>
                    <span>© {(new Date().getFullYear())} Airbnb, inc.</span>
                    <div className='flex'><span className='px-2'>&middot;</span><span className='hover:underline cursor-pointer'>Privacy</span></div>
                    <div className='flex'><span className='px-2'>&middot;</span><span className='hover:underline cursor-pointer'>Terms</span></div>
                    <div className='flex'><span className='px-2'>&middot;</span><span className='hover:underline cursor-pointer'>Sitemap</span></div>
                    <div className='flex'><span className='px-2'>&middot;</span><span className='hover:underline cursor-pointer'>Destinations</span></div>
                </div>
                <div className='flex justify-end items-center font-semibold w-1/2'>
                    <div className='flex items-center'>
                        <GlobeAltIcon className='h-5 w-5 mr-2' />
                        <span className='hover:underline cursor-pointer'>English (US)</span>
                    </div>
                    <div className='px-4'>
                        <span className='mr-2'>$</span>
                        <span className='hover:underline cursor-pointer'>USD</span>
                    </div>
                    <span className='hover:underline cursor-pointer'>Support & resources</span>
                    <ChevronUpIcon className='h-4 w-4 ml-2 cursor-pointer' onClick={handleOpen} />
                </div>
            </footer>
            <footer className='md:hidden flex justify-center items-center w-full px-16 fixed bottom-0 border-t-[1px] h-16 z-20 bg-white text-gray-600 text-[12px]'>
                <div className='flex flex-col items-center font-semibold mr-9' onClick={handleExplore}>
                    <SearchIcon className={`${active === 'main' ? style.activeMenu : ''} h-7 w-7`} />
                    <span>Explore</span>
                </div>
                <Link to='/wishlists' onClick={handleWishlist}>
                    <div className='flex flex-col items-center mr-9'>
                        <HeartIcon className={`${active === 'wishlist' ? style.activeMenu : ''} h-7 w-7`} />
                        <span>Wishlists</span>
                    </div>
                </Link>
                <div className='flex flex-col items-center' onClick={handleOpenLogin}>
                    <UserCircleIcon className='h-7 w-7' />
                    <span>Log in</span>
                </div>
            </footer>
            <FooterMenu openFooterMenu={openFooterMenu} setOpenFooterMenu={setOpenFooterMenu} />
        </div>
    )
}

export default Footer