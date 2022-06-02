import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setValue } from '../features/authUser/userSlice'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import UploadProfile from './UploadProfile'

const FinishSignup = ({ finishSignup, setFinishSignup, setOpenOPT }) => {

    const [upload, setUpload] = useState(false)

    const dispatch = useDispatch();
    const { firstname, lastname, email, dob } = useSelector((store) => store.user)

    const handleBackOTP = () => {
        setFinishSignup(false)
        setOpenOPT(true)
    }
    const continueToUpload = () => {
        setFinishSignup(false)
        setUpload(true)
    }

    return (
        <>
            <div className={`${finishSignup ? ' block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed`}>
                <div className='w-9/12 lg:w-5/12 relative h-auto bg-white text-black rounded-xl overflow-auto'>
                    <div className='px-4 flex font-bold h-16 justify-start items-center border-b-[1px] fixed w-9/12 lg:w-5/12 bg-white rounded-t-xl'>
                        <div className='flex justify-start w-8/12'>
                            <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center mr-auto'><ChevronLeftIcon className='h-5 w-5' onClick={handleBackOTP} /></div>
                            <span className='mr-4'>Finish signing up</span>
                        </div>
                    </div>
                    <div className='p-4'>
                        <div className='mt-16'>
                            <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-b-none'>
                                <input type='text' placeholder='First name' className='outline-0' value={firstname} onChange={(e) => dispatch(setValue(e.target.value))} />
                            </div>
                            <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-t-none'>
                                <input type='text' placeholder='Last name' className='outline-0' value={lastname} onChange={(e) => dispatch(setValue(e.target.value))} />
                            </div>
                            <p className='text-xs py-1'>Make sure it matches the name on your government ID</p>
                        </div>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 mt-2'>
                            <input type='date' placeholder='Birthdate' className='outline-0' value={dob} onChange={(e) => dispatch(setValue(e.target.value))} />
                        </div>
                        <p className='text-xs py-1'>To signup, you need to be atleast 18.</p>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 mt-2'>
                            <input type='email' placeholder='Email' className='outline-0' value={email} onChange={(e) => dispatch(setValue(e.target.value))} />
                        </div>
                        <p className='text-xs py-1'>We will email you trip confirmations and receipts</p>
                        <button className='w-full text-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-red-600 font-bold py-3 text-white my-3' onClick={continueToUpload}>Agree and Continue</button>
                    </div>
                </div>
            </div>
            <UploadProfile upload={upload} setUpload={setUpload} setFinishSignup={setFinishSignup} />
        </>
    )
}

export default FinishSignup