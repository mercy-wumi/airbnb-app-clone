import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginModal from './LoginModal'
import { setLogin } from '../features/modal/modalSlice'
import { setAirbnbUser } from '../features/authUser/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { auth, signOut } from '../firebase'

const MenuExtra = ({ open, setOpen, showMenuRef }) => {

    const { airbnbUser } = useSelector((store) => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const [login, setLogin] = useState(false)
    const handleLogin = () => {
        dispatch(setLogin())
        setOpen(false)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/', { replace: true })
            dispatch(setAirbnbUser(null))
            console.log('Sign-out successful');
        }).catch((error) => {
            console.log(error)
        });
    }
    const style = {
        list: 'py-2 px-4 hover:bg-gray-100 text-base'
    }
    return (
        <>
            <div ref={showMenuRef} className={`${open ? 'block' : 'hidden'} fixed w-64 top-16 mt-2 right-16 h-auto py-4 text-gray-900 rounded-xl bg-white shadow-2xl z-40`}>
                <div>
                    <ul className='list-none'>
                        {!airbnbUser && <li className={`font-semibold ${style.list} hover:cursor-pointer`} onClick={handleLogin}>Sign up</li>}
                        {!airbnbUser && <li className={`${style.list} hover:cursor-pointer`} onClick={handleLogin}>Log in</li>}
                        {airbnbUser && <Link to='/wishlists'><li className={`${style.list} hover:cursor-pointer`}>WishLists</li></Link>}
                    </ul>
                </div>
                <hr />
                <div>
                    <ul>
                        <li className={`${style.list} hover:cursor-default`}>Host your home</li>
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