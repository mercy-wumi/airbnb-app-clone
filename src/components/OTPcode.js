import React, { useState, useEffect } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'
// import FinishSignup from './FinishSignup'
import UploadProfile from './UploadProfile'
import { useSelector, useDispatch } from 'react-redux'
import { setLogin, openBio } from '../features/modal/modalSlice'
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase";
import { setAirbnbUser, setResgisteredUser } from '../features/authUser/userSlice'

const OTPcode = ({ openOTP, setOpenOTP, phone }) => {
    const { registeredUser } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [otp, setOtp] = useState('')
    const [upload, setUpload] = useState(false)

    // const [finishSignup, setFinishSignup] = useState(false)

    const handleBack = () => {
        setOpenOTP(false)
        dispatch(setLogin())
    }

    const handleOTP = (e) => {
        setOtp(e.target.value)
        console.log(otp)
    }

    const verifyOTP = () => {
        if (otp === "" || otp === null) return;
        if (otp.length === 6) {
            console.log(otp)
            console.log('still working...')
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                console.log(result)

                if (registeredUser) {
                    console.log(registeredUser)
                    console.log('going to homepage')
                    console.log('go to home')
                    navigate('/', { replace: true })
                    setOpenOTP(false)
                    return
                }
                else {
                    dispatch(setResgisteredUser())
                    console.log(registeredUser)
                    console.log('showing upload image')
                    setUpload(true)
                    setOpenOTP(false)
                }
                // ...
            }).catch((error) => {
                // User couldn't sign in (bad verification code?)
                // ...
                console.log(error)
            });
        }
    }
    return (
        <>
            <div className={`${openOTP ? 'block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed left-0`}>
                <div className='w-2/3 lg:w-1/3 relative bg-white text-black h-auto rounded-xl'>
                    <div className='px-4 flex justify-between font-bold h-16 items-center border-b-[1px] fixed w-2/3 lg:w-1/3 bg-white rounded-t-xl'>
                        <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center'><ChevronLeftIcon className='h-5 w-5' onClick={handleBack} /></div>
                        <span>Confirm your number</span>
                        <span></span>
                    </div>
                    <div className='px-4 mt-16 py-8'>
                        <p>Enter the code we sent over SMS to +234 8065980493</p>
                        <div className='flex my-4'>
                            <input type='number' value={otp} onChange={handleOTP} className='w-full border-[1px] border-gray-400 p-2 rounded-lg' />
                            <button className='rounded-lg bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-red-600 font-bold px-3 ml-1 text-white' onClick={verifyOTP}>Verify</button>
                        </div>
                        <p>Didn't get a code?<span className='underline font-semibold'>More options</span></p>
                    </div>
                </div>
            </div>
            {/* <FinishSignup
                // finishSignup={finishSignup}
                // setFinishSignup={setFinishSignup}
                setOpenOTP={setOpenOTP}
            /> */}
            <UploadProfile setOpenOTP={setOpenOTP} upload={upload} setUpload={setUpload} />
        </>
    )
}

export default OTPcode