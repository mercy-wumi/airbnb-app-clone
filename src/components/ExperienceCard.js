// import imgTwo from '../images/imgTwo.jpg'
import ImgSlider from './ImgSlider'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

const ExperienceCard = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative'>
                <HeartIcon className='z-10 h-8 w-8 right-4 absolute top-4 text-white cursor-pointer' />
                {/* <img src={imgTwo} alt='house-pix' className='rounded-xl object-cover w-full h-64' /> */}
                <ImgSlider />
            </div>
            <div>
                <div className='flex justify-between items-center pt-2'>
                    <p className='font-semibold'>Rockbridge, Ohio, US</p>
                    <div className='flex items-center'>
                        <span>4.95</span>
                        <StarIcon className='h-5 w-5 ml-1' />
                    </div>
                </div>
                <div className='text-gray-600 mb-1'>
                    <p>Designed by David Chipperfield</p>
                    <p>Dec 11 - 16</p>
                </div>
                <p><span className='font-semibold'>$679</span> night</p>
            </div>
        </div>
    )
}

export default ExperienceCard