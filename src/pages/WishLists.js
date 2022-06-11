import React from 'react'
import Navbar from '../components/Navbar'
import WishList from '../components/WishList'
import Footer from '../components/Footer'


const WishLists = () => {
    return (
        <>
            <Navbar />
            <div className='pt-24 md:pt-28 px-8 md:px-12 lg:px-16 pb-16'>
                <WishList />
                <WishList />
                <WishList />
            </div>
            <Footer />
        </>
    )
}

export default WishLists