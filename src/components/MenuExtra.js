import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModal from './LoginModal'
import { setLogin } from '../features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, signOut } from '../firebase'

const MenuExtra = ({ open, setOpen }) => {

    const { airbnbUser } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    // const [login, setLogin] = useState(false)
    const handleLogin = () => {
        dispatch(setLogin())
        setOpen(false)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            console.log('Sign-out successful');
        }).catch((error) => {
            console.log('An error happened')
        });
    }
    const style = {
        list: 'py-2 px-4 hover:bg-gray-100 text-base'
    }
    return (
        <>
            <div className={`${open ? 'block' : 'hidden'} fixed w-64 top-16 mt-2 right-16 h-auto py-4 text-gray-900 rounded-xl bg-white shadow-2xl z-40`}>
                <div>
                    <ul className='list-none'>
                        <li className={`font-semibold ${style.list} hover:cursor-pointer`} onClick={handleLogin}>Sign up</li>
                        <li className={`${style.list} hover:cursor-pointer`} onClick={handleLogin}>Log in</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <ul>
                        <li className={`${style.list} hover:cursor-default`}>Host your home</li>
                        {airbnbUser && <Link to='/wishlists'><li className={`${style.list} hover:cursor-pointer`}>WishLists</li></Link>}
                        <li className={`${style.list} hover:cursor-default`} disabled>Host an experience</li>
                        <li className={`${style.list} hover:cursor-default`}>Help</li>
                        {airbnbUser && <li className={`${style.list} hover:cursor-pointer`} onClick={handleLogout}>Logout</li>}
                    </ul>
                </div>
            </div>
            <LoginModal />
        </>
    )
}

export default MenuExtra