import React from 'react'
import Navbar from '../components/Navbar'
import WishList from '../components/WishList'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

const WishLists = () => {
    const { wishList } = useSelector((store) => store.likes)
    console.log(wishList)
    return (
        <>
            <Navbar />
            {wishList.length > 0 ?
                <div className='pt-24 md:pt-28 px-8 md:px-12 lg:px-16 pb-16'>
                    {wishList.map((likes) => { return (<WishList likes={likes} />) })}
                </div>
                :
                <div className='pt-24 md:pt-28 px-8 md:px-12 lg:px-16 pb-16 text-center text-gray-800'>No Room added yet..</div>
            }
            <Footer />
        </>
    )
}

export default WishLists