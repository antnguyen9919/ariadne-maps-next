import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="xl:h-screen w-full" style = {{backgroundColor:'#30303d'}}>
  <div className="flex xl:flex-row xl:min-h-screen flex-col justify-end">
            <div className='xl:w-1/3  xl:ml-10 w-2/3 self-center justify-self-center text-white text-start  py-10'>
                <h1 className='text-4xl   xl:text-5xl  mb-6 leading-snug'>People Flow To Actionable Insights</h1>
                <p className='text-lg'>Turn your existing customer traffic into an additional source of revenue</p>
                <button>Hello</button>
            </div>
            <div className='xl:flex-1 xl:max-w-4xl w-2/3 self-center xl:self-end ' >
            <video src ="/Videos/Hero2vid.mp4" type="videos/mp4" autoPlay playsinline muted loop  />
            </div>
  </div>
</div>
  )
}

export default Hero