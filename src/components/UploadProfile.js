import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storage, db } from '../firebase'
import { useSelector, useDispatch } from 'react-redux'
import { collection, addDoc, doc, setDoc } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { ChevronLeftIcon, UserCircleIcon } from '@heroicons/react/outline'
import { openBio } from '../features/modal/modalSlice'
import { setImageUrl } from '../features/authUser/userSlice'

const UploadProfile = ({ upload, setUpload, user, }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { firstname, lastname, dateofbirth, email, userId } = useSelector((store) => store.user)
    const [imgUrl, setImgUrl] = useState('')
    const handleBack = () => {
        setUpload(false)
        dispatch(openBio())
    }
    const handleImgChange = (e) => {
        if (e.target.files[0]) {
            setImgUrl(e.target.files[0])
        }
        console.log(imgUrl)
    }
    const handleImageUpload = (e) => {
        if (!imgUrl) {
            alert("Please choose a file first!")
            return
        }

        addDoc(collection(db, 'user-details'), {
            userId: userId,
            firstname: firstname,
            lastname: lastname,
            email: email,
            dateofbirth: dateofbirth
        }).then(res => {
            if (imgUrl) {
                const storageRef = ref(storage, `images/${imgUrl.name}`);
                const uploadTask = uploadBytesResumable(storageRef, imgUrl);

                uploadTask.on(
                    'state_change',
                    null,
                    (error) => console.log(error),
                    () => {
                        getDownloadURL(storageRef)
                            .then(url => {
                                const addImg = doc(db, 'user-details', res.id);
                                setDoc(addImg, { imgUrl: url }, { merge: true });

                                // const addImg = doc(db, 'user-details', userId);
                                // updateDoc(addImg, { imgUrl: url });
                                dispatch(setImageUrl(url))
                                console.log(user)
                                setUpload(false)
                                navigate('/')
                            })
                    })
            }
        })
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
                    <div className='flex items-center justify-center w-1/2 mx-auto'>
                        {imgUrl ? <img src={URL.createObjectURL(imgUrl)} alt='profile img' className='w-32 h-32 rounded-full object-cover' />
                            : <UserCircleIcon className='w-full h-auto' />}
                    </div>
                    <input type='file' accept="image/*" name='upload' onChange={handleImgChange} className=' w-full flex justify-center items-center bg-black text-white rounded-xl border-0' />
                    <button className='px-2 bg-black text-white rounded-lg block' onClick={handleImageUpload}>upload</button>
                </div>
            </div>
        </div>
    )
}

export default UploadProfile