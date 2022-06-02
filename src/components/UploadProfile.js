import React from 'react'
import { ChevronLeftIcon, UserCircleIcon } from '@heroicons/react/outline'

const UploadProfile = ({ upload, setUpload, setFinishSignup }) => {
    const handleBack = () => {
        setUpload(false)
        setFinishSignup(true)
    }
    return (
        <div className={`${upload ? 'block' : 'hidden'} w-screen h-screen bg-black/[.5] flex items-center justify-center z-50 fixed`}>
            <div className='w-2/3 lg:w-1/3 relative bg-white text-black h-auto rounded-xl'>
                <div className='px-4 flex font-bold h-16 items-center justify-between border-b-[1px] fixed w-2/3 lg:w-1/3 bg-white rounded-t-xl'>
                    <div className='hover:bg-gray-100 rounded-full border-0 cursor-pointer w-8 h-8 flex items-center justify-center'><ChevronLeftIcon className='h-5 w-5' onClick={handleBack} /></div>
                    <span>Create your profile</span>
                    <span></span>
                </div>
                <div className='px-4 mt-16 py-8'>
                    <p className='text-center font-semibold text-xl'>Add a profile photo</p>
                    <div className='flex items-center w-full'>
                        {/* <img src='' alt='profile picture' className='w-1/2 rounded-full' /> */}
                        <UserCircleIcon className='w-1/2 m-auto' />
                    </div>
                    <input type='file' className=' w-full flex justify-center items-center bg-black text-white rounded-xl' />
                </div>
            </div>
        </div>
    )
}

export default UploadProfile