import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import UploadProfile from './UploadProfile'

import { setUser, selectUser } from '../features/authUser/userSlice'
import { closeBio } from '../features/modal/modalSlice'

import { useDispatch, useSelector } from 'react-redux'


const FinishSignup = ({ setOpenOPT }) => {

    const { addBio } = useSelector((store) => store.modal)

    const userInfo = useSelector(selectUser);
    console.log("userInfo", userInfo);


    const dispatch = useDispatch();
    const [upload, setUpload] = useState(false)
    const [user, setUsers] = useState({
        firstname: '',
        lastname: '',
        email: '',
        dateofbirth: '',
        // imgUrl: null
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUsers({ ...user, [name]: value })
    }
    const handleBackOTP = () => {
        // setFinishSignup(false)
        dispatch(closeBio())
        setOpenOPT(true)
    }
    const continueToUpload = () => {
        dispatch(setUser(user))
        console.log(user)
        dispatch(closeBio())
        setUpload(true)
    }

    return (
        <>
            <div className={`${addBio ? ' block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed left-0`}>
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
                                <input type='text' placeholder='First name' className='outline-0' name='firstname' onChange={handleChange} />
                            </div>
                            <div className='flex flex-col border-[1px] rounded-xl p-2 rounded-t-none'>
                                <input type='text' placeholder='Last name' className='outline-0' name='lastname' onChange={handleChange} />
                            </div>
                            <p className='text-xs py-1'>Make sure it matches the name on your government ID</p>
                        </div>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 mt-2'>
                            <input type='date' placeholder='Birthdate' className='outline-0' name='dateofbirth' onChange={handleChange} />
                        </div>
                        <p className='text-xs py-1'>To signup, you need to be atleast 18.</p>
                        <div className='flex flex-col border-[1px] rounded-xl p-2 mt-2'>
                            <input type='email' placeholder='Email' className='outline-0' name='email' onChange={handleChange} />
                        </div>
                        <p className='text-xs py-1'>We will email you trip confirmations and receipts</p>
                        <button className='w-full text-center rounded-lg bg-gradient-to-r from-red-600 to-pink-600 hover:from-pink-600 hover:to-red-600 font-bold py-3 text-white my-3' onClick={continueToUpload}>Agree and Continue</button>
                    </div>
                </div>
            </div>
            <UploadProfile upload={upload} setUpload={setUpload} user={user} />
        </>
    )
}

export default FinishSignup