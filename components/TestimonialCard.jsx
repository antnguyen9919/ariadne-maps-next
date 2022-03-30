import React from 'react'
import Image from 'next/image'
const TestimonialCard = ({img,quote,person}) => {
  return (
    <div className='grid  grid-row-3 bg-white h-96 rounded-lg border-4 border-stone-400 justify-center justify-items-center w-100 px-4 py-2'>
        <div className='row-span-2' style={{width: '100%', height: '120px', position: 'relative'}}>
            <Image src ={img} layout='fill'
    objectFit='contain' />
        </div>
        <div className='row-span-3 self-center'>
            <p className='text-center text-base'>{quote}</p>
        </div>
        <div className='row-span-1 self-end'>
            <p className='text-center  font-bold'>{person}</p>
        </div>
    </div>
  )
}

export default TestimonialCard