import React from 'react'
import { XIcon } from '@heroicons/react/outline'


const FooterMenu = ({ openFooterMenu, setOpenFooterMenu }) => {
    const style = {
        footerMenu: 'block pt-3 hover:underline',
        borderBtm: 'pt-4 pb-6 border-0 border-b-[1px] border-gray-300'
    }
    const handleClose = () => {
        setOpenFooterMenu(false)
    }
    return (
        <div className={`${openFooterMenu ? 'block' : 'hidden'} pt-4 pb-16 fixed bottom-0 border-t-[1px] rounded-t-3xl z-20 text-gray-600 text-[14.3px] bg-white w-full`}>
            <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer ml-4 w-8 h-8 flex items-center justify-center'><XIcon className='h-5 w-5' onClick={handleClose} /></div>
            <div className='md:block lg:grid grid-cols-4 w-full px-8 lg:px-16'>
                <div className={`md:${style.borderBtm} lg:border-b-0`}>
                    <span className={`${style.footerMenu} font-bold hover:no-underline`}>Support</span>
                    <div className='md:grid md:grid-cols-3 lg:block'>
                        <span className={style.footerMenu}>Help Center</span>
                        <span className={style.footerMenu}>AirCover</span>
                        <span className={style.footerMenu}>Safety information</span>
                        <span className={style.footerMenu}>Supporting people with disabilities</span>
                        <span className={style.footerMenu}>Cancellation options</span>
                        <span className={style.footerMenu}>Our COVID-19 Response</span>
                        <span className={style.footerMenu}>Report a neighborhood concern</span>
                    </div>
                </div>
                <div className={`md:${style.borderBtm} lg:border-b-0`}>
                    <span className={`${style.footerMenu} font-bold hover:no-underline`}>Community</span>
                    <div className='md:grid md:grid-cols-3 lg:block'>
                        <span className={style.footerMenu}>Airbnb.org: disaster relief housing</span>
                        <span className={style.footerMenu}>Support Afghan refugees</span>
                        <span className={style.footerMenu}>Combating discrimination</span>
                    </div>
                </div>
                <div className={`md:${style.borderBtm} lg:border-b-0`}>
                    <span className={`${style.footerMenu} font-bold hover:no-underline`}>Hosting</span>
                    <div className='md:grid md:grid-cols-3 lg:block'>
                        <span className={style.footerMenu}>Try hosting</span>
                        <span className={style.footerMenu}>AirCover for Hosts</span>
                        <span className={style.footerMenu}>Explore hosting resources</span>
                        <span className={style.footerMenu}>Visit our community forum</span>
                        <span className={style.footerMenu}>How to host responsibly</span>
                    </div>
                </div>
                <div>
                    <span className={`${style.footerMenu} font-bold hover:no-underline`}>About</span>
                    <div className='md:grid md:grid-cols-3 lg:block'>
                        <span className={style.footerMenu}>Newsroom</span>
                        <span className={style.footerMenu}>Learn about new features</span>
                        <span className={style.footerMenu}>Letter from our founders</span>
                        <span className={style.footerMenu}>Careers</span>
                        <span className={style.footerMenu}>Investors</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu