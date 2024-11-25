import Link from 'next/link'
import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({destination='/'}) => {
  return (
    <div className="flex">
        <Link href={destination} className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft className='text-2xl'/>
        </Link>
    </div>
  )
}

export default BackButton
