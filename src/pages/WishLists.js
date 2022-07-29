import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import WishList from '../components/WishList'
import Footer from '../components/Footer'
import { auth } from "../firebase";
import { useSelector, useDispatch } from 'react-redux'
import { setAirbnbUser, setUserId } from '../features/authUser/userSlice'

const WishLists = () => {
    const { wishList } = useSelector((store) => store.likes)
    // const { airbnbUser } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    console.log(wishList)
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                console.log(authUser)
                dispatch(setUserId(authUser.uid));
                dispatch(setAirbnbUser(authUser));
            }
            else {
                // user logs out
                dispatch(setAirbnbUser(null))
            }
        })

        return () => {
            unsubscribe();
        }
    })

    // }, [airbnbUser])
    return (
        <div>
            <Navbar />
            {wishList.length > 0 ?
                <div className='pt-24 md:pt-28 px-8 md:px-12 lg:px-16 pb-16'>
                    {wishList.map((likes) => { return (<WishList likes={likes} />) })}
                </div>
                :
                <div className='pt-24 md:pt-28 px-8 md:px-12 lg:px-16 pb-16 text-center text-gray-800'>No Room added yet..</div>
            }
            <Footer />
        </div>
    )
}

export default WishLists