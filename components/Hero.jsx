import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="min-h-screen" style = {{backgroundColor:'#30303d'}}>
  <div className="flex xl:flex-row min-h-screen sm:flex-col">
            <div className='basis-1/4 self-center sm:justify-self-center'>
                <h1>Get to know your customers</h1>
            </div>
            <div className='xl:basis-2/3 sm:basis-1/2 self-end justify-self-end sm:justify-self-center  ' >
            <video src ="/Videos/Hero2vid.mp4" type="videos/mp4" autoPlay playsinline muted loop  />
            </div>
  </div>
</div>
  )
}

export default Hero