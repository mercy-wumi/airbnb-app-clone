// import imgTwo from '../images/imgTwo.jpg'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
import { setWishList, setRemove } from '../features/likes/likeSlice'
import { setRoom, selectRoom } from '../features/home/homeSlice'
import { setLogin } from '../features/modal/modalSlice'

const ExperienceCard = () => {
    const dispatch = useDispatch()
    const { room, homeData } = useSelector((store) => store.home)
    const { wishList } = useSelector((store) => store.likes)
    const { airbnbUser } = useSelector((store) => store.user)

    // const [active, setActive] = useState([])
    // const [room, setRoom] = useState(null)

    const userInfo = useSelector(selectRoom);
    console.log("userInfo", userInfo);


    const handleLike = (id) => {
        if (airbnbUser) {
            console.log(wishList)
            if (wishList.includes(id)) {
                console.log(true)
                console.log(dispatch(setRemove(id)))
                console.log(wishList)
            }
            else {
                dispatch(setWishList(id))
                console.log(wishList)
            }
        }
        else {
            dispatch(setLogin())
        }
    }
    const handleRoom = (data) => {
        console.log(dispatch(setRoom(data)))
        console.log(room)
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {homeData.map((data) => {
                return (
                    <div className='flex flex-col' key={data.id}>
                        <div className='relative'>
                            <HeartIcon key={data.id} onClick={() => handleLike(data)} className={`${wishList.find(wish => wish.id === data.id) ? 'text-pink-600' : 'text-gray-700'} z-10 h-8 w-8 right-4 absolute top-4 cursor-pointer`} />
                            {/* <img src={imgTwo} alt='house-pix' className='rounded-xl object-cover w-full h-64' /> */}
                            <Link to='/rooms' onClick={() => handleRoom(data)}><ImgSlider img={data.img} /></Link>
                        </div>
                        <div>
                            <Link to='/rooms' onClick={() => handleRoom(data)}>
                                <div className='flex justify-between items-center pt-2'>
                                    <p className='font-semibold'>{data.name}</p>
                                    <div className='flex items-center'>
                                        <span>{data.rating}</span>
                                        <StarIcon className='h-5 w-5 ml-1' />
                                    </div>
                                </div>
                                <div className='text-gray-600 mb-1'>
                                    <p>{data.designedBy}</p>
                                    <p>{data.date}</p>
                                </div>
                                <p><span className='font-semibold'>{data.price}</span> night</p>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceCard