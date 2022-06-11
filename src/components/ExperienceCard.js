// import imgTwo from '../images/imgTwo.jpg'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ImgSlider from './ImgSlider'
import { HeartIcon } from '@heroicons/react/outline'
// import { HeartIcon } from '@heroicons/react/solid'
import { StarIcon } from '@heroicons/react/solid'

const ExperienceCard = () => {
    const { homeData } = useSelector((store) => store.home)
    const [like, setLike] = useState(false)
    const [room, setRoom] = useState(null)

    const handleLike = () => {
        setLike(true)
        console.log(like)
    }
    const handleRoom = () => {

    }

    return (
        <Link to='/rooms' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {homeData.map((data) => {
                return (
                    <div className='flex flex-col' key={data.id}>
                        <div className='relative'>
                            <HeartIcon className='z-10 h-8 w-8 right-4 absolute top-4 text-white cursor-pointer' onClick={handleLike} />
                            {/* <img src={imgTwo} alt='house-pix' className='rounded-xl object-cover w-full h-64' /> */}
                            <ImgSlider img={data.img} />
                        </div>
                        <div>
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
                        </div>
                    </div>
                )
            })}
        </Link>
    )
}

export default ExperienceCard