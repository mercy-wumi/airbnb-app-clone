import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/outline'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../firebase'
import OTPcode from './OTPcode';

const LoginModal = ({ login, setLogin }) => {
    const [phone, setPhone] = useState('')
    const [openOTP, setOpenOTP] = useState(false)

    const handleLoginClose = () => {
        setLogin(false)
    }

    const generateRecaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
        }, auth);
    }

    const signup = () => {

        generateRecaptcha()
        let appVerifier = window.recaptchaVerifier
        signInWithPhoneNumber(auth, phone, appVerifier)
            .then(confirmationResult => {
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                // Error; SMS not sent
                console.log(error)
            });
        setLogin(false)
        setOpenOTP(true)
    }
    const style = {
        Loginbtn: 'w-full text-center rounded-lg hover:bg-gray-100 font-normal py-3 mt-3 border-[1px] border-black'
    }
    return (
        <>
            <div className={`${login ? ' block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed`}>
                <div className='w-9/12 lg:w-5/12 relative h-5/6 bg-white text-black rounded-xl overflow-auto'>
                    <div className='px-4 flex font-bold h-16 justify-start items-center border-b-[1px] fixed w-9/12 lg:w-5/12 bg-white rounded-t-xl'>
                        <div className='flex justify-start w-8/12'>
                            <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center mr-auto'><XIcon className='h-5 w-5' onClick={handleLoginClose} /></div>
                            <span className='mr-4'>Log in or sign up</span>
                        </div>
                    </div>
                    <div className='px-4 mt-16'>
                        <p className='py-6 text-2xl font-semibold'>Welcome to Airbnb</p>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-b-none'>
                            <span className='text-gray-600'>Country/Region</span>
                            <select className='outline-0'>
                                <option>United States (+1)</option>
                                <option>Nigeria (+234)</option>
                                <option>Ghana (+233)</option>
                            </select>
                        </div>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-t-none'>
                            <span className='text-gray-600'>Phone Number</span>
                            <input type='text' placeholder='(+234)' className='outline-0' value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </div>
                        <p className='text-xs py-1'>We’ll call or text you to confirm your number. Standard message and data rates apply. <br /><a href='#' className='underline'>Privacy Policy</a></p>
                        <button className='w-full text-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-red-600 font-bold py-3 text-white my-3' onClick={signup}>Continue</button>
                    </div>
                    <div className='flex flex-col p-4'>
                        {/* <button className={style.Loginbtn}>Continue with Facebook</button> */}
                        <button className={style.Loginbtn}>Continue with Google</button>
                        {/* <button className={style.Loginbtn}>Continue with Apple</button>
                    <button className={style.Loginbtn}>Continue with email</button> */}
                    </div>
                    <div id='recaptcha-container'></div>
                </div>
            </div>
            <OTPcode openOTP={openOTP} setOpenOTP={setOpenOTP} setLogin={setLogin} />
        </>
    )
}

export default LoginModal