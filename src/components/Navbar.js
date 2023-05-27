import React, { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import logo from '../images/airbnb.svg'
import mobileLogo from '../images/airbnb-logo.png'
import { GlobeAltIcon, MenuIcon, SearchIcon, AdjustmentsIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'
// import { useSelector } from 'react-redux'
import MenuExtra from './MenuExtra';
import { doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from '../firebase'

import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { setAirbnbUser, setUserId } from '../features/authUser/userSlice'


// import NavTab from './NavTab'


export default function Navbar() {

    const dispatch = useDispatch()

    const { imgUrl, userId, airbnbUser } = useSelector((store) => store.user)
    let showMenuRef = useRef()
    let btnMenu = useRef()
    const [open, setOpen] = useState(false)
    const [photoURL, setPhotoURL] = useState(null)
    useEffect(() => {
        let handler = (e) => {
            if (showMenuRef.current && !showMenuRef.current.contains(e.target) && !btnMenu.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                // user is logged in
                console.log(authUser)
                dispatch(setUserId(authUser.uid));
                dispatch(setAirbnbUser(authUser));
            }
            // else {
            //     // user logs out
            //     dispatch(setAirbnbUser(null))
            // }
        })

        return () => {
            unsubscribe();
        }
    }, [dispatch])

    useEffect(() => {
        if (airbnbUser?.photoURL) {
            setPhotoURL(airbnbUser.photoURL)
        }
    }, [airbnbUser])

    const getUser = async () => {
        const userData = (collection(db, 'user-details', userId))
        const docSnap = await getDoc(userData)

        if (docSnap.exists()) {
            console.log(docSnap.data())
        } else {
            console.log("No such document!")
        }
    }

    // const getUser = async () => {

    // here I supplied a doc id manually to fetch an individual user data but I want to be able to look
    // through the whole database and select the document that contains a supplied user id.

    //     const docRef = doc(db, "user-details", 'PeSRHhTJ7ehYAYOwfVFI')
    //     const docSnap = await getDoc(docRef)

    //     if (docSnap.exists()) {
    //         console.log(docSnap.data())
    //     } else {
    //         console.log("No such document!")
    //     }
    // }


    useEffect(() => {
        if (airbnbUser) {
            getUser()
            console.log('we have a user')
        }
        else {
            console.log('no user')
        }
    }, [])

    const handleOpen = () => {
        setOpen(!open)
    }
    const style = {
        iconsClass: 'h-5 w-5',
    }
    return (
        <>
            <MenuExtra open={open} setOpen={setOpen} showMenuRef={showMenuRef} />
            <nav className='text-gray-600 bg-white fixed w-screen left-0 z-20 text-[12px] lg:text-base border-b-[1px]'>
                <div className='hidden md:flex justify-between h-20 items-center md:px-10 lg:px-16 max-w-[1400px] mx-auto'>
                    <div className='hidden md:block'>
                        <Link to='/'>
                            <img src={logo} alt='airbnb logo' className='hidden lg:block w-28 h-auto object-contain cursor-pointer' />
                            <img src={mobileLogo} alt='airbnb logo' className='lg:hidden w-10 h-auto object-contain cursor-pointer' />
                        </Link>
                    </div>
                    <div className='hidden md:flex rounded-full items-center border-[1px] shadow-md py-[8px] px-2 hover:shadow-lg lg:ml-32'>
                        <p className='px-4 font-semibold'>Anywhere</p>
                        <p className='px-4 border-y-0 border-x-[1px] font-semibold'>Any week</p>
                        <p className='px-4'>Add guests</p>
                        <div className='rounded-full flex items-center bg-red-500 '><SearchIcon className='h-4 w-4 text-white m-2' /></div>
                    </div>
                    <div className='md:flex justify-between items-center hidden'>
                        <span className='font-semibold hover:bg-gray-100 py-2 px-4 rounded-full border-0 cursor-pointer'>Become a Host</span>
                        <div className='hover:bg-gray-100 rounded-full border-0 lg:mr-2 cursor-pointer'><GlobeAltIcon className={`m-3 ${style.iconsClass}`} /></div>
                        <div className='flex rounded-3xl justify-between items-center border-2 p-0.5 hover:shadow-md' ref={btnMenu} onClick={handleOpen}>
                            <MenuIcon className={`mx-2 ${style.iconsClass}`} />
                            <div className='w-1/2 mx-auto'>
                                {photoURL ? <img src={photoURL} alt='profile img' className='w-8 h-8 rounded-full object-cover' />
                                    : <UserCircleIcon className='h-9 w-9' />}
                            </div>
                            {/* {imgUrl && <img src={imgUrl} alt='profile picture' className='w-1/2' />}
                            <UserCircleIcon className='h-9 w-9' /> */}
                        </div>
                    </div>
                </div>
                <div className='flex justify-between font-semibold items-center md:hidden rounded-full text-base my-4 w-10/12 m-auto border-[1px] shadow-md py-[8px] px-2 hover:shadow-lg'>
                    <div className='flex items-center'>
                        <SearchIcon className='h-4 w-4 mr-4 ml-2' />
                        <p>Where to?</p>
                    </div>
                    <div className='rounded-full flex items-center border-[1px] border-gray-100'><AdjustmentsIcon className='h-4 w-4 m-2' /></div>
                </div>
                {/* <NavTab /> */}
            </nav>
        </>
    )
}
