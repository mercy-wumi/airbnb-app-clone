import React from 'react'
import { ClipboardCheckIcon } from '@heroicons/react/outline'

const Bedroom = ({ title, subtitle }) => {
    return (
        <div className='p-4 border-[1px] border-gray-300 text-lg rounded-xl'>
            <ClipboardCheckIcon className='h-10 w-10 mb-2' />
            <span className='block font-semibold'>{title}</span>
            <span>{subtitle}</span>
        </div>
    )
}

export default Bedroom