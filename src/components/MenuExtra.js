import React, { useState } from 'react'
import LoginModal from './LoginModal'

const MenuExtra = ({ open, setOpen }) => {
    const [login, setLogin] = useState(false)
    const handleLogin = () => {
        setLogin(true)
        setOpen(false)
    }
    const style = {
        list: 'py-2 px-4 hover:bg-gray-100 text-base'
    }
    return (
        <>
            <div className={`${open ? 'block' : 'hidden'} fixed w-64 top-16 mt-2 right-16 h-auto py-4 text-gray-900 rounded-xl bg-white shadow-2xl z-40`}>
                <div>
                    <ul className='list-none'>
                        <li className={`font-semibold ${style.list}`} onClick={handleLogin}>Sign up</li>
                        <li className={style.list} onClick={handleLogin}>Log in</li>
                    </ul>
                </div>
                <hr />
                <div>
                    <ul>
                        <li className={style.list}>Host your home</li>
                        <li className={style.list}>Host an experience</li>
                        <li className={style.list}>Help</li>
                    </ul>
                </div>
            </div>
            <LoginModal login={login} setLogin={setLogin} />
        </>
    )
}

export default MenuExtra