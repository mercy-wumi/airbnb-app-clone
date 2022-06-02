import React, { useState } from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import FinishSignup from './FinishSignup'

const OTPcode = ({ openOTP, setOpenOTP, setLogin, otp, handleOTP, finishSignup, setFinishSignup }) => {
    const handleBack = () => {
        setOpenOTP(false)
        setLogin(true)
    }
    return (
        <>
            <div className={`${openOTP ? 'block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed`}>
                <div className='w-2/3 lg:w-1/3 relative bg-white text-black h-auto rounded-xl'>
                    <div className='px-4 flex font-bold h-16 items-center border-b-[1px] fixed w-2/3 lg:w-1/3 bg-white rounded-t-xl'>
                        <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center'><ChevronLeftIcon className='h-5 w-5' onClick={handleBack} /></div>
                        <span className='ml-28'>Confirm your number</span>
                    </div>
                    <div className='px-4 mt-16 py-8'>
                        <p>Enter the code we sent over SMS to +234 8065980493</p>
                        <input type='number' onChange={handleOTP} value={otp} className='w-full border-[1px] border-gray-400 p-2 my-4 rounded-lg' />
                        <p>Didn't get a code?<span className='underline font-semibold'>More options</span></p>
                    </div>
                </div>
            </div>
            <FinishSignup
                finishSignup={finishSignup}
                setFinishSignup={setFinishSignup}
                setOpenOTP={setOpenOTP}
            />
        </>
    )
}

export default OTPcode