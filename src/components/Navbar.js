import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className='w-full flex'>
                <div>
                    <img src='' alt='airbnb logo' />
                </div>
                <ul className='flex'>
                    <li>Places to stay</li>
                    <li>Experiences</li>
                    <li>Online Experiences</li>
                </ul>
                <div className='flex'>
                    <span>Become a Host</span>
                    <img src='' alt='internet icon' />
                    <div className='flex'>
                        <img src='' alt='internet icon' />
                        <img src='' alt='internet icon' />
                    </div>
                </div>
            </nav>
            <div>
                <div>
                    <p>Location</p>
                    <span>Where are you going?</span>
                </div>
            </div>
        </>
    )
}
